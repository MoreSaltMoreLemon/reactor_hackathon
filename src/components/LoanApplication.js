import React, { Component } from 'react'
import '../styles/LoanApplication.css';
import Fade from 'react-reveal/Fade'
import { Mountain } from '../data/parallaxes'
import Parallax from './Parrallax'

export default class LoanApplication extends Component {
  constructor(props) {
    super(props)

    this.state = {
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
    }
  }
  
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.passApplicationInfo(this.state)
  }

  render() {
    return (

      <div className="loan-application">

        <Parallax data={Mountain} />
        <form onSubmit={this.submitHandler}>
          <Fade up>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              className="application firstName"
              value={this.state.firstName}
              onChange={this.changeHandler}
              ></input>
          </Fade>
          <Fade up>
          <input
            type="text"
            name="lastName"
            className="application lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.changeHandler}
          ></input>
        </Fade>
        <Fade up>
          <input
            type="text"
            name="email"
            className="application email"
            placeholder="E-Mail"
            value={this.state.email}
            onChange={this.changeHandler}
          ></input>
        </Fade>
        <Fade up>
          <input
            type="text"
            name="city"
            className="application city"
            placeholder="city"
            value={this.state.city}
            onChange={this.changeHandler}
          ></input>
        </Fade>
        <Fade up>
          <input
            type="text"
            name="state"
            className="application state"
            placeholder="state"
            value={this.state.state}
            onChange={this.changeHandler}
          ></input>
        </Fade>
        <Fade up>
          <input
            type="tel"
            name="primaryPhone"
            className="application primaryPhone"
            placeholder="primaryPhone"
            value={this.state.primaryPhone}
            onChange={this.changeHandler}
          ></input>
        </Fade>
        <Fade up>
          <input
            type="text"
            name="dateOfBirth"
            className="application dateOfBirth"
            placeholder="dateOfBirth"
            value={this.state.dateOfBirth}
            onChange={this.changeHandler}
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

    </div>
    )
  }
}
