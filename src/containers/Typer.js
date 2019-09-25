import React from 'react';
import { TextItemBodySecondInfo } from '../components/TextsPage/text-item-body-second-info.component'
import './styles/texts.scss';
import './styles/typer.scss';
export default class Typer extends React.Component {
  constructor (props) {
    super (props)
    
    this.state = {
      rightText: this.props.location.state.body,
      rightLetter: '',
      rightTextPast: '',
      inputLetter: '',
      inputTextPast: '',
      isErrorLetter: false,
    } 
  }
     
  /*
  / main typing process algorithm
  */
  handleInput(e) {
    const inputValue = e.target.value;

    if (
      this.state.rightTextPast === '' 
      && inputValue === ' ' 
      && this.state.rightLetter === ''
    ) {
      // starting space - start the typing - take the first word
      this.setState({
        rightLetter: this.state.rightText[0],
        rightText: this.state.rightText.slice(1,),
        rightTextPast: ' ',
      })
    }
    else if (
        inputValue === this.state.rightLetter
        && inputValue.length === 1
    ) {
      // if input letter is right - send to correct
      this.setState({
        rightLetter: this.state.rightText[0],
        rightText: this.state.rightText.slice(1,),
        rightTextPast: this.state.rightTextPast + inputValue,
        inputTextPast: this.state.inputTextPast + inputValue,
        inputLetter: '',
        isErrorLetter: false,
      }, () => {
          if (this.state.rightTextPast.length >= 40) {
            // if already right string is bigger than 40 symbols - cut it
            this.setState({
              rightTextPast: this.state.rightTextPast.slice(1, ),
            })
          }
          if (
            // if already input string is bigger than 3 word - cut it
            this.state.rightTextPast.endsWith(' ')
            && this.state.inputTextPast.split(' ').length > 2
          ) {
            this.setState({
              inputTextPast: this.state.inputTextPast.split(' ').slice(1, ).join(' ')
            })
          }
        }
      )
    }
    else if (this.state.rightTextPast !== '') {
      // if input letter is wrong - write the wrong letter to input
      this.setState({
        inputLetter: inputValue,
        isErrorLetter: true,
      })
    }
  }
  /*
  / end of main typing process algorithm
  */


  render() {
    return (

      <div className='dataCont typer-cont'>
        <div id='text-typer-cont'>

          <div id='right-text-line'>
            <div className='text-t right-text-past'>{this.state.rightTextPast}</div>
            <div className={this.state.isErrorLetter ? 'text-t right-letter right-letter-error' : 'text-t right-letter'}>{this.state.rightLetter}</div>
            <div className='text-t right-text'>{this.state.rightText.slice(0, 35)}</div>
          </div>
  
          <div id='input-text-line'>
            <div className='text-t input-text-past'>{this.state.inputTextPast}</div>
            <div className='text-t input-letter'>
              <input
                type='text'
                value={this.state.inputLetter}
                onChange={(e) => this.handleInput(e)}
              />
            </div> 
          </div>
          
        </div>

          {/* <TextItemBodySecondInfo 
              text={this.props.location.state}
          /> */}

      </div>
    )
  }
}