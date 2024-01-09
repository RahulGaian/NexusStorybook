import ReactECharts from 'echarts-for-react';
import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
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
    width: 210px;
    height: 210px;
  }
  @media screen and (max-width: 600px) {
    width: 300px;
    height: 300px;
  }
`;
const ChartComponent6 = ({data}) => {
    let chartRef = useRef();
  
  const [presentApps,setPresentApps] = useState([])
  const [option,setOption] = useState({})
  useEffect(()=>{
    const getOption = () => {
      const years = Array.from({ length: 10 }, (_, index) => index + 1);
  
      const Allapps = ['cLINK', 'GoFEMA', 'Hear,here', "Izak", "Reve(e)", "Around", "Aegis", "Museo", "ImpressIO", "AmplyFund"];
  
      let data_dict = [];
      const colorPalette = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#749f83', '#ca8622', '#bda29a', '#6e7074','#91c7ae', '#fcce10'];
  
      for (let i of Allapps) {
        let app_data = years.map((year) => data[0][`${i}_YEAR_${year}`]);
  
        if (app_data[0] !== undefined) {
          data_dict.push({
            name: i,
            type: 'bar',
            stack: 'total',
            barWidth: '30%',
            smooth: true,
            itemStyle: {
              color: colorPalette[data_dict.length % colorPalette.length], // Use a cyclic color from the palette
  
              opacity: 0.7
            },
            data: app_data,
          });
          // presentApps.push(i);
          setPresentApps(prev => [...prev,i])
        }
      }
  
      return {
        legend: {
          data: presentApps,
          width: "100%",
          textStyle: {
            fontSize: 7
          }
        },
        grid: {
          left: 65,
        },
        title: {
          text: "Yearly Projection",
          bottom: 0,
          left: "center",
          textStyle: {
            fontSize: 14,
            textAlign: 'center'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: formatYAxisValue,
          },
        },
        xAxis: {
          type: 'category',
          data: years.map((year) => `Year ${year}`),
        },
        series: data_dict,
      };
    };

    setOption(getOption)
  
    return ()=>{
      try{

        chartRef.current.dispose();
      }
      catch{
        console.log("removed")
      }
    
    }
  },[data])
  const formatYAxisValue = (value) => {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    } else {
      return value;
    }
  };

  


  return (
    <ChartContainer  id="main9">
    <ReactECharts
    ref={chartRef}
      option={option}
      style={{ height: '100%', width: '100%'}}
      />
      </ChartContainer>
  );
};

export default ChartComponent6;