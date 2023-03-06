
  

<script>
// you can import in a particular component and register the component like below
import { createApp } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

export default {
  name: 'Chart',
  components: {
    apexchart: VueApexCharts,
  },
  data: function() {
      return {
        series: [{
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20],
          }, {
            name: 'Series 2',
            data: [20, 30, 40, 80, 20, 80],
          }, ],
          chartOptions: {
            chart: {
              height: 350,
              type: 'radar',
              dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1
              }
            },
            title: {
              // text: 'Radar Chart'
            },
            stroke: {
              width: 2
            },
            fill: {
              opacity: 0.1
            },
            markers: {
              size: 0
            },
            xaxis: {
              categories: ['2011', '2012', '2013', '2014', '2015', '2016']
            }
          },
          
      }
    },
  
}

</script>
<template>
    <div id="chart">
        <apexchart type="radar" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
  </template>