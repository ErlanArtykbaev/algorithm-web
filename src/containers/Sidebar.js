import React, { useState } from "react"
import { NavLink } from "react-router-dom"

const NavItems = [
  {
    id: 0,
    mainName: "Списки",
    items: [
      {
        id: 0,
        to: "/lecture/lists",
        name: "Что такое списки",
      },
      {
        id: 1,
        to: "/lecture/lists",
        name: "Односвязные списки",
      },
      {
        id: 2,
        to: "/lecture/sort",
        name: "Двусвязные списки",
      },
      {
        id: 3,
        to: "/lecture/sort",
        name: "Визуализация",
      },
    ],
  },
  {
    id: 1,
    mainName: "Стеки",
    items: [
      {
        id: 0,
        to: "/lecture/sort",
        name: "Стеки",
      },
      {
        id: 1,
        to: "/lecture/sort",
        name: "Очередь",
      },
      {
        id: 2,
        to: "/lecture/sort",
        name: "Приоритетные очереди",
      },
      {
        id: 3,
        to: "/lecture/sort",
        name: "Визуализация",
      },
    ],
  },
  {
    id: 2,
    mainName: "Сортировка",
    items: [
      {
        id: 0,
        to: "/lecture/sort",
        name: "Что такое сортировка",
      },
      {
        id: 1,
        to: "/lecture/sort",
        name: "Визуализация",
      },
    ],
  },
  {
    id: 3,
    mainName: "О большое",
    items: [
      {
        id: 0,
        to: "/lecture/lists",
        name: "Что такое O большое",
      },
      {
        id: 3,
        to: "/lecture/sort",
        name: "Примеры",
      },
    ],
  },
  {
    id: 4,
    mainName: "Бинарное дерево",
    items: [
      {
        id: 0,
        to: "/lecture/sort",
        name: "Что такое дерево",
      },
      {
        id: 1,
        to: "/lecture/sort",
        name: "Бинарные деревья",
      },
      {
        id: 2,
        to: "/lecture/sort",
        name: "Вставка элемента",
      },
      {
        id: 3,
        to: "/lecture/sort",
        name: "Удаление элемента",
      },
      {
        id: 4,
        to: "/lecture/sort",
        name: "Обходы",
      },
      {
        id: 5,
        to: "/lecture/sort",
        name: "Поиск узла",
      },
      {
        id: 3,
        to: "/lecture/sort",
        name: "Визуализация",
      },
    ],
  },
  {
    id: 5,
    mainName: "Пирамиды",
    items: [
      {
        id: 0,
        to: "/lecture/sort",
        name: "Что такое пирамиды",
      },
      {
        id: 1,
        to: "/lecture/sort",
        name: "Пирамидальная сортировка",
      },
      {
        id: 2,
        to: "/lecture/sort",
        name: "Визуализация",
      },
    ],
  },
  {
    id: 6,
    mainName: "Хэш - таблицы",
    items: [
      {
        id: 0,
        to: "/lecture/sort",
        name: "Что такое хэш таблицы",
      },
      {
        id: 1,
        to: "/lecture/sort",
        name: "Примеры",
      },
    ],
  },
  {
    id: 7,
    mainName: "Set",
    items: [
      {
        id: 0,
        to: "/lecture/sort",
        name: "Что такое Set",
      },
      {
        id: 1,
        to: "/lecture/sort",
        name: "Примеры",
      },
    ],
  },
  {
    id: 8,
    mainName: "Map",
    items: [
      {
        id: 0,
        to: "/lecture/sort",
        name: "Что такое Map",
      },
      {
        id: 1,
        to: "/lecture/sort",
        name: "Примеры",
      },
    ],
  },
  {
    id: 9,
    mainName: "Графы",
    items: [
      {
        id: 0,
        to: "/lecture/sort",
        name: "Что такое Графы",
      },
      {
        id: 1,
        to: "/lecture/sort",
        name: "Алгоритмы над графами",
      },
      {
        id: 2,
        to: "/lecture/sort",
        name: "Примеры",
      },
    ],
  },
]

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
