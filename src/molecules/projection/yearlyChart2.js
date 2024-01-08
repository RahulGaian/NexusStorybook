import * as echarts from 'echarts';
import React, { useEffect } from 'react';
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

const ChartComponent5 = ({ data }) => {

  function formatYAxisValue(value) {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + 'M';
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'K';
    } else {
      return value;
    }
  }

  useEffect(() => {
    const chartDom = document.getElementById('main5');
    const myChart = echarts.init(chartDom);

    const years = Array.from({ length: 10 }, (_, index) => index + 1);


    let Allapps =['cLINK','GoFEMA','Hear,here',"Izak","Reve(e)","Around","Aegis","Museo","ImpressIO","AmpliFund"]


    let presentApps = []
    let data_dict = []
    for(let i of Allapps){
        let app_data = years.map((year) => data[0][`${i}_YEAR_${year}`]);
        
        if(app_data[0] !== undefined  ){

            data_dict.push( {name: i,
                type: 'bar',
                stack: 'total',
                barWidth: '30%',
                data: app_data,
            }
            );
            presentApps.push(i)

      }
    }

    // console.log(data_dict)
    const option = {
      legend: {
        data: presentApps,
      },
      grid: {
        left: 100,
        right: 100,
        top: 50,
        bottom: 50,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
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

    series :data_dict
    };

    myChart.setOption(option);

    // Clean up
    return () => {
      myChart.dispose();
    };
  }, [data]);

  return (
      <ChartContainer id="main5"/>
  );
};

export default ChartComponent5;