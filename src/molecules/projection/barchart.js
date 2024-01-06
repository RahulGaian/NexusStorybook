import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
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
            const dmaName = selectedData.DMA;
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
        <label htmlFor="dmaSelect" style={{display: "none"}}>Select DMA:</label>
        <select id="dmaSelect" onChange={handleDMAChange} value={selectedDMA} style={{display: "none"}}>
          {data.map((entry) => (
            <option key={entry.DMA} value={entry.DMA}>
              {entry.DMA}
            </option>
          ))}
        </select>
        <ReactECharts option={getOption()} style={{ height: '100%', width: '100%'}} />
      </ChartContainer>
    );
  };
  
  export default ChartComponent2;
