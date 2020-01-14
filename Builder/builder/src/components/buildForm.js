import React, { Component } from 'react';
import AdminPanel from './panel';
import Footer from './footer';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return state
};

class BuilderForm extends Component {
    render() {
    return (
        <div>
        <AdminPanel />

        <Footer />
        </div>
    )
}
}

export default connect(mapStateToProps) (BuilderForm);