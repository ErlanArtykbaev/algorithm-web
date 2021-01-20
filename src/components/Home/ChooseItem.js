import React from 'react'
import {NavLink} from "react-router-dom";

const ChooseItem = (props) => {
  return(
    <div className='choose-item'>
      <div className='bkg-img-clr'>
        <img src={props.img} alt='algo' />
      </div>
      <h3 className='choose-item-title'>{props.title}</h3>
      <NavLink className='choose-item-url' to={props.url}>Learn -></NavLink>
    </div>
  )
}

export default ChooseItem