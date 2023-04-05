<template>
  <div ref="mapEl" class="map"></div>
</template>

<script setup>
import mapboxgl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { onMounted, ref } from 'vue'
const mapEl = ref(null)

const initOption = {
  style: {
    version: 8,
    id: '43f36e14-e3f5-43c1-84c0-50a9c80dc5c7',
    sources: {
      'tdt-vec': {
        type: 'raster',
        tiles: [
          `https://t0.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=${window.MY_KEY}`
        ],
        tileSize: 256
      }
    },
    layers: [
      {
        id: 'tdt-tiles-layer',
        type: 'raster',
        source: 'tdt-vec'
      }
    ]
  }
}

onMounted(() => {
  const map = new mapboxgl.Map({
    container: mapEl.value,
    ...initOption
  })
  map.on('load', () => {
    // 添加标注资源
    map.addSource('tdt-cva', {
      type: 'raster',
      tiles: [
        `https://t0.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=${MY_KEY}`
      ],
      tileSize: 256
    })
    // 添加标注图层
    map.addLayer({
      id: 'tdt-cva-layer',
      type: 'raster',
      source: 'tdt-cva'
    })
  })
})
</script>
<style scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>
