import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { showModal, dismissModal } from './reducers'
import logo from './logo.svg';
import './App.css';
import View1 from './View1'
import View2 from './View2'

class Modal extends Component {
  render() {

    const Content = this.props.Content

    const modalWindow = (
        <div className="modal-window">
            { Content && <Content/> }
            <button onClick={() => this.props.dismissModal()}>Close</button>
          </div>
    )

    return (
      <div className="modal-frame" style={{ display: Content ? '' : 'none' }}>
          { Content && modalWindow }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { Content: state.component }
}

function mapDispatchToProps(dispatch) {
  return { 
    dismissModal: bindActionCreators(dismissModal, dispatch)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
