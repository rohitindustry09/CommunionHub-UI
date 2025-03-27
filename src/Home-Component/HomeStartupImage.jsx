import React, { useEffect, useState } from 'react'
import './HomeStartupImage.css'

const HomeStartupImage = ({ imageSrc, imageTitle }) => {

  const [showTitle, setshowTitle] = useState(false);


  useEffect(()=>{
    setTimeout(() => {
      setshowTitle(true)
    }, 2000);
  }, [])
  return (
 
    <div className={`image ${imageTitle}`}>
       <h4 className={showTitle ? 'show-title' : 'dont-show-title' }> {imageTitle} </h4>
        <img src={imageSrc} />
    </div>
  )
}

export default HomeStartupImage