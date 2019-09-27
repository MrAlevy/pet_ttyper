import React from 'react';
import { TextItemBodySecondInfo } from './text-item-body-second-info.component'

export const TextItemBody = (props) => {
    const { caption, bodyShort, tags, language, rate } = props.text;

    return (
        <div 
            id='text-cont'
            onClick = {() => props.onClick()}
        >
            <div id='main-info'>
                <div id='header'>
                    <div id='caption'>{caption}</div>
                    <div id='tool'>
                        <div><i className="material-icons">delete</i></div>
                        <div><i className="material-icons">create</i></div>
                        <div>
                            <i className="material-icons">star</i> 
                           {/* <i className="material-icons">star_border</i> */}
                            {rate} 
                        </div>
                    </div>
                </div>
                <div id='body'>
                    {bodyShort}
                </div>
                <div id='footer'>
                    <div id='alph'><span>alphabet: </span>{language}</div>
                    <div id='tags'><span>tags: </span>{tags}</div>
                </div>
            </div>
            <TextItemBodySecondInfo text={props.text}/>
        </div>
    )
}