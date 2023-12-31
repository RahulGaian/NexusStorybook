import React, { useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import styled from 'styled-components';

const ChartContainer = styled.div`
  width: 350px;
  height: 350px;

  @media screen and (max-width: 1800px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (max-width: 1500px) {
    width: 250px;
    height: 250px;
  }
  @media screen and (max-width: 1250px) {
    width: 230px;
    height: 230px;
  }
  @media screen and (max-width: 600px) {
    width: 300px;
    height: 300px;
  }
`;

const ChartComponent3 = ({ data }) => {
  // Extract YEAR data from the JSON
  const yearData = data.reduce((acc, dma) => {
    for (let i = 1; i <= 5; i++) {
      acc[`YEAR_${i}`] = acc[`YEAR_${i}`] || [];
      acc[`YEAR_${i}`].push(dma[`YEAR_${i}`] || 0);
    }
    return acc;
  }, {});

  const totalData = Object.values(yearData).map((year) => year.reduce((sum, value) => sum + value, 0));
  const totalData1 = totalData.reduce((sum, value) => sum + value, 0)
  useEffect(() => {
    const chartDom = document.getElementById('maindiv');
    const myChart = echarts.init(chartDom);

    const grid = {
      left: 100,
      right: 100,
      top: 50,
      bottom: 50
    };

    const series = Object.keys(yearData).map((key, sid) => {
      return {
        name: key,
        type: 'bar',
        stack: 'total',
        barWidth: '60%',
        label: {
          show: true,
          formatter: (params) => Math.round(params.value * 1000) / 10 + '%'
        },
        data: yearData[key].map((d, did) =>
          totalData[did] <= 0 ? 0 : d / totalData1
        )
      };
    });

    const option = {
      legend: {
        selectedMode: false
      },
      grid,
      yAxis: {
        type: 'value'
      },
      xAxis: {
        type: 'category',
        // data: data.map((dma) => dma.DMA)
        data:["total"]
      },
      series
    };

    myChart.setOption(option);

    // Clean up
    return () => {
      myChart.dispose();
    };
  }, [data, yearData, totalData]);

  return <ChartContainer id="maindiv" />;
};

export default ChartComponent3;
