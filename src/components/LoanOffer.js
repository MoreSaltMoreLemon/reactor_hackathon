import React, { Component } from 'react'
import Originator from './Originator'

export default class LoanOffer extends Component {
  constructor(props) {
    super(props)

    this.state = { offerInformation : {
      "termLength": 36,
      "termUnit": "month",
      "maxAmount": 25000,
      "minAmount": 1500,
      "maxApr": 35.99,
      "minApr": 25.01,
      "meanApr": 30.5,
      "prepaymentFee": 0,
      "monthlyPayment": 119.3,
      "maxMonthlyPayment": 137.4,
      "minMonthlyPayment": 119.3,
      "meanMonthlyPayment": 128.18,
      "maxTotalPayment": 4947,
      "minTotalPayment": 4295,
      "meanTotalPayment": 4615,
      "terms": null,
      "url": "http://offers.evenfinancial.com/ref/64c5ff44-983b-4b47-940d-4ce4176c1d6f/fef16e91-960f-4ac7-a8ec-98d7a6b32c7e",
      "preQualified": false,
      "preApproved": false,
      "sponsored": false,
      "recommendationScore": 95}
    }
  }

  render() {
    const innerHtml = { __html: this.props.offer.originator.description }
    return (
      <div className="loan-offer">
        LOAN OFFER
        <h3>Score: {Math.floor(Math.random() * 100)}</h3>
        <p>Only {this.props.offer.termLength} {this.props.offer.termUnit}s</p>
        <p>Loans between {this.props.offer.maxAmount} and {this.props.offer.minAmount}</p>
        <p>With a mean APR of {this.props.offer.meanApr}%!</p>
        <p>And an average monthly payment of {this.props.offer.meanMonthlyPayment}</p>
        <p dangerouslySetInnerHTML={innerHtml}></p>


      </div>
    )
  }
}
