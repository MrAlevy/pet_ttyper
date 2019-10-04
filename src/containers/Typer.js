import React from 'react';
import { connect } from 'react-redux'
import { getTextsFetch } from '../actions';
import { TyperMain } from '../components/TextsPage/typer-main.component';
import './styles/texts.scss';

const mapStateToProps = (state) => ({
    textFetch: state
})
const mapDispatchToProps = dispatch => ({
    getTextsFetch: (...args) => dispatch(getTextsFetch(...args))
})

class Typer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            rightText: '',
            rightLetter: '',
            rightTextPast: '',
            isErrorLetter: false,

            isTyping: false,
            lettersEntered: 0,
            mistakes: 0,
            timer: 0,
            avgSpeed: 0,
            curSpeed: 0,
            lettersEnteredSnapShot: 0,

            screenWidth: window.innerWidth,
            TEXT_LENGTH: 0
        }
    }

    componentDidMount() {
        // dispatch action - get the text from db by id
        this.props.getTextsFetch('textById', this.props.match.params.id);
        // listen keyboard for typing
        document.addEventListener('keydown', this.handleKeyPress);
        // listen window to resize
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
        window.removeEventListener("resize", this.handleResize);
        // clear intervals
        this.clearIntervals();
    }

    componentDidUpdate(prevProps) {
        if (this.props.textFetch.textsIsLoading !== prevProps.textFetch.textsIsLoading) {
            // if loading text from db is complete - send text to state
            this.setState({ 
                rightText: this.props.textFetch.texts.bodyFull,
            })
           
            console.log(
                'componentDidUpdate: (textsIsLoading prev this comparison):',
                prevProps.textFetch.textsIsLoading, this.props.textFetch.textsIsLoading
            )
        }
    }

    setTimerIntervals = () => {
        // simple second counter
        this.timerInterval = setInterval(() => this.setState({
            timer: this.state.timer + 1
        }), 1000);

        // average speed for all time (symbols per minute)
        this.avgSpeedInterval = setInterval(() => this.setState({
            avgSpeed: Math.round(60 * this.state.lettersEntered / this.state.timer)
        }), 1000);

        // current speed for last three seconds (symbols per minute)
        this.curSpeedInterval = setInterval(() => this.setState({
            curSpeed: 60 * (this.state.lettersEntered - this.state.lettersEnteredSnapShot) / 2,
            lettersEnteredSnapShot: this.state.lettersEntered
        }), 2000);
    }

    clearIntervals = () => {
        // clear intervals
        clearInterval(this.timerInterval);
        clearInterval(this.avgSpeedInterval);
        clearInterval(this.curSpeedInterval);
    }

    handleResize = () => {
        this.setState({ screenWidth: window.innerWidth })
    }

    /**
    * main typing algorithm
    */
    handleKeyPress = (e) => {
        // if push the space - start typing
        e.keyCode === 32 && this.setState({ isTyping: true })

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
        ) { 
            isValidKey = true 
        }

        if (!isValidKey) { 
            return 
        }

        // get the pushed key
        const inputValue = e.key;

        // starting space - start the typing - take the first word
        if (
            this.state.rightTextPast === ''
            && this.state.isTyping
        ) {
            this.setState(
                {
                    TEXT_LENGTH:  this.state.rightText.length,
                    rightLetter: this.state.rightText[0],
                    rightText: this.state.rightText.slice(1),
                    rightTextPast: ' ',
                }
            )
            // start the timers
            this.setTimerIntervals()

            console.log('typer: typing is start')

        // if input letter is right - send to correct
        } else if (
            inputValue === this.state.rightLetter
            && inputValue.length === 1
        ) {
            this.setState(
                {
                    rightLetter: this.state.rightText[0],
                    rightText: this.state.rightText.slice(1),
                    rightTextPast: this.state.rightTextPast + inputValue,
                    isErrorLetter: false,
                    lettersEntered: this.state.lettersEntered + 1,
                }, () => {
                    // if already right string is bigger than 40 symbols - cut it
                    if (this.state.rightTextPast.length > this.state.screenWidth/27) {
                        this.setState({
                            rightTextPast: this.state.rightTextPast.slice(1,)
                        })
                    }
                }
            )

            // if text is over
            if (!this.state.rightText && !this.state.rightLetter) {
                console.log('typer: typing is end')

                this.setState({ 
                    isTyping: false,
                    curSpeed: 0
                });

                // clear intervals
                this.clearIntervals();

                // remove listener
                document.removeEventListener('keydown', this.handleKeyPress);

                // !!!TEMPORARY!!! - if best speed - asking for a save in db
                // *****
                // **
                if (this.state.avgSpeed > this.props.textFetch.texts.bestSpeed) {
                    setTimeout(() => {
                        let userName = prompt('Вы показали лучшую скорость! К сожалению, здесь пока осутствует возможность авторизации, но Вы можете просто ввести свое имя ниже, и оно будет сохранено в базу данных: ','');
                        if (userName != '') { this.saveRecord(userName) }
                    }, 3000)
                }
                // **
                // *****
                // !!!TEMPORARY!!! - end
            }

        // if input letter is wrong
        } else if (this.state.rightTextPast !== '') {
            this.setState({
                isErrorLetter: true,
                mistakes: this.state.mistakes + 1,
            })
        }
    }
    /**
    * main typing algorithm's end
    */

    // save new best speed and user into db
    saveRecord = (userName) => {
        fetch(`http://localhost:3001/api/texts/update/${this.props.textFetch.texts._id}`, {
            method: 'POST',
            body: JSON.stringify({
                bestSpeed: this.state.avgSpeed,
                bestSpeedOwner: userName,
                bestSpeedOwnerMistakes: this.state.mistakes
            }),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <TyperMain state={this.state} textInfo={this.props.textFetch.texts} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Typer)