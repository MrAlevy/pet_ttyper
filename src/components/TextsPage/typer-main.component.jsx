import React from 'react';
import './styles/typer.scss';

export const TyperMain = (props) => {
    const { 
        isErrorLetter, rightLetter, rightText, rightTextPast, 
        mistakes, lettersEntered, avgSpeed, curSpeed
    } = props.state;
    
    const {
        caption, rate, owner, bestSpeed, bestSpeedOwnerMistakes, bestSpeedOwner
    } = props.textInfo;

    // calc mistakes persentage
    let miss = Math.round(10* (100*mistakes/lettersEntered) )/10
//console.log(rightTextPast, rightLetter, rightText)
    return (
        <div className='dataCont typer-cont'>

            <div id='text-typer-main-info'>
                <h1>{caption}</h1>
                <div id='text-typer-best-speed'>
                    <div>best speed: <div>{bestSpeed} / {bestSpeedOwnerMistakes}%</div></div> 
                    <div>by <div>{bestSpeedOwner}</div></div>
                </div>
            </div>

            <div>
                <div id='text-typer-rate'>
                    <div>stars: <div>{rate}</div></div> 
                    <div>owner: <div>{owner}</div></div> 
                </div>

            </div>

            <div id='text-typer-cur-data'>
                <div>avg speed: <div>{avgSpeed || 0}</div></div>
                <div>miss: <div>{miss || 0}</div>%</div>
                curSpeed: {curSpeed}
            </div>

            <div 
                id='typer-cur-speed-diagram'
                style={{width: curSpeed}}
            >
            </div>

            <div id='text-typer-cont'>
                <div id='right-text-line'>
                    <div className={'text-t right-text-past ' + (!rightTextPast && 'empty-text-past')}>
                        {rightTextPast ? rightTextPast : 'press space to start '}
                    </div>
                    <div className={isErrorLetter ? 'text-t right-letter right-letter-error' : 'text-t right-letter'}>{rightLetter}</div>
                    <div className='text-t right-text'>{rightText && rightText.slice(0, 35)}</div>
                </div>
            </div>

            <div
                id='typer-progress'
            >
                <div><div style={{paddingLeft: (Math.round(100*rightTextPast/(rightTextPast + rightLetter + rightText)) || 0) + '%'}}>o</div></div>
            </div>
        </div>
    )
}