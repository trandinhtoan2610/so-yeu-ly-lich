import React, { useState, useEffect } from 'react';
import './Avatar.css';
import avatar from './avatar.jpeg'
function Avatar() {
    
    const [image, setImage] = useState();

    useEffect(() => {

      return () => {
        image && URL.revokeObjectURL(image.preview)
      }
    } ,[image])
  
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file != null){
          file.preview = URL.createObjectURL(file);
          setImage(file)
        }
        document.getElementById('btn').style.display = "none";

    }

    const changeImg = () => {
        document.getElementById('image-upload').click();
    }
    
    return (<div className='image-input-container'>
        <input className="hidden" id="image-upload" type="file"  accept="image/*" onChange={handleImageChange} />
        <img src={avatar} id="btn" alt="Uploaded" style={{ maxWidth: '100px', maxHeight: '200px', cursor: 'pointer' }}  onClick={changeImg} />
        {image && <img src={image.preview} alt="Uploaded" style={{ maxWidth: '100px', maxHeight: '200px', cursor: 'pointer' }}  onClick={changeImg} />}
    </div>  );
}

export default Avatar;