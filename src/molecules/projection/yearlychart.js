import React, { useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import styled from 'styled-components';

const ChartContainer = styled.div`
  width: 300px;
  height: 300px;

  @media screen and (max-width: 1800px) and (min-width: 1500px) {
    width: 290px;
    height: 270px;
  }

  @media screen and (max-width: 1500px) and (min-width: 1250px) {
    width: 265px;
    height: 245px;
  }

  @media screen and (max-width: 1250px) and (min-width: 980px) {
    width: 220px;
    height: 200px;
  }

  @media screen and (max-width: 980px) {
    width: 220px;
    height: 200px;
  }

  @media screen and (max-width: 600px) {
    width: 250px;
    height: 250px;
  }
`;

const ChartComponent3 = ({ data }) => {
  // Extract YEAR data from the JSON
  const yearData = data.reduce((acc, dma) => {
    for (let i = 1; i <= 3; i++) {
      acc[`YEAR_${i}`] = acc[`YEAR_${i}`] || [];
      acc[`YEAR_${i}`].push(dma[`YEAR_${i}`] || 0);
    }
    return acc;
  }, {});

  const totalData = Object.values(yearData).map((year) => year.reduce((sum, value) => sum + value, 0));

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
          totalData[did] <= 0 ? 0 : d / totalData[did]
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
        data: data.map((dma) => dma.DMA)
      },
      series
    };

    myChart.setOption(option);

    // Clean up
    return () => {
      myChart.dispose();
    };
  }, [data, yearData, totalData]);

  return <ChartContainer id="maindiv" style={{ height: '100%', width: '100%' }} />;
};

export default ChartComponent3;
