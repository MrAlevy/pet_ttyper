import React from 'react';
import './styles/typer.scss';

export const TyperMain = (props) => {
    const { 
        isErrorLetter, rightLetter, rightText, rightTextPast, 
        mistakes, lettersEntered, avgSpeed, curSpeed, TEXT_LENGTH
    } = props.state;
    
    const {
        caption, rate, owner, bestSpeed, bestSpeedOwner
    } = props.textInfo;

    // calc mistakes persentage
    let miss = Math.round(10* (100*mistakes/lettersEntered) )/10

    return (
        <div className='dataCont typer-cont'>

            <div id='text-typer-main-info'>
                <h1>{caption}</h1>
            </div>

            <div>
                <div id='text-typer-rate'>
                    <div>stars: <div>{rate}</div></div> 
                    <div>owner: <div>{owner}</div></div> 
                </div>

            </div>

            <div id='text-typer-cur-data'>
                <div>miss: <div>{miss < 100 ? miss : miss >= 100 ? 100 : 0}</div>%</div>
            </div>

            <div id='typer-speed-diagram'>
                <div>
                    <div id='avg-speed' style={{width: avgSpeed*0.5 || 0}}>
                        <span id='avg-speed-label'>{avgSpeed}</span>
                        <div id='cur-speed' style={{width: curSpeed*0.5 || 0}}>
                            <div id='best-speed' style={{width: bestSpeed*0.5 || 0}}>
                                <span>
                                    <span>
                                        {bestSpeed}
                                    </span>
                                    <span>
                                        <span>by</span>
                                        {bestSpeedOwner}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div 
                        id='speed-color-background'
                        style={ 
                            avgSpeed < bestSpeed 
                                ? {
                                    background: 'repeating-linear-gradient(90deg, #61292b00, #85b56c00 1px, #bfb9c200 0px, #6e686f1f 6px) fixed',
                                } : {
                                    background: 'repeating-linear-gradient(90deg, rgba(97, 41, 43, 0), rgba(133, 181, 108, 0) 1px, rgba(191, 185, 194, 0) 0px, rgba(8, 148, 31, 0.17) 6px) fixed',
                                }
                            }
                    >
                    </div>
                </div>
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

            <div id='typer-progress'>
                <div>
                    <div style={{width: ((100*lettersEntered/TEXT_LENGTH) || 0) + '%'}}>
                    </div>
                </div>
            </div>
        </div>
    )
}