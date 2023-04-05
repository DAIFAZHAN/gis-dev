<template>
  <div ref="mapEl" class="map"></div>
</template>

<script setup>
import mapboxgl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { onMounted, ref } from 'vue'
import { geojsonArea, images, boys } from './data/gisData'
const mapEl = ref(null)

const initOption = {
  style: {
    version: 8,
    id: '43f36e14-e3f5-43c1-84c0-50a9c80dc5c7',
    glyphs: 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf', // 解决名字图层报错
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
        source: 'tdt-vec',
        paint: {
          'raster-brightness-max': 0.7, // 最大亮度
          'raster-brightness-min': 0.3, // 最小亮度
          'raster-hue-rotate': 20, // 色相变换的角度
          'raster-saturation': 0.7 // 饱和度
        }
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

  // 加载多边形块
  map.on('style.load', () => {
    map.addSource('geojson-area-source', {
      type: 'geojson',
      data: geojsonArea
    })
    map.addLayer({
      id: 'geojson-area-layer',
      type: 'fill',
      source: 'geojson-area-source',
      layout: {},
      paint: {
        'fill-color': 'red',
        'fill-opacity': 0.5
      }
    })
  })

  // 加载图标和文本
  const loadImages = async (imgs) => {
    await Promise.all(
      Object.entries(imgs).map(
        ([key, url]) =>
          new Promise((resolve) => {
            map.loadImage(url, (error, res) => {
              if (error) throw error
              map.addImage(key, res)
              resolve(res)
            })
          })
      )
    )
  }
  map.on('style.load', async () => {
    // 加载图片
    await loadImages(images)
    // 添加位置资源
    map.addSource('boys-source', {
      type: 'geojson',
      data: boys
    })
    // 添加ICON图层
    map.addLayer({
      id: 'boys-icon-layer',
      type: 'symbol',
      source: 'boys-source',
      layout: {
        'icon-image': '{icon}',
        'icon-size': 0.2,
        'icon-anchor': 'center',
        'icon-rotation-alignment': 'viewport',
        'icon-allow-overlap': true
      }
    })
    // 添加名字图层
    map.addLayer({
      id: 'boys-name-layer',
      type: 'symbol',
      source: 'boys-source',
      layout: {
        'text-field': '{name}',
        'text-size': 14,
        'text-offset': [0, 2.4], // 名字要设置偏移，避免被头像挡住
        'text-allow-overlap': true
      },
      paint: {
        'text-color': 'white'
      }
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
