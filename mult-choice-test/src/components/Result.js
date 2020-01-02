import React, { Component } from 'react';
import {connect} from 'react-redux';
import failedCards from './failedCards';

const mapStateToProps = state => {
    return state
};

class Result extends Component {


    handleResponse = () => {
        const correctAnswersNumber = this.props.cards_passed.length;
        return correctAnswersNumber
    }

    failedCardsMapper = () => {
        return this.props.cards_failed.map((elem) => {
            return failedCards(elem.card.question, elem.card.a, elem.card.b, elem.card.c, elem.card.d, elem.answer, elem.id)
        })
    }

    render () {
    const failedCards = this.failedCardsMapper();
        return (
            <div>
                <p>{this.props.userName} Вы правильно ответили на {this.handleResponse()} из 20 вопросов</p>
                <br />
                {failedCards}
                <br />
            </div>
        )
    }
}

export default connect(mapStateToProps) (Result);