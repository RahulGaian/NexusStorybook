import ReactECharts from 'echarts-for-react';
import React from 'react';
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
    width: 210px;
    height: 210px;
  }
  @media screen and (max-width: 600px) {
    width: 300px;
    height: 300px;
  }
`;
const ChartComponent6 = ({data}) => {



  const formatYAxisValue = (value) => {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    } else {
      return value;
    }
  };

  

  const getOption = () => {
    const years = Array.from({ length: 10 }, (_, index) => index + 1);

    const Allapps = ['cLINK', 'GoFEMA', 'Hear,here', "Izak", "Reve(e)", "Around", "Aegis", "Museo", "ImpressIO", "AmplyFund"];

    let presentApps = [];
    let data_dict = [];
    const colorPalette = ['#91c7ae','#0000ff','#d48265','#c23531', '#2f4554', '#61a0a8','#fcce10', '#749f83', '#ca8622', '#bda29a', '#6e7074'];

    for (let i of Allapps) {
      let app_data = years.map((year) => data[0][`${i}_YEAR_${year}`]);

      if (app_data[0] !== undefined) {
        data_dict.push({
          name: i,
          type: 'bar',
          stack: 'total',
          barWidth: '70%',
          itemStyle: {
            color: colorPalette[data_dict.length % colorPalette.length], // Use a cyclic color from the palette

            opacity: 0.7
          },
          data: app_data,
        });
        presentApps.push(i);
      }
    }

    return {
      legend: {
        data: presentApps,
        width: "100%",
        textStyle: {
          fontSize: 10,
        }
      },
      grid: {
        left: 65,
      },
      title: {
        text: "App Revenue",
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
      series: data_dict,
    };
  };

  return (
    <ChartContainer  id="main5">

    <ReactECharts
      option={getOption()}
      style={{ height: '100%', width: '100%'}}
      />
      </ChartContainer>
  );
};

export default ChartComponent6;