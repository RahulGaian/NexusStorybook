import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
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

const ChartComponent2 = ({ data }) => {
    const [selectedDMA, setSelectedDMA] = useState(data[0].DMA);
    const [chartData, setChartData] = useState([]);
  
    const selectedData = data.find((entry) => entry.DMA === selectedDMA);
  
    useEffect(() => {
      const selectedData = data.find((entry) => entry.DMA === selectedDMA);
      const mValues = Object.keys(selectedData)
        .filter((key) => key.startsWith('YEAR_'))
        .map((key) => selectedData[key]);
  
      setChartData(mValues);
    }, [selectedDMA, data]);
  
    const getOption = () => {
      const xAxisData = Array.from({ length: chartData.length }, (_, index) => `YEAR_${index+1}`);
      
      return {
        grid: {
          left: 65, // Adjust the left margin as needed
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          data: xAxisData,
        },
        yAxis: {
          type: 'value',
        },
        tooltip: {
          trigger: 'axis',
          formatter: (params) => {
            const dma = params[0].name;
            const value = params[0].value;
            const dmaName = dma.DMA;
            return `${dmaName}: ${value}`;
          },
        },
        series: [
          {
            data: chartData,
            type: 'bar',
            areaStyle: {
              color: 'rgba(135, 206, 250, 0.2)', // Light Sky Blue with 0.7 opacity
              
            },
            lineStyle: {
              color: 'rgba(135, 206, 250, 1)', // Solid line color
            },
            emphasis: {
              focus: 'series',
            },
          },
        ],
      };
    };
  
    const handleDMAChange = (event) => {
      setSelectedDMA(event.target.value);
    };
  
    return (
      <ChartContainer>
        <ReactECharts option={getOption()} style={{ height: '100%', width: '100%'}} />
      </ChartContainer>
    );
  };
  
  export default ChartComponent2;
