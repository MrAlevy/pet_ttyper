import React from 'react';
import { connect } from 'react-redux'
import { getTextsFetch } from '../actions';
//import { TextItemBodySecondInfo } from '../components/TextsPage/text-item-body-second-info.component'
import './styles/texts.scss';
import './styles/typer.scss';

const mapStateToProps = (state) => ({
  textFetch: state
})

const mapDispatchToProps = dispatch => ({
  getTextsFetch: (...args) => dispatch(getTextsFetch(...args))
})
class Typer extends React.Component {
  constructor (props) {
    super (props)
    
    this.state = {
      rightText: '',
      rightLetter: '',
      rightTextPast: '',
      isErrorLetter: false,

      isTypingStart: false,
    } 

  }

  componentDidMount () {
    this.props.getTextsFetch('textById', this.props.match.params.id) // dispatch action - get the text by id
    document.addEventListener('keydown', this.handleKeyPress) // listen keyboard for typing
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  componentDidUpdate (prevProps) {
    if (this.props.textFetch.textsIsLoading !== prevProps.textFetch.textsIsLoading) {
      this.setState({rightText: this.props.textFetch.texts.bodyFull}) // if loading text complete - send to state
      console.log(
        'componentDidUpdate: (textsIsLoading prev this comparison):',
        prevProps.textFetch.textsIsLoading, this.props.textFetch.textsIsLoading
      )
    }
  }

  /*
  * main typing algorithm
  */
  handleKeyPress = (e) => {
    // if push the space - start typing
    e.keyCode === 32 && this.setState({isTypingStart: true})

    // checking that input value not Shift, Ctrl etc...
    let isValidKey = false;
    if (
      (e.keyCode >= 48 && e.keyCode <= 90)
      || (e.keyCode >= 96 && e.keyCode <= 111)
      || (e.keyCode >= 160 && e.keyCode <= 165)
      || (e.keyCode >= 186 && e.keyCode <= 223)
      || e.keyCode === 170
      || e.keyCode === 32
      || e.keyCode === 9
      || e.keyCode === 13
    ) { isValidKey = true }
    if (!isValidKey) {return}
     
    const inputValue = e.key;

    if (
      this.state.rightTextPast === '' 
      && this.state.isTypingStart
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
        isErrorLetter: false,
      }, () => {
          if (this.state.rightTextPast.length >= 40) {
            // if already right string is bigger than 40 symbols - cut it
            this.setState({
              rightTextPast: this.state.rightTextPast.slice(1, ),
            })
          }
        }
      )
    }
    else if (this.state.rightTextPast !== '') {
      // if input letter is wrong
      this.setState({
        isErrorLetter: true,
      })
    }
  }

  render() {

    return (

      <div className='dataCont typer-cont'>
        <div id='text-typer-cont'>

          <div id='right-text-line'>
            <div className='text-t right-text-past'>{this.state.rightTextPast}</div>
            <div className={this.state.isErrorLetter ? 'text-t right-letter right-letter-error' : 'text-t right-letter'}>{this.state.rightLetter}</div>
            <div className='text-t right-text'>{this.state.rightText && this.state.rightText.slice(0, 35)}</div>
          </div>
          
        </div>

          {/* <TextItemBodySecondInfo 
              text={this.props.location.state}
          /> */}

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Typer)