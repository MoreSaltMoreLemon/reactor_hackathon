import React, { Component } from 'react'
import '../styles/LoanApplication.css';
// import Fade from 'react-reveal/Fade'

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

  handleKeyUp = (e, data) =>{
    const query= document.querySelector(`[data-attr=${data}]`)
    if(e.key ==="Enter"){
      query.focus()
      query.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  render() {

    return (
        <div className="loan-application">
          <h1> Check your offers </h1>
          <form
            onSubmit={this.submitPersonalHandler}>
            {/* <Fade up> */}
              <input
                type="text"
                id="firstNameInput"
                placeholder="First Name"
                required
                name="firstName"
                className="application firstName"

                onChange={this.changePersonal}
                onKeyUp={(e)=> this.handleKeyUp(e, 'lastName')}>
              </input>

          {/* <Fade up> */}
            <input
              type="text"
              data-attr='lastName'
              name="lastName"
              required
              className="application lastName"
              placeholder="Last Name"
              onChange={this.changePersonal}
              onKeyUp={(e)=> this.handleKeyUp(e, 'email')}>
            </input>

          {/* <Fade up> */}
            <input
              type="text"
              required
              data-attr='email'
              name="email"
              className="application email"
              placeholder="E-Mail"
              onChange={this.changePersonal}
              onKeyUp={(e)=> this.handleKeyUp(e, 'city')}>
            </input>


          {/* <Fade up> */}
            <input
              type="text"
              data-attr='city'
              name="city"
              className="application city"
              placeholder="city"
              onChange={this.changePersonal}
              onKeyUp={(e)=> this.handleKeyUp(e, 'state')}>
            </input>

          {/* <Fade up> */}
            <input
              type="text"
              data-attr='state'
              name="state"
              className="application state"
              placeholder="state"
              onChange={this.changePersonal}
              onKeyUp={(e)=> this.handleKeyUp(e, 'primaryPhone')}>
            </input>

          {/* <Fade up> */}
            <input
              type="tel"
              data-attr='primaryPhone'
              name="primaryPhone"
              className="application primaryPhone"
              placeholder="primaryPhone"
              onChange={this.changePersonal}
              onKeyUp={(e)=> this.handleKeyUp(e, 'dateOfBirth')}>
            </input>

          {/* <Fade up> */}
            <input
              type="date"
              data-attr='dateOfBirth'
              required
              name="dateOfBirth"
              className="application dateOfBirth"
              placeholder="dateOfBirth"
              onChange={this.changePersonal}
              onKeyUp={(e)=> this.handleKeyUp(e, 'employmentStatus')}>
            </input>


        {/*financial info*/}
          {/* <Fade up> */}
            <select
              name='employmentStatus'
              data-attr='employmentStatus'
              onChange={this.changeFinancial}
              className= "application employed"
              onKeyUp={(e)=> this.handleKeyUp(e, 'employmentPayFrequency')}
              >
              <option value ='Unemployed' selected disabled> Are you employed</option>
              <option value='employed'>Employed</option>
              <option value='unemployed'>Unemployed</option>
            </select>

          {/* <Fade up> */}
            <select
              name="employmentPayFrequency"
              data-attr='employmentPayFrequency'
              onChange={this.changeFinancial}
              className= "application paymentFrequency"
              onKeyUp={(e)=> this.handleKeyUp(e, 'annualIncome')}
            >
              <option value ="weekly" selected disabled> What is your payment frequency</option>
              <option value="weekly"> Weekly</option>
              <option value="fortnightly"> Fortnightly</option>
              <option value="monthly"> Monthly</option>
            </select>

          {/* <Fade up> */}
            <input
              type="text"
              data-attr='annualIncome'
              name="annualIncome"
              className="application annualIncome"
              placeholder="annualIncome"
              required
              onKeyUp={(e)=> this.handleKeyUp(e, 'monthlyNetIncome')}
              onChange={this.changeFinancial}>
            </input>

          {/* <Fade up> */}
            <input
              type="text"
              data-attr='monthlyNetIncome'
              name="monthlyNetIncome"
              className="application monthlyNetIncome"
              placeholder="monthlyNetIncome"
              required
              onKeyUp={(e)=> this.handleKeyUp(e, 'submit')}
              onChange={this.changeFinancial}>
            </input>

          <button
            type="submit"
            disabled
            className='disabledButton'>
          </button>
          {/* <Fade up> */}
            <input
              data-attr='submit'
              className="financial-submit btn"
              type="submit"
              value="Submit">
            </input>

        </form>
      </div>
    )
  }
}
