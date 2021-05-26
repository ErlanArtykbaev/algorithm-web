import React from "react"

const ImageWrapper = (props) => {
  return (
    <div className='image-wrapper'>
      <img src={props.url} alt={props.url} />
      <div className='image-bottom'>{props.text}</div>
    </div>
  )
}

export default ImageWrapper
