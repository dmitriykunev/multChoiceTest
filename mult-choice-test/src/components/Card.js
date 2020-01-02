import React, { Component } from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return state
};


class Card extends Component {
    constructor(props) {
        super(props);
    this.state = {};
    }
    handleInitialState = () => {
        this.setState({
            abcA: {
                'border': '2px',
                'margin': '10px',
                'padding':'30px',
                'border-radius': '10px',
                'background-color': '#188fad',
                'width': '80px',
                'height': '80px',
                'text-align': 'center',
              },
            abcB: {
                'border': '2px',
                'margin': '10px',
                'padding':'30px',
                'border-radius': '10px',
                'background-color': '#4bbb70',
                'width': '80px',
                'height': '80px',
                'text-align': 'center',
              },
            abcC: {
                'border': '2px',
                'margin': '10px',
                'padding':'30px',
                'border-radius': '10px',
                'background-color': '#4074ad',
                'width': '80px',
                'height': '80px',
                'text-align': 'center',
              },
            abcD: {
                'border': '2px',
                'margin': '10px',
                'padding':'30px',
                'border-radius': '10px',
                'background-color': '#625fa5',
                'width': '80px',
                'height': '80px',
                'text-align': 'center',
              }
        })
        
    }

    
    handleOption = (option) => {
        switch(option) {
            case 'a':
                this.handleInitialState();
                this.setState({
                    abcA: {
                        'border': '2px',
                        'margin': '10px',
                        'padding':'30px',
                        'border-radius': '10px',
                        'background-color': 'red',
                        'width': '80px',
                        'height': '80px',
                        'text-align': 'center',},
                });
                break;
            case 'b':
                this.handleInitialState();
                this.setState({
                    abcB: {
                        'border': '2px',
                        'margin': '10px',
                        'padding':'30px',
                        'border-radius': '10px',
                        'background-color': 'red',
                        'width': '80px',
                        'height': '80px',
                        'text-align': 'center',},
                });
                break;
            case 'c':
                this.handleInitialState();
                this.setState({
                    abcC: {
                        'border': '2px',
                        'margin': '10px',
                        'padding':'30px',
                        'border-radius': '10px',
                        'background-color': 'red',
                        'width': '80px',
                        'height': '80px',
                        'text-align': 'center',},
                });
                break;
            case 'd':
                this.handleInitialState();
                this.setState({
                    abcD: {
                        'border': '2px',
                        'margin': '10px',
                        'padding':'30px',
                        'border-radius': '10px',
                        'background-color': 'red',
                        'width': '80px',
                        'height': '80px',
                        'text-align': 'center',},
                });
                break;
            default:
                return this.state;
        }
        const payload = option;
        this.props.dispatch({
            type: 'OPTION_UPDATE',
            payload
        })
    }

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
                    <div style={this.state.abcA} onClick={()=>this.handleOption('a')}>A</div>
                    <div className='optionA'>{this.props.optionA}</div>
                </div>
                <div className='optionRowB'>
                    <div style={this.state.abcB} onClick={()=>this.handleOption('b')}>B</div>
                    <div className='optionB'>{this.props.optionB}</div>
                </div>
                <div className='optionRowC'>
                    <div style={this.state.abcC} onClick={()=>this.handleOption('c')}>C</div>
                    <div className='optionC'>{this.props.optionC}</div>
                </div>
                <div className='optionRowD'>
                    <div style={this.state.abcD} onClick={()=>this.handleOption('d')}>D</div>
                    <div className='optionD'>{this.props.optionD}</div>
                </div>
            </div>
            </div>
            </div>
            )
    }
};

export default connect(mapStateToProps) (Card);