import React from 'react';
import { TextItemBodySecondInfo } from '../components/TextsPage/text-item-body-second-info.component'
import './styles/texts.scss';

export default class Typer extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            text: 'test text string of 8 separates, . yes!'.split(' '),
            inputText: '',
            inputWordIndex: 0
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
   

    render() {
        return (
            <div className='dataCont typer-cont'>

<div>
        Вводите следующий текст: {this.state.text.join(' ')} <br/>
        введено слов: {this.state.inputWordIndex} <br />
          <input
            type="text"
            value={this.state.inputText}
            name="test"
            placeholder="test"
            onChange={this.handleChange}
          />
        
      </div>






                {this.props.location.state.body}
                <input></input>
                <TextItemBodySecondInfo 
                    text={this.props.location.state}
                />
            </div>
 
        )
    }
}