import logo from './logo.svg';
import './App.css';

import Web3 from 'web3';
import { Component } from 'react';

class App extends Component {

  async componentDidMount() {
    await this.initWeb3();
    console.log(this.web3);
    let accounts = await this.web3.eth.getAccounts();
    console.log(accounts);
    let balance = await this.web3.eth.getBalance(accounts[0]);
    console.log(balance);
  }

  initWeb3 = async () => {
    if (window.ethereum) {
      console.log('Recent mode');
      this.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
      } catch (error) {
        console.log(`User denied account access error: ${error}`);
      }
    } else if (window.web3) {
      console.log('legacy mode');
      this.web3 = new Web3(Web3.currentProvider);
    } else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
