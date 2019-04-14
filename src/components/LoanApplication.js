import React, { Component, Fragment } from 'react'
import '../styles/LoanApplication.css';
import Fade from 'react-reveal/Fade'
import { Mountain } from '../data/parallaxes'
import Parallax from './Parallax'

export default class LoanApplication extends Component {
  constructor(props) {
    super(props)

    this.state = {
      "personalInformation": {
        "firstName": "John",
        "lastName": "Doe",
        "email": "john@example.com",
        "city": "New York",
        "state": "NY",
        "workPhone": "2125551234",
        "primaryPhone": "2125556789",
        "address1": "45 West 21st Street",
        "address2": "5th Floor",
        "zipcode": "10010",
        "monthsAtAddress": 5,
        "driversLicenseNumber": "111222333",
        "driversLicenseState": "NY",
        "ipAddress": "8.8.8.8",
        "activeMilitary": false,
        "militaryVeteran": true,
        "dateOfBirth": "1993-10-09",
        "educationLevel": "bachelors",
        "ssn": "111-22-3333"
      },
      "financialInformation": {
        "employmentStatus": "",
        "employmentPayFrequency": "",
        "annualIncome": 120000,
        "monthlyNetIncome": 10000
      }
    }
  }

  changePersonal = (e) => {
    this.setState({
      personalInformation: {...this.state.personalInformation, [e.target.name]: e.target.value }
    })
  }

  changeFinancial = (e) => {
    this.setState({
      financialInformation: { ...this.state.financialInformation,[e.target.name]: e.target.value}
    })
  }

  submitPersonalHandler = (e) => {
    e.preventDefault();
    this.props.passApplicationInfo(this.state)
  }
  // submitFinancialHandler = (e) => {
  //   e.preventDefault();
  //   this.props.passFinancialApplicationInfo(this.state.financialInformation)
  // }

  submitFinancialInfoForm

  render() {
    return (
      <Fragment>
        <Parallax parallax={Mountain} />
      <div className="loan-application">
        <form
          onSubmit={this.submitPersonalHandler}>
          <Fade up>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            className="application firstName"
            value={this.state.personalInformation.firstName}
            onChange={this.changePersonal}
          ></input>
        </Fade>

      <Fade up>
          <input
            type="text"
            name="lastName"
            className="application lastName"
            placeholder="Last Name"
            value={this.state.personalInformation.lastName}
            onChange={this.changePersonal}
          ></input>

        </Fade>
        <Fade up>

          <input
            type="text"
            name="email"
            className="application email"
            placeholder="E-Mail"
            value={this.state.personalInformation.email}
            onChange={this.changePersonal}
          ></input>

        </Fade>
        <Fade up>

          <input
            type="text"
            name="city"
            className="application city"
            placeholder="city"
            value={this.state.personalInformation.city}
            onChange={this.changePersonal}
          ></input>

        </Fade>
        <Fade up>
          <input
            type="text"
            name="state"
            className="application state"
            placeholder="state"
            value={this.state.personalInformation.state}
            onChange={this.changePersonal}
          ></input>

        </Fade>
        <Fade up>
          <input
            type="tel"
            name="primaryPhone"
            className="application primaryPhone"
            placeholder="primaryPhone"
            value={this.state.personalInformation.primaryPhone}
            onChange={this.changePersonal}
          ></input>

        </Fade>
        <Fade up>
          <input
            type="text"
            name="dateOfBirth"
            className="application dateOfBirth"
            placeholder="dateOfBirth"
            value={this.state.personalInformation.dateOfBirth}
            onChange={this.changePersonal}
          ></input>
        </Fade>

      {/*financial info*/}
          <Fade up>
            <select
              onChange={this.changeFinancial}
              className= "application employed">
              <option value ='' selected disabled> Are you employed</option>
              <option value='employed'>Employed</option>
              <option value='unemployed'>Unemployed</option>
            </select>
          </Fade>
          <Fade up>
            <select
              name="employmentFrequency" onChange={this.changeFinancial}
              className= "application paymentFrequency">
              <option value='' selected disabled> What is your payment frequency</option>
              <option value="weekly"> Weekly</option>
              <option value="fortnightly"> Fortnightly</option>
              <option value="monthly"> Monthly</option>
            </select>
          </Fade>
          <Fade up>
            <input
              type="text"
              name="annualIncome"
              className="application annualIncome"
              placeholder="annualIncome"
              value={this.state.financialInformation.annualIncome}
              onChange={this.changeFinancial}
            ></input>
          </Fade>
          <Fade up>
            <input
              type="text"
              name="monthlyNetIncome"
              className="application monthlyNetIncome"
              placeholder="monthlyNetIncome"
              value={this.state.financialInformation.monthlyNetIncome}
              onChange={this.changeFinancial}
            ></input>
          </Fade>
          <Fade up>
            <input
              className="financial-submit"
              type="submit"
              value="submit"
            ></input>
          </Fade>

        </form>

      </div>
      </Fragment>
    )
  }
}
