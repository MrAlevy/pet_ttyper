import React, { useState } from 'react';
import { Redirect } from 'react-router';

export const Text = (props) => {
    // isTypingStart - start to type, if false - render texts list
    const [isTypingStart, setIsTypingStart] = useState(false);

    const { 
        _id, caption, body, tags, language,
        rate, owner, yourSpeed, bestSpeed,
        bestSpeedOwner, uploadDate 
    } = props.text;

    return (   
        isTypingStart
            ? 
                <Redirect 
                    to={{
                        pathname: `/texts/type/${_id}`,
                        state: props.text
                    }} 
                />
            : 
                <div 
                    id='text-cont'
                    onClick = {() => setIsTypingStart(true)}
                >
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
                </div>
        
    );
} 