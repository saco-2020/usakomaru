<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
  import mapboxgl from 'mapbox-gl'

  const MapboxLanguage = require('@mapbox/mapbox-gl-language')

  export default {
    data () {
      return {
        map: {}
      }
    },
    mounted () {
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