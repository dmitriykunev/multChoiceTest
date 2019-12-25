import React, { Component } from 'react';
import {connect} from 'react-redux';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import IconButton from 'react-toolbox/lib/button';

const mapStateToProps = state => {
    return state
};


class Tests extends Component {

    progressBar = () => (
        
        <div>
            <ProgressBar type='linear' mode='determinate' value={this.props.progress} buffer={this.props.progress + 5} />
        </div>
    );

    render () {
        return (
            <div>
            <div className='main'>
            <div className='question'>
                <div>
                    <h2>Task</h2>
                    <p>a question here</p>                        
                </div>
            </div>
            <div className='abcFlexContainer'>
                <div className='optionRowA'>
                    <div className='abcA'>A</div>
                    <div className='optionA'>OPTION A</div>
                </div>
                <div className='optionRowB'>
                    <div className='abcB'>B</div>
                    <div className='optionB'>OPTION B</div>
                </div>
                <div className='optionRowC'>
                    <div className='abcC'>C</div>
                    <div className='optionC'>OPTION C can be bigger what is the expected behaviour here?</div>
                </div>
                <div className='optionRowD'>
                    <div className='abcD'>D</div>
                    <div className='optionD'>OPTION D</div>
                </div>
            </div>
            
            </div>
            <div>
                {this.progressBar}
                <IconButton icon='navigate_next' label='Next' raised='true' onClick={this.handleNext} />           
            </div>    
            </div>
                
        )
    }
};

export default connect(mapStateToProps) (Tests);
