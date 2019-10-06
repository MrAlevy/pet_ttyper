import React from 'react';
import Modal from 'react-modal';
import './upload-text-modal.scss';

Modal.setAppElement(document.getElementById('root'));

export const UploadTextModal = (props) => {
    let caption, bodyFull, tags, language;

    return (
        <Modal 
            isOpen={props.showModal}
            onRequestClose={() => props.setShowModal(false)}
            shouldCloseOnOverlayClick={true}
            className='Modal'
            overlayClassName='Overlay'
            contentLabel="Upload new text."
        >
            <form className='addTextField' id='uploadTextForm'>
                <div id='addHead'>
                    <span>Title: </span>
                    <input ref={el => caption = el}></input>
                </div>

                <div id='addBody'>
                    <span>Text: </span>
                    <textarea ref={el => bodyFull = el}></textarea>
                </div>

                <div id='addTags'>
                    <span>Tags: </span>
                    <input ref={el => tags = el}></input>
                </div>

                <div id='addAlph'>
                    <span>Alphabet: </span><br/>
                    <select                            
                        name='language' 
                        className='second-menu-item language'
                        ref={el => language = el}
                    >
                        <option value=''>-</option>
                        <option value='latin'>latin</option>
                        <option value='cyrillic'>cyrillic</option>
                    </select>
                </div>
            </form>

            <button
                className='addBtnModal'
                onClick={() => {props.handleUpload(caption.value, bodyFull.value, tags.value, language.value)}}
            >
                upload
            </button>
        </Modal>
    )
}