export const images = {
  zhuren: 'https://pic.zhangshichun.top/pic/20221129-12.png',
  bao: 'https://pic.zhangshichun.top/pic/20221129-10.png',
  nan: 'https://pic.zhangshichun.top/pic/20221129-11.png'
}

export const boys = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: '德育处主任',
        icon: 'zhuren'
      },
      geometry: {
        coordinates: [114.34495622042738, 30.51879704948628],
        type: 'Point'
      }
    },
    {
      type: 'Feature',
      properties: {
        name: '战场小包',
        icon: 'bao'
      },
      geometry: {
        coordinates: [114.46248908403493, 30.52385942598788],
        type: 'Point'
      }
    },
    {
      type: 'Feature',
      properties: {
        name: '南方者',
        icon: 'nan'
      },
      geometry: {
        coordinates: [114.4188340204089, 30.481906063384173],
        type: 'Point'
      }
    }
  ]
}

export const geojsonArea = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [
          [
            [114.46779835239658, 30.605050523900303],
            [114.45307942925189, 30.624907272879312],
            [114.4288130916147, 30.622168652698548],
            [114.41379951994367, 30.6195846480625],
            [114.38794195122841, 30.608629101366674],
            [114.3696757009294, 30.57943525080438],
            [114.41528335032035, 30.543669137007882],
            [114.44153872673763, 30.53852985669873],
            [114.4773415169152, 30.54366913640706],
            [114.4837064566533, 30.560113005443625],
            [114.47376123831367, 30.58922552097347],
            [114.46819191604362, 30.606004058021256],
            [114.46780928809392, 30.60501608234722],
            [114.46779835239658, 30.605050523900303]
          ]
        ],
        type: 'Polygon'
      }
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [
          [
            [114.4607075938116, 30.466500864153844],
            [114.37963045409833, 30.478344631182154],
            [114.31710486256651, 30.46353969699203],
            [114.38621826607522, 30.372908950433754],
            [114.47966309031347, 30.370537758256432],
            [114.46236452860569, 30.44663194215289],
            [114.46080027152675, 30.46637744345206],
            [114.46065225645935, 30.46637744345206],
            [114.4607075938116, 30.466500864153844]
          ]
        ],
        type: 'Polygon'
      }
    }
  ]
}
