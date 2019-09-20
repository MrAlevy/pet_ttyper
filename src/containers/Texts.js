import React from 'react';
import './styles/texts.scss';

const handleClick = () => {
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
}

export const Texts = () => {
  return (
    <div className="texts">
{/*         <div className="textsMain">
          
        </div>
        <div className="textsList">
          <button onClick={() => handleClick()}>add text</button>
          
        </div> */}
      <div className='firstRow'>
        
      </div>
      <div className='secondRow'>

      </div>
      <div className='thirdRow'>

      </div>
    </div>
  );
}
