import React, { useState } from "react"
import { NavLink } from "react-router-dom"

import { NavItems } from "./_nav"

const Sidebar = () => {
  const [index, setIndex] = useState(0)
  return (
    <div className='sidebar'>
      {NavItems.map((nav) => (
        <NavItem
          key={nav.id}
          index={index}
          mainName={nav.mainName}
          setIndex={setIndex}
          changeIndex={nav.id}
          items={nav.items}
        />
      ))}
      <NavLink to='/lectures/sort'> sort </NavLink>
      <NavLink to='/lectures/lists'> lists </NavLink>
    </div>
  )
}

const NavItem = (props) => {
  const handleClick = () => {
    props.setIndex((prevState) =>
      prevState === props.changeIndex ? "" : props.changeIndex
    )
  }
  return (
    <div className='nav-item'>
      <div className='nav-button' onClick={handleClick}>
        {props.mainName}
      </div>
      {props.index === props.changeIndex
        ? props.items.map((item) => (
            <NavLink to={`${item.to}`} className='sidebar-items-to'>
              {item.name}
            </NavLink>
          ))
        : null}
    </div>
  )
}

export default Sidebar
