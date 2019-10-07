import React from 'react';
import { TextsSelector } from '../../components/TextsPage/texts-selector.component';
import { TextsFilterPanel } from '../TextsFilterPanel/TextsFilterPanel';
import TextsList from '../TextsList/TextsList';
import '../styles/texts.scss';
import '../styles/main.scss';

/* const handleClick = () => {
  fetch('http://localhost:5000/texts/add', {
    method: 'POST',
    body: JSON.stringify({
      caption: 'test1.caption',
      body: 'test1 some text but no shorter than 25 symbols'
    }),
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    }
  })
  .then(res => res.json())
  .catch(err => console.error(err))
} */

export const Texts = () => {
  return (
    <div className='dataCont textsCont'>
      <TextsFilterPanel />
      <TextsSelector />
      <TextsList />
    </div>
  );
}
