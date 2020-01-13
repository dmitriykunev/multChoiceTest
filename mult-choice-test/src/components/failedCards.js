import React from 'react';

export default function failedCards(question, optionA, optionB, optionC, optionD, correct_answer, questionId, theory) {
    return (        
            <div className='mainResult' key={questionId}>
                <div className='resultQuestion'>
                    <h2>Task</h2>
                    <p>{question}</p>
                </div>
                <div className='abcFlexContainer'>
                    <div className='optionA'> a) {optionA}</div>
                    <div className='optionB'> b) {optionB}</div>
                    <div className='optionC'> c) {optionC}</div>
                    <div className='optionD'> d) {optionD}</div>
                    <div className='correctAnswer'>Правильный ответ <span className='correctAnswerLetter'>{correct_answer}</span></div>
                </div>
                <div className='theory'>{theory}</div>
            </div>       
    )
}