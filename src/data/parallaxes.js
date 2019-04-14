const Mountain = {
  pos: {
    x: 0, 
    y: 0,
    // height: '100%',
    // width: '100vw',
    zDepth: -1
  },
  layers: [
    {
      id: 4,
      url: '/images/mountainside/mtn_sky.png', 
      depth: 3,
      scale: 2,  
      'z': -4 
    },
    {
      id: 3,
      url: '/images/mountainside/mtn_background_mtns.png', 
      depth: 2.5,
      scale: 2, 
      'z': -3 
    },
    {
      id: 2,
      url: '/images/mountainside/mtn_foreground_mtns.png', 
      depth: 1.8,
      scale: 2, 
      'z': -2
    },
    {
      id: 1,
      url: '/images/mountainside/mtn_trees.png', 
      depth: 1.4,
      scale: 2, 
      'z': -1
    },
  ]
}

export { Mountain }