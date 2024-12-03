import React, { useState } from 'react'
import './image.css';
import cat from './assets/cat.jpg'
function ImageManipulation() {
  const[height,setHeight]=useState(100);
  const[width,setWidth]=useState(100);
  const[red,setRed]=useState()
  const[green,setGreen]=useState()
  const[blue,setBlue]=useState()
  const[imgrotate,setImgRotate]=useState(0);
  
  function enhanceheight(){
    setHeight(height+20)
  }
  function enhanceWidth(){
    setWidth(width+20)
  }

  function changeColor(){
    setRed(Math.random()*255);
    setGreen(Math.random()*255);
    setBlue(Math.random()*255);

  }

  function imageRotate(){
    setImgRotate(imgrotate+30);

  }
  return (
    <div className='imageCard'>
        <div className='catdiv' style={{backgroundColor:`RGB(${red},${green},${blue})`}}>
            <img src={cat} height={height} width={width}  alt="cat image" style={{ transform: `rotate(${imgrotate}deg)`}}/>
        </div>

        <button onClick={enhanceheight}>Enhance Height</button>
        &nbsp; &nbsp; &nbsp;
        <button onClick={enhanceWidth} >Enhance Width</button>
        &nbsp; &nbsp; &nbsp;
        <button onClick={imageRotate}>Image Rotate</button>
        &nbsp; &nbsp; &nbsp;
        <button onClick={changeColor}>Color Change</button>
        &nbsp; &nbsp; &nbsp;
        
    </div>
  )
}

export default ImageManipulation