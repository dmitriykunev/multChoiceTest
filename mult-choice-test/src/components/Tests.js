import React, { Component } from 'react';
import {connect} from 'react-redux';
import Card from './Card';
import ProgressBar from './ProgressBar';
import Button from './Button';

const mapStateToProps = state => {
    return state
};


class Tests extends Component {

cardsMapper = () => {
    const {cards} = this.props;
    const arrayCopy = cards.map((item)=> ({...item}));
    const card = arrayCopy.splice(0, 1);
    if (card.length === 0) {
       //return this.props.history.push('/result');
       return this.props.history.push('/form');
    }
    //const payload = card;
    
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
    const cardShown = payload.splice(0, 1)
    this.props.dispatch({
        type: 'UPDATE_AVAILABLE_CARDS',
        payload
    });
    this.props.dispatch({
        type: 'CARD_SHOWED',
        cardShown
   });
}

handleNext = (event) => {
    const payload = this.props.progress + 5;
    this.props.dispatch({
          type: 'PROGRESS_INCREMENT',
          payload
      });
      this.updateCards();
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
