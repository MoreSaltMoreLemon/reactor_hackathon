import React, { Component } from 'react';
import './styles/App.css';
import LoanOffer from './components/LoanOffer'
import LoanApplication from './components/LoanApplication'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      application: {productTypes: [
        "loan", 
        "savings"
      ], personalInformation: {}  },
    }
  }

  passApplicationInfo = (applicationDetails) => {
    this.setState({personalInformation: applicationDetails})
  
    httpRequest('http://localhost:3000/api/v1/lead', 'post', {lead: applicationDetails})
      .then(r => r.json())
      .then(j => {
        const uuid = j.uuid
        httpRequest('http://localhost:3000/api/v1/ratetables', 'post', {uuid})
          .then(r => r.json())
          .then(j => { 
            console.log("RATETABLES:", j)
            this.setState({ lead: j })
          })
      })
  }

  renderLoanOffers = () => {
    if (this.state.lead) {
      return this.state.lead.loanOffers.map(offer => {
        return <LoanOffer offer={offer} />
      })
    } else {
      return null
    }
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          {/* {this.renderLoanOffers()} */}
          <LoanApplication passApplicationInfo={this.passApplicationInfo} />
        </header>
      </div>
    );
  }
}

export default App;

function httpRequest(url, method='GET', data={}) {
  const init = {
    headers: {
      'Accept': 'application/vnd.evenfinancial.v1+json',
      'Content-Type': 'application/json'
      // 'Authorization': 'Bearer e7675dd3-ff3b-434b-95aa-70251cc3784b_88140dd4-f13e-4ce3-8322-6eaf2ee9a2d2'
    },
    method: method,
    body: JSON.stringify(data)
  }
  if (method.toLowerCase() === 'get') delete init.body;
  else if (method.toLowerCase() === 'post' && init.body.id) delete init.body.id;

  return fetch( url, init);
}
