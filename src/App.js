import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { showModal, dismissModal } from './reducers'
import logo from './logo.svg';
import './App.css';
import View1 from './View1'
import View2 from './View2'
import Modal from './Modal'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Modal>
        </Modal>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => this.props.showModal(View1)}>View1 modal</button>
        <button onClick={() => this.props.showModal(View2)}>View2 modal</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { 
    showModal: bindActionCreators(showModal, dispatch),
   }
}

export default connect(null, mapDispatchToProps)(App);
