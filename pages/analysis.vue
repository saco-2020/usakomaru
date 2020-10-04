<template>
    <div>
        <v-row>
            <v-col cols="12">
            <h2>可視化</h2>
            </v-col>
            <br>
            <v-col cols="12" md="12">
                <h3>天候情報</h3>
                <div>
                    <div id="map"></div>
                </div>
            </v-col>
        </v-row>
        <v-content>
            <v-container>
                <v-row class="correlation">
                    <v-col cols="12">
                        <h2 class="mt-3">薬注文数と地表面温度の相関分析</h2>
                        <p>縦軸：注文数、 横軸：地表面温度[℃]</p>
                    </v-col>
                    <v-col cols="12">
                        <Scatter :chartdata="scatterdata" />
                    </v-col>
                </v-row>
            </v-container>
            <v-container>
                <v-row>
                    <v-col cols="12" >
                        <h2>注文数の時間推移</h2>
                    </v-col>
                    <v-col cols="12" md="6">
                        <h3 class="mt-3">頭痛薬</h3>
                        <BarChart :chartdata="bardata" :options="options"/>
                    </v-col>
                    <v-col cols="12" md="6">
                        <h3 class="mt-3">腹痛薬</h3>
                        <BarChart :chartdata="bardata" />
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </div>
</template>

<style>
.correlation {
  max-width: 60% !important;
}
</style>

<script>
import BarChart from '@/components/BarChart.vue'
import Scatter from '@/components/Scatter.vue'

import mapboxgl from 'mapbox-gl'
const MapboxLanguage = require('@mapbox/mapbox-gl-language')

export default {
  components: {
    BarChart,
    Scatter,
  },
  data() {
    return {
        map: {},
        scatterdata: {
            datasets: [
                {
                    label: '頭痛薬',
                    data: [{x:24, y:20},{x:38, y:30},{x:13, y:12},{x:20, y:18},{x:30, y:19}],
                    backgroundColor: 'mediumvioletred',
                    pointRadius: 5,
                },
                {
                    label: '腹痛薬',
                    data: [{x:24, y:29},{x:38, y:7},{x:13, y:5},{x:20, y:14},{x:30, y:30}],
                    backgroundColor: 'teal',
                    pointRadius: 5,
                },
                {
                    label: '解熱薬',
                    data: [{x:24, y:18},{x:38, y:38},{x:13, y:9},{x:20, y:15},{x:30, y:27}],
                    backgroundColor: 'gold',
                    pointRadius: 5,
                },
                {
                    label: '風邪薬',
                    data: [{x:24, y:16},{x:38, y:3},{x:13, y:37},{x:20, y:23},{x:30, y:15}],
                    backgroundColor: 'darkorange',
                    pointRadius: 5,
                },
                {
                    label: '軟膏',
                    data: [{x:24, y:14},{x:38, y:16},{x:13, y:20},{x:20, y:10},{x:30, y:11}],
                    backgroundColor: 'royalblue',
                    pointRadius: 5,
                },
            ],
        },
        options: {
            scales: {
                xAxes: [{
                    scaleLabel: {
                    display: true,
                    labelString: '地表面温度'
                    },
                    ticks: {
                    suggestedMin: 0,
                    suggestedMax: 50,
                    stepSize: 5,
                    callback: function(value, index, values){
                        return value
                    }
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: '薬注文数'
                    },
                    ticks: {
                        suggestedMax: 40,
                        suggestedMin: 0,
                        stepSize: 10,
                        callback: function(value, index, values){
                            return  value
                        }
                    }
                }]
            },
        },
        bardata: {
            labels: ['10/1', '10/2', '10/3', '10/4', '10/5', '10/6', '10/7'],
            datasets: [
                {
                    barPercentage: 0.5,
                    barThickness: 6,
                    maxBarThickness: 8,
                    minBarLength: 2,
                    label: ['A薬局'],
                    data: [14, 20, 14, 16, 23, 12, 15],
                    backgroundColor: 'mediumvioletred',
                },
                {
                    barPercentage: 0.5,
                    barThickness: 6,
                    maxBarThickness: 8,
                    minBarLength: 2,
                    label: ['B薬局'],
                    data: [3, 6, 4, 2, 8, 5, 7],
                    backgroundColor: 'teal',
                },
                {
                    barPercentage: 0.5,
                    barThickness: 6,
                    maxBarThickness: 8,
                    minBarLength: 2,
                    label: ['C薬局'],
                    data: [2, 4, 3, 6, 7, 9, 11],
                    backgroundColor: 'gold',
                },
                {
                    barPercentage: 0.5,
                    barThickness: 6,
                    maxBarThickness: 8,
                    minBarLength: 2,
                    label: ['D薬局'],
                    data: [6, 8, 10, 5, 14, 20, 11],
                    backgroundColor: 'royalblue',
                },
            ],
        },
    }
  },
  async mounted () {
      const weatherData = await this.$axios
      .get('http://api.openweathermap.org/data/2.5/find?lat=-6.842073&lon=39.016626&cnt=10&appid=dabd7fcb81c4366c68e36272dbeb1b47')
      .then(
        (response) => {
          return response.data
        },
        // eslint-disable-next-line handle-callback-err
        (error) => {
          return error.response
        }
      )

      mapboxgl.accessToken = 'pk.eyJ1IjoiaGlkZXlhc3UiLCJhIjoiY2tmdHZvOG5nMGt0bTJwdDgyZmVzM29sMCJ9.NmNSZ6tkUCdZmLdSFpQ4Ww'
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v10',
        zoom: 12,
        center: [-122.447303, 37.753574]
      })

      this.map.addControl(new MapboxLanguage({
        defaultLanguage: 'ja'
      }))

      this.map.on('load', () => {
        this.map.addLayer({
          'id': 'population',
          'type': 'circle',
          'source': {
            type: 'vector',
            url: 'mapbox://examples.8fgz4egr'
          },
          'source-layer': 'sf2010',
          'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
              'base': 1.75,
              'stops': [
                [12, 2],
                [22, 180]
              ]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
              'match',
              ['get', 'ethnicity'],
              'White',
              '#fbb03b',
              'Black',
              '#223b53',
              'Hispanic',
              '#e55e5e',
              'Asian',
              '#3bb2d0',
              /* other */ '#ccc'
            ]
          }
        });
      });
    }
}
</script>

<style>
#map {
  width: 100%;
  height: 100vh;
}
</style>