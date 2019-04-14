import React, { Component } from 'react'
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
        "employmentStatus": "employed",
        "employmentPayFrequency": "weekly",
        "annualIncome": 120000,
        "monthlyNetIncome": 10000
      }
    }
  }

  changePersonal = (e) => {
    this.setState({
      personalInformation[e.target.name]: e.target.value
    })
  }

  changeFinancial = (e) => {
    this.setState({
      financialInformation[e.target.name]: e.target.value
    })
  }

  submitPersonalHandler = (e) => {
    e.preventDefault();
    this.props.passPersonalApplicationInfo(this.state.personalInformation)
  }
  submitFinancialHandler = (e) => {
    e.preventDefault();
    this.props.passFinancialApplicationInfo(this.state.financialInformation)
  }

  submitFinancialInfoForm

  render() {
    return (

      <div className="loan-application">
        <form
          onSubmit={this.submitPersonalHandler}>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            className="application firstName"
            value={this.state.firstName}
            onChange={this.changePersonal}
          ></input>

          <input
            type="text"
            name="lastName"
            className="application lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.changePersonal}
          ></input>

        </Fade>
        <Fade up>

          <input
            type="text"
            name="email"
            className="application email"
            placeholder="E-Mail"
            value={this.state.email}
            onChange={this.changePersonal}
          ></input>

        </Fade>
        <Fade up>

          <input
            type="text"
            name="city"
            className="application city"
            placeholder="city"
            value={this.state.city}
            onChange={this.changePersonal}
          ></input>

        </Fade>
        <Fade up>

          <input
            type="text"
            name="state"
            className="application state"
            placeholder="state"
            value={this.state.state}
            onChange={this.changePersonal}
          ></input>

        </Fade>
        <Fade up>

          <input
            type="tel"
            name="primaryPhone"
            className="application primaryPhone"
            placeholder="primaryPhone"
            value={this.state.primaryPhone}
            onChange={this.changePersonal}
          ></input>

        </Fade>
        <Fade up>

          <input
            type="text"
            name="dateOfBirth"
            className="application dateOfBirth"
            placeholder="dateOfBirth"
            value={this.state.dateOfBirth}
            onChange={this.changePersonal}
          ></input>
        </Fade>
        <Fade up>
          <input
            className="application-submit" 
            type="submit"
            value="submit"
          ></input>
        </Fade>

        </form>
        //financial info form
        <form
          onSubmit={this.submitFinancialHandler}
          className='financial-info-form'>
          // needs to become a checkbox
          <select
            onChange={this.changeFinancial}>
            <option value='employed'>Employed</option>
            <option value='unemployed'>Unemployed</option>
          </select>
          <select
            name="employmentFrequency" onChange={this.changeFinancial}>
            <option value="weekly"> Weekly</option>
            <option value="fortnightly"> Fortnightly</option>
            <option value="monthly"> Monthly</option>
          </select>
          <input
            type="text"
            name="annualIncome"
            className="application annualIncome"
            placeholder="annualIncome"
            value={this.state.annualIncome}
            onChange={this.changeFinancial}
          ></input>
          <input
            type="text"
            name="monthlyNetIncome"
            className="application monthlyNetIncome"
            placeholder="monthlyNetIncome"
            value={this.state.monthlyNetIncome}
            onChange={this.changeFinancial}
          ></input>
        </form>
        
      </div>
      </form>
    </div>
    )
  }
}
