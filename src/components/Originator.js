import React, { Component } from 'react'

export default class Originator extends Component {

  render() {
    return (
      <div className="originator">
        <img src={this.props.imageUrl} alt={this.props.name} />
        {this.props.name}
        <p>{this.props.rate} % p.a.</p>
        <p>{this.props.term}</p>
        <a href={this.props.link}
          className="loan-offer-link-button"> Continue
        </a>
      </div>
    )
  }
}
