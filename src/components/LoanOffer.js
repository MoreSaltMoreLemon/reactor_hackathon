import React, { Component } from 'react'
import Originator from './Originator'

export default class LoanOffer extends Component {

  render() {
    return (
      <div className="loan-offer">
        LOAN OFFER
        <Originator name={this.props.offer.originator.name} />
      </div>
    )
  }
}