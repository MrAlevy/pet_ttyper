import React from 'react';
import { TextItemBodySecondInfo } from '../components/TextsPage/text-item-body-second-info.component'
import './styles/texts.scss';
import './styles/typer.scss';


export default class Typer extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            text1: 'test text string of 8 separates, . yes!'.split(' '),
            inputText1: '',
            inputWordIndex1: 0,

            rightText: this.props.location.state.body,
            rightLetter: '',
            rightTextPast: '',
            inputLetter: '',
            inputTextPast: ''

          }
          this.handleChange = this.handleChange.bind(this);
        
    }
    
    handleChange(event) {
        const lastLetter = event.target.value[event.target.value.length - 1];
        
        if (lastLetter === ' ') {
            console.log(event.target.value.slice(0, event.target.value.length - 1), this.state.text[this.state.inputWordIndex])
            if (event.target.value.slice(0, event.target.value.length - 1) == this.state.text[this.state.inputWordIndex]) {
               this.setState({inputText: '', inputWordIndex: this.state.inputWordIndex + 1})
            } else {this.setState({inputText: event.target.value})}
    
        } else {
          this.setState({inputText: event.target.value})
        }
        
    
      }
   

handleInput(e) {
  const inputValue = e.target.value;

  if (
    this.state.rightTextPast === '' 
    && inputValue === ' ' 
    && this.state.rightLetter === ''
  ) {
    // starting space - start the next word, if it is
    this.setState({
      rightLetter: this.state.rightText[0],
      rightText: this.state.rightText.slice(1,),
    })
  }
  else if (inputValue === this.state.rightLetter) {
    // if input letter is right - send to correct
    this.setState({
      rightLetter: this.state.rightText[0],
      rightText: this.state.rightText.slice(1,),
      rightTextPast: this.state.rightTextPast + inputValue,
      inputTextPast: this.state.inputTextPast + inputValue,
    })
  }
  else if (this.state.rightTextPast !== '') {
    // if input letter is wrong - write the wrong letter to input
    this.setState({
      inputLetter: inputValue,
      inputTextPast: this.state.inputTextPast + inputValue[inputValue.length - 1],
    })
  }
}



    render() {
        return (
            <div className='dataCont typer-cont'>

{/*                 <div>
                  Вводите следующий текст: {this.state.text.join(' ')} <br/>
                  введено слов: {this.state.inputWordIndex} <br />
                    <input
                      type="text"
                      value={this.state.inputText}
                      name="test"
                      placeholder="test"
                      onChange={this.handleChange}
                    />
                  
                </div> */}




<div id='right-text-line'>
  <div>{this.state.rightTextPast}</div>
  <div>{this.state.rightLetter}</div>
  <div>{this.state.rightText}</div>
</div>
<br />
<div id='input-text-line'>
  <div>{this.state.inputTextPast}</div>
  <input                       
    type="text"
    value={this.state.inputLetter}
    onChange={(e) => this.handleInput(e)}
  />
</div>

                




                <TextItemBodySecondInfo 
                    text={this.props.location.state}
                />
            </div>
 
        )
    }
}