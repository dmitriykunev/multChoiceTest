import React, { Component, Fragment } from 'react';
import AdminPanel from './components/panel.js';
import Footer from './components/footer';
import './index.css';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return state
};

class App extends Component {

  handleAuthorize =(token) => {
    if(token) {
      return (<div><AdminPanel /><Footer /></div>);
    } else {
    return (this.props.history.push('/whoTheFuckAreYou'))
    }
    // const token = localStorage.getItem('token');
    // localStorage.setItem('token', this.state.token);
  }
  render () {
  return (
      {this.handleAuthorize(true)}
    )
  }
}

export default connect(mapStateToProps) (App);
