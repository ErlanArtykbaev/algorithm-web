import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  const activeStyle = {
    backgroundColor: 'red'
  }
  return(
    <div className='menu-for-others'>
      <NavLink 
        to="/lists" 
        className='link' 
        activeStyle={activeStyle}>
        1. Списки. Односвязные и двусвязные списки
      </NavLink>
      <NavLink 
        to="/stacks-queues" 
        className='link' 
        activeStyle={activeStyle}>
        2. Стеки и очереди. Приоритетные очереди.
      </NavLink>
      <NavLink 
        to="/sort" 
        className='link' 
        activeStyle={activeStyle}>
        3. Метод сортировки.
      </NavLink>
      <NavLink 
        to="/tree" 
        className='link'
        activeStyle={activeStyle}>
        4. Бинарное дерево поиска. (Вставка, удаление, обходы, поиск узла)
      </NavLink>
      <NavLink 
        to="/pyramids" 
        className='link'
        activeStyle={activeStyle}>
        5. Пирамиды. Пирамидальная сортировка.
      </NavLink>
      <NavLink 
        to="/hash" 
        className='link'
        activeStyle={activeStyle}>
        6. Хеш – таблицы.
      </NavLink>
      <NavLink 
        to="/set" 
        className='link'
        activeStyle={activeStyle}>
        7. Set.
      </NavLink>
      <NavLink 
        to="/map" 
        className='link'
        activeStyle={activeStyle}>
        8. Map.
      </NavLink>
      <NavLink 
        to="/graph" 
        className='link'
        activeStyle={activeStyle}>
        9. Graph.
      </NavLink>
    </div>
  )
}
export default Menu