import React from 'react';
import {Text} from '../components/TextsCont/text.component.jsx';

import {texts} from '../temp_json_fake/texts'

export const TextsList = () => {
    const textsList = texts.map(text => (
            <Text text={text} />
    ))

    return (
        <div className='main-cont texts-list'>
            {textsList}
        </div>
    )
}