import React, { Component } from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return state
};

class Result extends Component {
    render () {
    
        return (
            <div>
                <p>Your result here</p>
            </div>
        )
    }
}

export default connect(mapStateToProps) (Result);