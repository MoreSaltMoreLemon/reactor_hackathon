import React, { Component } from 'react'

export default class Originator extends Component {

  render() {
    return (
      <div className="originator">
        {this.props.name}
      </div>
    )
  }
}
