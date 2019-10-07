import React, { useState } from 'react';
import { TextFilter } from '../../components/TextsPage/text-filter.component';
import { UploadTextModal } from '../../components/UploadTextModal/upload-text-modal.component';

const handleClick = (e) => {
    // temporary
    console.log(e.target)
}

const handleUpload = (caption, bodyFull, tags, language) => {
    fetch(`http://localhost:3001/api/texts/add/`, {
            method: 'POST',
            body: JSON.stringify({
                caption,
                bodyFull,
                tags,
                language
            }),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        }).catch(err => console.log(err))
}

export const TextsFilterPanel = () => {
    // if true - show modal window for upload new text
    const [showModal, setShowModal] = useState(false);

    return (    
        <div className='main-menu texts-filter'>
            
            <TextFilter handleClick={handleClick} />

            <div className='texts-add-button'>
                <button className='addBtn' onClick={() => setShowModal(true)}>upload</button>
                <UploadTextModal 
                    showModal={showModal} 
                    setShowModal={setShowModal}
                    handleUpload={handleUpload}
                />
            </div> 

        </div>
    );
}