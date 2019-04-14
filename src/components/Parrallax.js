import React, { Component } from 'react'
import '../styles/Parallax.css'

export default class Parallax extends Component {


  activateScroll = () => {
    window.addEventListener('scroll', this.scroll.bind(this))
  }

  // scroll = (e) => {
  //   const parallax = this.props.parallax
  //   const layers = parallax.layers
  //   const topDistance = window.pageYOffset + parallax.pos.y

  //   layers.forEach

  // }

  // renderLayers() {
  //   this.props.parallax.layers.map(layer => {
  //     return  <div
  //               style={
  //                 {
  //                   'background': `url(${layer.url})`
  //                 }
  //               }
  //             ></div>
  //   })
  // }

  render() {
    return (
      <div>
        {/* {this.renderLayers()} */}
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