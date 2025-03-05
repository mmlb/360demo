var APP_DATA = {
  scenes: [
    {
      id: "0-foyer",
      name: "FOYER",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2048,
      initialViewParameters: {
        yaw: 1.6024568116216749,
        pitch: 0.2677975194554705,
        fov: 1.22682949163576,
      },
      linkHotspots: [
        {
          yaw: 0.04484936067729706,
          pitch: 0.3763178795777655,
          rotation: 0,
          target: "1-kitchen--library",
        },
        {
          yaw: 1.6328897312215638,
          pitch: 0.38862646396933975,
          rotation: 0,
          target: "5-living-room",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "1-kitchen--library",
      name: "KITCHEN + LIBRARY",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2048,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 2.866103085793588,
          pitch: 0.3546057895392547,
          rotation: 0,
          target: "0-foyer",
        },
        {
          yaw: 2.151352871451923,
          pitch: 0.41161636705407645,
          rotation: 0,
          target: "2-kitchen-",
        },
        {
          yaw: 1.0551415192757148,
          pitch: 0.4040589034210864,
          rotation: 0,
          target: "6-kitchen--hall",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "2-kitchen-",
      name: "KITCHEN ",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2048,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 2.8199180914475663,
          pitch: 0.4007970647579562,
          rotation: 0,
          target: "3-dining--kitchen",
        },
        {
          yaw: 0.19102285567663735,
          pitch: 0.3550694265216858,
          rotation: 0,
          target: "1-kitchen--library",
        },
      ],
      infoHotspots: [
        {
          yaw: 2.2356076437297183,
          pitch: 0.27456888309221483,
          title: "Slider + Fire Place Option",
          text: "Ask us about this option",
        },
      ],
    },
    {
      id: "3-dining--kitchen",
      name: "DINING + KITCHEN",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2048,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -3.0204711691617376,
          pitch: 0.5295684471847153,
          rotation: 0,
          target: "2-kitchen-",
        },
        {
          yaw: 1.9726883118773388,
          pitch: 0.31057236673482613,
          rotation: 0,
          target: "4-living--dining",
        },
        {
          yaw: -1.6888044164755627,
          pitch: 0.3799238186892975,
          rotation: 0,
          target: "6-kitchen--hall",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "4-living--dining",
      name: "LIVING + DINING",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2048,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 1.3633481065319604,
          pitch: 0.2787589468770495,
          rotation: 0,
          target: "5-living-room",
        },
        {
          yaw: 1.7469562626070694,
          pitch: 0.23096459834842165,
          rotation: 0,
          target: "0-foyer",
        },
        {
          yaw: 2.8616978183848616,
          pitch: 0.3102972524434815,
          rotation: 0,
          target: "3-dining--kitchen",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "5-living-room",
      name: "LIVING ROOM",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2048,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.002101062595400549,
          pitch: 0.2718816094286183,
          rotation: 0,
          target: "4-living--dining",
        },
        {
          yaw: 1.5525802394430528,
          pitch: 0.5712402912651005,
          rotation: 0,
          target: "9-primary-bedroom",
        },
        {
          yaw: -2.600335410439957,
          pitch: 0.6542098294484013,
          rotation: 0,
          target: "0-foyer",
        },
        {
          yaw: -2.1708515763548952,
          pitch: 0.27295552298348724,
          rotation: 0,
          target: "1-kitchen--library",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "6-kitchen--hall",
      name: "KITCHEN + HALL",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2048,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.48153119604250705,
          pitch: 0.3465802248316816,
          rotation: 0,
          target: "3-dining--kitchen",
        },
        {
          yaw: 2.680679102801575,
          pitch: 0.4243183567893887,
          rotation: 0,
          target: "1-kitchen--library",
        },
        {
          yaw: -1.614179317352777,
          pitch: 0.3514565743818707,
          rotation: 0,
          target: "7-office-1",
        },
        {
          yaw: 1.2858416922892673,
          pitch: 0.6967773588012367,
          rotation: 0,
          target: "2-kitchen-",
        },
      ],
      infoHotspots: [
        {
          yaw: 0.07240201648057543,
          pitch: 0.3934550213800172,
          title: "Slider + Fire Place Option",
          text: "Ask us about this option.&nbsp;",
        },
      ],
    },
    {
      id: "7-office-1",
      name: "OFFICE 1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2048,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 1.9170118225663675,
          pitch: 0.7986475179387096,
          rotation: 0,
          target: "8-office",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "8-office",
      name: "OFFICE",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2048,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.8108633941329728,
          pitch: 0.6304029709485697,
          rotation: 0,
          target: "6-kitchen--hall",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "9-primary-bedroom",
      name: "PRIMARY BEDROOM",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2048,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.027882949639231214,
          pitch: 0.31717790650047206,
          rotation: 0,
          target: "5-living-room",
        },
      ],
      infoHotspots: [],
    },
  ],
  name: "Project Title",
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: true,
    fullscreenButton: true,
    viewControlButtons: true,
  },
};
