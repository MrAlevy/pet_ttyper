import React, { useState } from 'react';
import Modal from 'react-modal';
import './text-add-modal.scss';

const handleClick = (e) => {
    console.log(e.target)
}

Modal.setAppElement('#root');

export const TextsFilterPanel = () => { 
    const [showModal, setShowModal] = useState(false);

    return (    
        <div className='main-menu texts-filter'>
            <div className='main-menu-items'>
                <div                            
                    name='my' 
                    className='main-menu-item'
                    onClick={(e) => handleClick(e)} 
                >
                    My
                </div>
                <div className='separator'>
                    |
                </div>
                <div
                    name='global' 
                    className='main-menu-item' 
                    onClick={(e) => handleClick(e)}
                >
                    Global
                </div>
                <div className='separator'>
                    |
                </div>
                <div
                    name='favorites' 
                    className='main-menu-item' 
                    onClick={(e) => handleClick(e)}
                >
                    Favorites
                </div>
            </div>
            <div className='texts-add-button'>
                <button className='addBtn' onClick={() => setShowModal(true)}>upload</button>
                <Modal 
                    isOpen={showModal}
                    onRequestClose={() => setShowModal(false)}
                    shouldCloseOnOverlayClick={true}
                    className='Modal'
                    overlayClassName='Overlay'
                    contentLabel="Upload new text."
                >
                    <div className='addTextField'>
                        <div id='addHead'>
                            <span>Title: </span>
                            <input></input>
                        </div>
                        <div id='addBody'>
                            <span>Text: </span>
                            <textarea></textarea>
                        </div>
                        <div id='addTags'>
                            <span>Tags: </span>
                            <input></input>
                        </div>
                        <div id='addAlph'>
                            <span>Alphabet: </span><br/>
                            <select                            
                                name='language' 
                                className='second-menu-item language'
                            >
                                <option value=''>-</option>
                                <option value='latin'>latin</option>
                                <option value='cyrillic'>cyrillic</option>
                            </select>
                        </div>
                    </div>
                    <button 
                        className='addBtnModal'
                        onClick={() => setShowModal(false)}
                    >
                        upload
                    </button>
                </Modal>
            </div> 
        </div>
    );
}