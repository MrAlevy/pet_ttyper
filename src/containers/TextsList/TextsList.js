import React from 'react';
import { connect } from 'react-redux'
import { getTextsFetch } from '../../actions';
import { Text } from './TextItem.js';
import { Spinner } from '../../components/Additionals/spinner/spinner';

const mapDispatchToProps = dispatch => ({
    getTextsFetch: (...args) => dispatch(getTextsFetch(...args))
})

const mapStateToProps = (state) => ({
    texts: state.texts,
    textsIsLoading: state.textsIsLoading,
    textsError: state.textsError
})

class TextsList extends React.Component {
  
    componentDidMount() {
        // dispatch action - get all texts
        this.props.getTextsFetch('allTexts')
    }
    
    render() {
        let textsList = []

        // if texts load in props complete - forming the list
        if (this.props.texts.length) { 
            const texts = this.props.texts

            textsList = texts.map(text => 
                <Text key={text._id} text={text} />
            )
        }

        return (
            <div className='main-cont texts-list'>
                {this.props.textsIsLoading
                    ? <div id='msg'><Spinner /></div>
                    : this.props.textsError
                        ? <div id='msg'>Error! Trying later.</div>
                        : textsList} 
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextsList)