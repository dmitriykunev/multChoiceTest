import React, { Component } from 'react';
import {connect} from 'react-redux';
import failedCards from './failedCards';

const mapStateToProps = state => {
    return state
};

class Result extends Component {
    
    componentWillMount() {
        if(!this.props.token) {
            this.props.history.push('/');
        }
    }

    handleResponse = () => {
        const correctAnswersNumber = this.props.cards_passed.length;
        return correctAnswersNumber
    }

    failedCardsMapper = () => {
        return this.props.cards_failed.map((elem) => {
            return failedCards(elem.card.question, elem.card.a, elem.card.b, elem.card.c, elem.card.d, elem.answer, elem.id, elem.theory)
        })
    }

    handleTotal = () => {
        const totalCards = this.props.cards_shown.length;
        return totalCards
    }

    render () {
    const failedCards = this.failedCardsMapper();
        return (
            <div className='resultPage'>
                <p>{this.props.userName} Вы правильно ответили на {this.handleResponse()} из {this.handleTotal()} вопросов</p>
                <br />
                <p>Ниже перечень вопросов, на которые, Вы дали неправильный ответ</p>
                
                {failedCards}
                <br />
                
            </div>
        )
    }
}

export default connect(mapStateToProps) (Result);