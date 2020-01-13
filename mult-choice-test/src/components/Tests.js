import React, { Component } from 'react';
import {connect} from 'react-redux';
import Card from './Card';
import ProgressBar from './ProgressBar';
import Button from './Button';

const mapStateToProps = state => {
    return state
};


class Tests extends Component {

    componentWillMount() {
        if(!this.props.token) {
            this.props.history.push('/');
        }
    }

    cardsMapper = () => {
        const {cards} = this.props;
        const arrayCopy = cards.map((item)=> ({...item}));
        const card = arrayCopy.splice(0, 1);
        if (card.length === 0) {
        return this.props.history.push('/result');
        //return this.props.history.push('/');
        }
        const payload = card[0].answer;
        this.props.dispatch({
            type: 'UPDATE_CORRECT_ANSWER',
            payload
        })
        
        
        return (<Card question={card[0].card.question} 
            optionA={card[0].card.a} 
            optionB={card[0].card.b} 
            optionC={card[0].card.c} 
            optionD={card[0].card.d} 
            cardId={card[0].id} />);        
    };

    updateCards = ()=> {
        const {cards} = this.props;
        const payload = cards.map((item)=> ({...item}));
        const [cardShown] = payload.splice(0, 1)
        this.props.dispatch({
            type: 'UPDATE_AVAILABLE_CARDS',
            payload
        });
        this.props.dispatch({
            type: 'CARD_SHOWED',
            cardShown
    });
    this.props.dispatch({
        type: 'CLEAR_PREVIOUS_ANSWER'
    })
    }

    handleFailSuccess = () => {
        const userAnswer = this.props.answer;
        const correctAnswer = this.props.correct_answer;
        const payload = this.props.cards[0];
        if(userAnswer === correctAnswer) {
            this.props.dispatch({
                type: 'CARD_SUCCESS',
                payload
            })
        } else {
            this.props.dispatch({
                type: 'CARD_FAIL',
                payload
            })
        }
    }

    handleNext = (event) => {
        const payload = this.props.progress + 5;
        this.props.dispatch({
            type: 'PROGRESS_INCREMENT',
            payload
        });
        this.updateCards();
        this.handleFailSuccess();
    }

        render () {
        
            return (
                <div>
                
                {this.cardsMapper()}
                
                <div className='navigate'>
                    <ProgressBar progress={this.props.progress} />
                    <Button onClick={this.handleNext} />           
                </div>    
                </div>
                    
            )
        }
    };

export default connect(mapStateToProps) (Tests);