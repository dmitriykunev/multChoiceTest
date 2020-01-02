import React, { Component } from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return state
};


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: false,
            b: false,
            c: false,
            d: false,
            //id: props.cardId
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.cardId !== this.props.cardId) {
            this.setState({
                a: false,
                b: false,
                c: false,
                d: false
            });
        }
    }

    handleOption = (option) => {
        const payload = option;
                this.props.dispatch({
                type: 'OPTION_UPDATE',
                payload
            });
            this.setState({
                ...{
                a: false,
                b: false,
                c: false,
                d: false
                }, 
                ...{[option]:true},
        });

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
                    <div className={this.state.a ? 'selectedA' : 'abcA'} onClick={()=>this.handleOption('a')}>A</div>
                    <div className='optionA'>{this.props.optionA}</div>
                </div>
                <div className='optionRowB'>
                    <div className={this.state.b ? 'selectedB' : 'abcB'} onClick={()=>this.handleOption('b')}>B</div>
                    <div className='optionB'>{this.props.optionB}</div>
                </div>
                <div className='optionRowC'>
                    <div className={this.state.c ? 'selectedC' : 'abcC'} onClick={()=>this.handleOption('c')}>C</div>
                    <div className='optionC'>{this.props.optionC}</div>
                </div>
                <div className='optionRowD'>
                    <div className={this.state.d ? 'selectedD' : 'abcD'} onClick={()=>this.handleOption('d')}>D</div>
                    <div className='optionD'>{this.props.optionD}</div>
                </div>
            </div>
            </div>
            </div>
            )
    }
};

export default connect(mapStateToProps) (Card);