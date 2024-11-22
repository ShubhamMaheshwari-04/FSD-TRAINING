import React from 'react'
import './image.css';
import cat from './assets/cat.jpg'
function ImageManipulation() {
  return (
    <div className='imageCard'>
        <div className='catdiv'>
            <img src={cat} height={100} width={100} alt="" />
        </div>

        <button>Enhance Height</button>
        &nbsp; &nbsp; &nbsp;
        <button>Enhance Width</button>
        &nbsp; &nbsp; &nbsp;
        <button>Image Rotate</button>
        &nbsp; &nbsp; &nbsp;
        <button>Color Change</button>
        &nbsp; &nbsp; &nbsp;
    </div>
  )
}

export default ImageManipulation