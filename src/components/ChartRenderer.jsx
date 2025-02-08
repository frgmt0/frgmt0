import React from 'react';
import { Chart } from 'react-chartjs-2';

const ChartRenderer = ({ chartConfig }) => {
  const parseChartData = (config) => {
    const baseConfig = {
      type: config.type,
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
      case 'bar':
        baseConfig.data = {
          labels: config.data.map(item => item.label),
          datasets: [{
            label: config.datasetLabel || '',
            data: config.data.map(item => item.value),
            backgroundColor: 'rgba(121, 104, 121, 0.5)',
            borderColor: 'rgba(121, 104, 121, 1)',
            borderWidth: 1
          }]
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
