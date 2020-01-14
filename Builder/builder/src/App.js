import React, { Component } from 'react';
import AdminPanel from './components/panel.js';
import Footer from './components/footer';
import './index.css';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return state
};

class App extends Component {

  componentWillMount() {
    const token = localStorage.getItem('token');
    if(!token) {
      this.props.history.push('/whoTheFuckAreYou')
    }
  }
  
    
    // const token = localStorage.getItem('token');
    // localStorage.setItem('token', this.state.token);
  
  render () {
    
  return (
    <div>
      <AdminPanel />
      <Footer />
    </div>
    )
  }
}

export default connect(mapStateToProps) (App);
