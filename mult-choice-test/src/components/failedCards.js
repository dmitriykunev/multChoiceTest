import React from 'react';

export default function failedCards(question, optionA, optionB, optionC, optionD, correct_answer, questionId) {
    return (
        <div className='main'>
            <div className='main' key={questionId}>
                <div className='quiestion'>
                    <h2>Task</h2>
                    <p>{question}</p>
                </div>
                <div className='abcFlexContainer'>
                    <div className='optionA'> a) {optionA}</div>
                    <div className='optionB'> b) {optionB}</div>
                    <div className='optionC'> c) {optionC}</div>
                    <div className='optionD'> d) {optionD}</div>
                    <div>Правильный ответ {correct_answer}</div>
                </div>
                
            </div>
        </div>
    )
}