import React from 'react';
import {Text} from './TextItem.js';

import {texts} from '../../temp_json_fake/texts'

export const TextsList = () => {
    const textsList = texts.map(text => (
            <Text key={text._id} text={text} />
    ))

    return (
        <div className='main-cont texts-list'>
            {textsList}
        </div>
    )
}