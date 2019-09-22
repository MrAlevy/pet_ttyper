import React from 'react';


export const Text = (props) => {
    const { 
        caption, body, tags, language,
        rate, owner, yourSpeed, bestSpeed,
        bestSpeedOwner, uploadDate 
    } = props.text;

    return (    
        <div id='text-cont'>
            <div id='main-info'>
                <div id='header'>
                    <div id='caption'>{caption}</div>
                    <div id='tool'>
                        <div>D</div>
                        <div>M</div>
                        <div>
                            {rate} 
                        </div>
                    </div>
                </div>
                <div id='body'>
                    {body}
                </div>
                <div id='footer'>
                    <div id='alph'><span>alphabet: </span>{language}</div>
                    <div id='tags'><span>tags: </span>{tags}</div>
                </div>
            </div>
            <div id='second-info'>
                <div id='names'>
                    <label>owner: </label>
                    <label>upload: </label>
                    <label>your speed: </label>
                    <label>best speed: </label>
                </div>
                <div id='data'>
                    <label>{owner}</label>
                    <label>{uploadDate}</label> 
                    <label>{yourSpeed}</label> 
                    <label>{bestSpeed} &nbsp;&nbsp; <span id='by'>by</span></label>
                    <span id='bs'>{bestSpeedOwner}</span>
                </div>
            </div>
        </div>
    );
} 