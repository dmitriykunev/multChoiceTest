import React, {Component} from 'react';
import { connect } from 'react-redux';
import Form from './form.js';

const mapStateToProps = state => {
    return state
};

class Login extends Component {

    render() {
      return (
        <div className='main'>
          <Form {...this.props} />
        </div>
        )
    }
}

export default connect(mapStateToProps) (Login);
