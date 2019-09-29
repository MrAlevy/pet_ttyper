import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { TextItemBody } from '../../components/TextsPage/text-item-body.component';

export const Text = (props) => {
    // isTypingStart - redirect to start to type, if false - render text preview
    const [isTypingStart, setIsTypingStart] = useState(false);

    const showModal = () => setIsTypingStart(true)
    
    const { _id } = props.text;

    return (   
        isTypingStart
            ? 
                <Redirect 
                    to={{
                        pathname: `/texts/type/${_id}`,
                      //  state: props.text - replace on fetching text by id
                    }} 
                />
            : 
                <TextItemBody text={props.text} onClick={showModal}/>
    );
} 