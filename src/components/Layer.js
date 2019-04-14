import React, { Component } from 'react'

export default class Layer extends Component {

  generateStyle(layer) {
    console.log("LAYER STYLE", layer)
    return {
      'position': 'absolute',
      'backgroundImage': `url('${layer.url}')`,
      'backgroundPosition': 'left bottom',
      'minHeight': '1000px',
      'height': '100%',
      'width': '100vw',
      'backgroundRepeat': 'no-repeat',
      'backgroundSize': 'cover'
    }
  }

  render() {

    const style = this.generateStyle(this.props.layer)
    return (
      <div style={style}>

      </div>
    )
  }
}