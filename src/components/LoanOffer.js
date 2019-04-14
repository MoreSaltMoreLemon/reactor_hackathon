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

  setLoanOffers = () => {
    return this.props.offers.map(offer => {
        this.setState({offerInformation: offer})
      })
    }
  }



  render() {

    return (
      <div className="loan-offer">
        LOAN OFFER
        <h3>Score: {this.state.recommendationScore}</h3>
        <p>Only {this.state.termLength} {this.state.termUnit}s</p>
        <p>Loans between {this.state.maxAmount} and {this.state.minAmount}</p>
        <p>With a mean APR of {this.state.meanApr}!</p>
        <p>And an average monthly payment of {this.state.meanMonthlyPayment}</p>



      </div>
    )
  }
}
