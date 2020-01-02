import React from 'react';

export default function failedCards(question, optionA, optionB, optionC, optionD, correct_answer, questionId) {
    return (
        <div key={questionId}>
            <div className='main'>
                <div className='quiestion'>{question}</div>
                <div className='abcFlexContainer'>
                    <div className='optionA'> a) {optionA}</div>
                    <div className='optionB'> b) {optionB}</div>
                    <div className='optionC'> c) {optionC}</div>
                    <div className='optionD'> d) {optionD}</div>
                </div>
                <div>Правильный ответ {correct_answer}</div>
            </div>
        </div>
    )
}