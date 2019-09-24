import React from 'react';

export const TextItemBodySecondInfo = (props) => {
    const { 
        owner, yourSpeed, bestSpeed,
        bestSpeedOwner, uploadDate 
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
            <span>{owner}</span>
            <span>{uploadDate}</span> 
            <span>{yourSpeed}</span> 
            <span>{bestSpeed} &nbsp;&nbsp; <span id='by'>by</span></span>
            <span id='bs'>{bestSpeedOwner}</span>
        </div>
    </div>
    )
}