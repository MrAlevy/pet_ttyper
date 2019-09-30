import React from 'react';
import './styles/typer.scss';

export const TyperMain = (props) => {
    const { 
        isErrorLetter, rightLetter, rightText, rightTextPast 
    } = props.state;
    
    const {
        caption
    } = props.textInfo;


    return (
        <div className='dataCont typer-cont'>
            <div id='header'>{caption}</div>

            <div id='text-typer-cont'>
                <div id='right-text-line'>
                    <div className='text-t right-text-past'>{rightTextPast ? rightTextPast : 'press space to start '}</div>
                    <div className={isErrorLetter ? 'text-t right-letter right-letter-error' : 'text-t right-letter'}>{rightLetter}</div>
                    <div className='text-t right-text'>{rightText && rightText.slice(0, 35)}</div>
                </div>
            </div>

        {/* <TextItemBodySecondInfo 
            text={props.props.location.state}
        /> */}

        </div>
    )
}