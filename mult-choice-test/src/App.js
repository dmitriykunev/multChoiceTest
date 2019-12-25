import React, { Component } from 'react';
import Tests from './components/Tests';
import './index.css';

class App extends Component {
  render () {
  return (
    <div>
      <Tests />
      {/* {this.props.history.push('/test')} */}
    </div>   
    )
  }
}

export default App;
