import React from 'react';

export const TextItemBodySecondInfo = (props) => {
    const { 
        owner, bestSpeed, bestSpeedOwner, uploadDate,
        bestSpeedOwnerMistakes
    } = props.text;

    return (
    <div id='second-info'>
        <div id='names'>
            <span>owner: </span>
            <span>upload: </span>
            <span>your speed: </span>
            <span>best speed: </span>
        </div>
        <div id='data'>
            <span>{owner || '-'}</span>
            <span>{uploadDate || '-'}</span> 
            <span>
                <span id='speed'>
                    000
                </span> 
                <span className='lbl sep'>{' / '}</span>
                <span id='mist'>
                    {`0,00%`}
                </span> 
            </span>
            <span id='best-speed-cont'>
                <span id='speed'>
                    {bestSpeed || '-'}
                </span> 
                <span className='lbl sep'>{' / '}</span>
                <span id='mist'>
                    {`${bestSpeedOwnerMistakes}%`}
                </span> 
            </span>
            <span id='bs'>
                <span className='lbl'>by</span>
                &nbsp;&nbsp;
                {bestSpeedOwner || '-'}
            </span>
        </div>
    </div>
    )
}