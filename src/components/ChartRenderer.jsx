import React from 'react';
import { Chart } from 'react-chartjs-2';

const ChartRenderer = ({ chartConfig }) => {
  const parseChartData = (config) => {
    const baseConfig = {
      type: config.type === 'comparison' ? 'bar' : config.type,
      data: {
        labels: [],
        datasets: []
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: config.title || ''
          },
          subtitle: {
            display: !!config.notes,
            text: config.notes || ''
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: config.xAxis || ''
            }
          },
          y: {
            title: {
              display: true,
              text: config.yAxis?.split('(')[0].trim() || ''
            },
            ticks: {
              callback: function(value) {
                const unit = config.yAxis?.match(/\((.*?)\)/)?.[1];
                return unit ? `${value.toLocaleString()} ${unit}` : value.toLocaleString();
              }
            }
          }
        }
      }
    };

    // Handle different chart types
    switch (config.type) {
      case 'comparison':
      case 'bar':
        baseConfig.options.indexAxis = config.type === 'comparison' ? 'y' : 'x';
        baseConfig.data = {
          labels: config.data.map(item => item.label),
          datasets: [{
            label: config.datasetLabel || '',
            data: config.data.map(item => item.value),
            backgroundColor: config.data.map((_, i) => 
              `rgba(121, 104, 121, ${0.3 + (i * 0.2)})`
            ),
            borderColor: 'rgba(121, 104, 121, 1)',
            borderWidth: 1
          }]
        };
        break;
      case 'spider':
        baseConfig.type = 'radar';
        baseConfig.data = {
          labels: config.categories,
          datasets: config.datasets.map((dataset, i) => ({
            label: dataset.label,
            data: dataset.values,
            fill: true,
            backgroundColor: i === 0 ? 'rgba(65, 131, 196, 0.2)' : 'rgba(121, 104, 121, 0.2)',
            borderColor: i === 0 ? 'rgba(65, 131, 196, 1)' : 'rgba(121, 104, 121, 1)',
            pointBackgroundColor: i === 0 ? 'rgba(65, 131, 196, 1)' : 'rgba(121, 104, 121, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: i === 0 ? 'rgba(65, 131, 196, 1)' : 'rgba(121, 104, 121, 1)'
          }))
        };
        baseConfig.options.scales = {
          r: {
            min: 0,
            max: 100,
            ticks: {
              stepSize: 20
            }
          }
        };
        break;
      // Add other chart types here
    }

    return baseConfig;
  };

  return (
    <div style={{ 
      margin: '2rem 0', 
      padding: '1rem', 
      background: 'rgba(255, 255, 255, 0.4)', 
      borderRadius: '8px' 
    }}>
      <Chart {...parseChartData(chartConfig)} />
    </div>
  );
};

export default ChartRenderer;
