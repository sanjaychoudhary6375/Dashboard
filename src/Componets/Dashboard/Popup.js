import React, { useState } from 'react'
import Card from './Card';

const Popup = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const hendlePopup = () => {
    setOpenPopup(true);
  }
  return (
    <>
      <div className="popup">
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
        <Card
          hendlePopup={hendlePopup}
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        />
      </div>
    </>
  )
}

export default Popup