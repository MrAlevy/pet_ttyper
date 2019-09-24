import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { TextItemBody } from '../../components/TextsPage/text-item-body.component';

export const Text = (props) => {
    // isTypingStart - start to type, if false - render texts list
    const [isTypingStart, setIsTypingStart] = useState(false);

    const showModal = () => setIsTypingStart(true)
    
    const { _id } = props.text;

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
                <TextItemBody text={props.text} onClick={showModal}/>
    );
} 