import React, { Component } from 'react'
import '../styles/Parallax.css'

export default class Layer extends Component {

  generateStyle(layer) {
    console.log("LAYER STYLE", layer)
    return {
      // 'backgroundImage': `url('${layer.url}')`,
      // 'transform': `translateZ(${layer.depth}px) scale(${layer.scale})`,
      // 'zIndex': layer.z
    }
  }

  render() {

    const style = this.generateStyle(this.props.layer)
    return (
      <div className={`parallax-layer layer${this.props.layer.id}`}></div>
    )
  }
}