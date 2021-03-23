import React, {useState} from 'react'
import {NavLink} from "react-router-dom";

const NavItems = [
  {
    id: 0,
    mainName: 'Slider',
    items: [
      {
        id: 0,
        to: '/lecture/sort',
        name: 'sort'
      },
      {
        id: 1,
        to: '/lecture/sort',
        name: 'sort 1'
      }
    ]
  },
  {
    id: 1,
    mainName: 'Slider 2',
    items: [
      {
        id: 0,
        to: '/lecture/sort',
        name: 'sort'
      },
      {
        id: 1,
        to: '/lecture/sort',
        name: 'sort 1'
      }
    ]
  }
]

const Sidebar = () => {
  const [index, setIndex] = useState(0)
  return(
    <div className='sidebar'>
      {
        NavItems.map(nav => (
          <NavItem
            key={nav.id}
            index={index}
            mainName={nav.mainName}
            setIndex={setIndex}
            changeIndex={nav.id}
            items={nav.items}
          />
        ))
      }
      <NavLink to='/lectures/sort'> sort </NavLink>
      <NavLink to='/lectures/lists'> lists </NavLink>
    </div>
  )
}

const NavItem = (props) => {
  const handleClick = () => {
    props.setIndex(prevState => prevState === props.changeIndex ? '' : props.changeIndex)
  }
  return(
    <div className='nav-item'>
      <div
        className='nav-button'
        onClick={handleClick}
      >
        {props.mainName}
      </div>
      {
        props.index === props.changeIndex ? (
          props.items.map(item => (
            <NavLink to={`${item.to}`}>{item.name}</NavLink>
          ))
        ) : null
      }
    </div>
  )
}

export default Sidebar
