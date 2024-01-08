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

const ChartComponent4 = ({ data }) => {
  useEffect(() => {
    data.forEach((dmaData) => {
      renderChart(dmaData.DMA, dmaData);
    });
  }, [data]);

  const renderChart = (dma, dmaData) => {
    const xAxisData = Object.keys(dmaData).filter((key) => key.startsWith('YEAR_'));
    const barSeriesData = xAxisData.map((key) => dmaData[key]);
    const lineSeriesData = xAxisData.map((key) => dmaData[key]); // Adjust the multiplier as needed

    const chartDom = document.getElementById(`main3`);
    const myChart = echarts.init(chartDom);



    function formatYAxisValue(value) {
      if (value >= 1000000) {
        return (value / 1000000).toFixed(1) + 'M';
      } else if (value >= 1000) {
        return (value / 1000).toFixed(1) + 'K';
      } else {
        return value;
      }
    }


    const option = {
      grid: {
        left: 50, // Adjust the left margin as needed
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999',
          },
        },
        formatter: function (params) {
          let tooltipText = params[0].name + '<br>';
          params.forEach((param) => {
            tooltipText += param.seriesName + ': ' + formatYAxisValue(param.value) + '<br>';
          });
          return tooltipText;
        },
      },
      
    
      legend: {
        data: ['Yearly Data', 'Line Data'],
      },
      xAxis: [
        {
          
          type: 'category',
          data: xAxisData,
          axisPointer: {
            type: 'shadow',
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Values (Bar)',
          axisLabel: {
            formatter: function (value) {
              return formatYAxisValue(value);
            },
          },
          left: 40, 
        },
      ],
      series: [
        {
          name: 'Yearly Data',
          type: 'bar',
          yAxisIndex: 0, // Associate with the first y-axis
          barWidth: '60%',
          itemStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowBlur: 10,
          },
          label: {
            show: true,
            position: 'top',
            formatter: function (params) {
              return formatYAxisValue(params.value);
            },
          },
          data: barSeriesData,
        },
        {
          name: 'Line Data',
          type: 'line',
          yAxisIndex: 0, // Associate with the first y-axis
          data: lineSeriesData,
        },
      ],
    };

    myChart.setOption(option);

    // Clean up
    return () => {
      myChart.dispose();
    };
  };

  return (
    <ChartContainer>
      {data.map((dmaData) => (
        <div key={dmaData.DMA} id={`main3`} style={{ height: '100%', width: '100%' }} />
      ))}
    </ChartContainer>
  );
};

export default ChartComponent4;