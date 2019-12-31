import React, { Component } from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return state
};


class Card extends Component {


    render () {
        return (
            <div>
            <div className='main'>
            <div className='question'>
                <div>
                    <h2>Task</h2>
                    <p>{this.props.question}</p>                        
                </div>
            </div>

            <div className='abcFlexContainer'>
                <div className='optionRowA'>
                    <div className='abcA'>A</div>
                    <div className='optionA'>{this.props.optionA}</div>
                </div>
                <div className='optionRowB'>
                    <div className='abcB'>B</div>
                    <div className='optionB'>{this.props.optionB}</div>
                </div>
                <div className='optionRowC'>
                    <div className='abcC'>C</div>
                    <div className='optionC'>{this.props.optionC}</div>
                </div>
                <div className='optionRowD'>
                    <div className='abcD'>D</div>
                    <div className='optionD'>{this.props.optionD}</div>
                </div>
            </div>
            </div>
            </div>
            )
    }
};

export default connect(mapStateToProps) (Card);