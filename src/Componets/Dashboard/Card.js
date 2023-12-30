import React, { useState } from 'react';

const Card = ({ card, onDelete, onUpdate, title }) => {
    const [newImageData, setNewImageData] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [openPopup, setOpenPopup] = useState(false);

    const handleDelete = () => {
        onDelete();
    };

    const handleUpdate = () => {
        onUpdate(card.id, newImageData, newTitle);
        setNewImageData('');
        setNewTitle('');
        setOpenPopup(false); // Close the popup after updating
    };

    const openPopupHandler = () => {
        setNewImageData('');
        setNewTitle('');
        setOpenPopup(true);
    };

    const closePopupHandler = () => {
        setOpenPopup(false);
    };

    return (
        <>
            <div className="card">
                <img src={card.download_url} alt={`Card ${card.id}`} />
                <h3>Title: {title.author}</h3>
                <div className="card-content">
                    <div className="delete">
                        <button className='del' type='button' onClick={handleDelete}>Delete</button>
                        <button className='edit' type='button' onClick={openPopupHandler}>Edit</button>
                    </div>
                </div>
            </div>

            {openPopup && (
                <div className="popup-container" key={card.id}>
                    <div className="popup">
                        <div className="popup-content">
                            <label htmlFor="newImg">New Image</label>
                            <input
                                type="text"
                                placeholder="New Image URL"
                                value={newImageData}
                                onChange={(e) => setNewImageData(e.target.value)}
                            />
                            <label htmlFor="newTitle">Title</label>
                            <input
                                type="text"
                                placeholder="New Title"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                            />
                            <button className='update' type='button' onClick={handleUpdate}>Update</button>
                            <button className='close' type='button' onClick={closePopupHandler}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Card;
