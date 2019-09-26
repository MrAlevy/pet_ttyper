import React from 'react';
import { connect } from 'react-redux'
import { getTextsFetch } from '../../actions';
import { Text } from './TextItem.js';

const mapDispatchToProps = dispatch => ({
    getTextsFetch: () => dispatch(getTextsFetch())
})

const mapStateToProps = (state) => ({
    texts: state.texts,
    textsIsLoading: state.textsIsLoading,
    textsError: state.textsError
})

class TextsList extends React.Component {
  
    componentDidMount() {
        this.props.getTextsFetch()
    }
    
    render() {
        let textsList = []

        if (this.props.texts.length) {
            const texts = this.props.texts
            textsList = texts.map(text => 
                <Text key={text._id} text={text} />
            )
        }

        return (
            <div className='main-cont texts-list'>
                {this.props.textsIsLoading
                    ? <span>load...</span>
                    : this.props.textsError
                        ? <span>error!</span>
                        : textsList}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextsList)