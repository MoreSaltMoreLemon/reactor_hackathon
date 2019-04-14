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
      url: '/images/mountainside/mtn_sky.png', 
      depth: .4, 
      'background-position': 0 
    },
    {
      url: '/images/mountainside/mtn_background_mtns.png', 
      depth: .3, 
      'background-position': 0 
    },
    {
      url: '/images/mountainside/mtn_foreground_mtns.png', 
      depth: .2, 
      'background-position': 0 
    },
    {
      url: '/images/mountainside/mtn_trees.png', 
      depth: .1, 
      'background-position': 0 
    },
  ]
}

export { Mountain }