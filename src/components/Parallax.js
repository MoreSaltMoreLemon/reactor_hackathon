import React, { Component } from 'react'
import Layer from './Layer'
import '../styles/Parallax.css'

export default class Parallax extends Component {


  activateScroll = () => {
    window.addEventListener('scroll', this.scroll.bind(this))
  }

  scroll = (e) => {
    const parallax = this.props.parallax
    const layers = parallax.layers
    const topDistance = window.pageYOffset + parallax.pos.y

    // layers.forEach

  }

  renderLayers() {
    return this.props.parallax.layers.map(layer => {
      return  <Layer key={layer.url} layer={layer} />
    })
  }

  render() {
    // debugger
    const px = this.props.parallax
    console.log("PARALLAX", px)
    const style = {
      // height: px.pos.height,
      // width: px.pos.width,
      zIndex: px.pos.zDepth,
      // top: px.pos.y,
      // left: px.pos.x
    }
    return (
      <div className='parallax' style={style}>
        {/* {JSON.stringify(this.props.parallax)} */}
        {this.renderLayers()}
      </div>
    )
  }
}



// window.addEventListener 'scroll',
//   const topDistance = window.pageYOffset + 
//   layers = document.querySelectorAll("[data-type='parallax']")
  
//   for (layer of layers)
//     const depth = layer.depth
//     const movement = -(topDistance * depth)
//     translate3d = 'translate3d(0, ' + movement + 'px, 0)'
//     layer.style.transform = translate3d
//   return