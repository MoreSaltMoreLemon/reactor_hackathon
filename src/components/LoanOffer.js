import React, { Component } from 'react'
import Originator from './Originator'

export default class LoanOffer extends Component {

  render() {
    const offer = this.props.offer.originator
    return (
      <div className="loan-offer">
        LOAN OFFER
        <Originator
          name={offer.name}
          imageUrl={offer.image_url}
          rate={offer.rate}
          term={offer.term}
          link={offer.link}

        />
      </div>
    )
  }
}
