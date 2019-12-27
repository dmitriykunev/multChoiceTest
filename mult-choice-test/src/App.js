import React, { Component } from 'react';
// import Tests from './components/Tests';
import Form from './components/Form';
import './index.css';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return state
};

class App extends Component {
  render () {
    console.log(this.props);
  return (
    <div>
      <Form {...this.props} />
      {/* <Tests /> */}
    </div>
    )
  }
}

export default connect(mapStateToProps) (App);
