import React from 'react';

export const TextItemBodySecondInfo = (props) => {
    const { 
        owner, bestSpeed, bestSpeedOwner,
        bestSpeedOwnerMistakes, createdAt
    } = props.text;

    const uploadDate = new Date(createdAt)
    const datePretty = `${('0' + uploadDate.getDate()).slice(-2)}.${('0' + (uploadDate.getMonth() + 1)).slice(-2)}.${uploadDate.getFullYear()}`

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
            <span>{datePretty || '-'}</span> 
            <span>
                <span id='speed'>
                    000 {/* temp zero values */}
                </span> 
                <span className='lbl sep'>{' / '}</span>
                <span id='mist'>
                    {`0,00%`} {/* temp zero values */}
                </span> 
            </span>
            <span id='best-speed-cont'>
                <span id='speed'>
                    {bestSpeed || '-'}
                </span> 
                <span className='lbl sep'>{' / '}</span>
                <span id='mist'>
                    {`${bestSpeedOwnerMistakes || '0,0'}%`}
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