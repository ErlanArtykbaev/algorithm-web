import React from "react"
import "antd/dist/antd.css"

import { Menu } from "antd"
import {
  DatabaseOutlined,
  PartitionOutlined,
  BarsOutlined,
  DashboardOutlined,
  CaretUpOutlined,
  ForkOutlined,
  ReadOutlined,
  NodeExpandOutlined,
  RadarChartOutlined,
} from "@ant-design/icons"
// import { NavItems } from "./_nav"
import { NavLink } from "react-router-dom"

const { SubMenu } = Menu

const Sider = () => {
  const handleClick = (e) => {
    console.log("click ", e)
  }

  return (
    <Menu
      onClick={handleClick}
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["lists"]}
      mode='inline'>
      <SubMenu key='lists' icon={<BarsOutlined />} title='Списки'>
        <Menu.Item key='1'>
          <NavLink to='/lists/what-is-list' className='nav-link'>
            Что такое списки
          </NavLink>
        </Menu.Item>
        <Menu.Item key='2'>
          <NavLink to='/lists/singly' className='nav-link'>
            Односвязные списки
          </NavLink>
        </Menu.Item>
        <Menu.Item key='3'>
          <NavLink to='/lists/doubly' className='nav-link'>
            Двусвязные списки
          </NavLink>
        </Menu.Item>
        <Menu.Item key='4'>
          <NavLink to='/lists/visual' className='nav-link'>
            Визуализация
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key='queues' icon={<DatabaseOutlined />} title='Стеки'>
        <Menu.Item key='5'>
          <NavLink to='/queues/stecks' className='nav-link'>
            Стеки
          </NavLink>
        </Menu.Item>
        <Menu.Item key='6'>
          <NavLink to='/queues/queues' className='nav-link'>
            Очередь
          </NavLink>
        </Menu.Item>
        <Menu.Item key='7'>
          <NavLink to='/queues/priority' className='nav-link'>
            Приоритетные очереди
          </NavLink>
        </Menu.Item>
        <Menu.Item key='8'>
          <NavLink to='/queues/visalization' className='nav-link'>
            Визуализация
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key='o' icon={<DashboardOutlined />} title='O большое'>
        <Menu.Item key='9'>
          <NavLink to='/o/what-is-o' className='nav-link'>
            Что такое О большое
          </NavLink>
        </Menu.Item>
        <Menu.Item key='10'>
          <NavLink to='/o/example' className='nav-link'>
            Примеры
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key='binary-tree'
        icon={<PartitionOutlined />}
        title='Бинарное дерево'>
        <Menu.Item key='11'>
          <NavLink to='/binary/what-is-tree' className='nav-link'>
            Что такое дерево
          </NavLink>
        </Menu.Item>
        <Menu.Item key='12'>
          <NavLink to='/binary/bianry-tree' className='nav-link'>
            Бинарные деревья
          </NavLink>
        </Menu.Item>
        <Menu.Item key='13'>
          <NavLink to='/binary/add-element' className='nav-link'>
            Вставка элемента
          </NavLink>
        </Menu.Item>
        <Menu.Item key='14'>
          <NavLink to='/binary/delete-element' className='nav-link'>
            Удаление элемента
          </NavLink>
        </Menu.Item>
        <Menu.Item key='15'>
          <NavLink to='/binary/obhod' className='nav-link'>
            Обходы
          </NavLink>
        </Menu.Item>
        <Menu.Item key='16'>
          <NavLink to='/binary/search' className='nav-link'>
            Поиск узла
          </NavLink>
        </Menu.Item>
        <Menu.Item key='17'>
          <NavLink to='/binary/vizual' className='nav-link'>
            Визуализация
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key='pyramids' icon={<CaretUpOutlined />} title='Пирамиды'>
        <Menu.Item key='18'>
          <NavLink to='/pyramids/what-is-pyramdis' className='nav-link'>
            Что такое пирамида
          </NavLink>
        </Menu.Item>
        <Menu.Item key='19'>
          <NavLink to='/pyramids/sort' className='nav-link'>
            Пирамидальная сортировка
          </NavLink>
        </Menu.Item>
        <Menu.Item key='20'>
          <NavLink to='/pyramids/vizual' className='nav-link'>
            Визуализация
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key='hash' icon={<ForkOutlined />} title='Хэш - таблицы'>
        <Menu.Item key='21'>
          <NavLink to='/hash/what-is-hash' className='nav-link'>
            Что такое хэш таблицы
          </NavLink>
        </Menu.Item>
        <Menu.Item key='22'>
          <NavLink to='/hash/example' className='nav-link'>
            Примеры
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key='set' icon={<ReadOutlined />} title='Set'>
        <Menu.Item key='23'>
          <NavLink to='/set/what-is-set' className='nav-link'>
            Что такое set
          </NavLink>
        </Menu.Item>
        <Menu.Item key='24'>
          <NavLink to='/set/example' className='nav-link'>
            Примеры
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key='map' icon={<NodeExpandOutlined />} title='Map'>
        <Menu.Item key='25'>
          <NavLink to='/map/what-is-map' className='nav-link'>
            Что такое map
          </NavLink>
        </Menu.Item>
        <Menu.Item key='26'>
          <NavLink to='/map/example' className='nav-link'>
            Примеры
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key='graph' icon={<RadarChartOutlined />} title='Графы'>
        <Menu.Item key='27'>
          <NavLink to='/graph/what-is-graph' className='nav-link'>
            Что такое Графы
          </NavLink>
        </Menu.Item>
        <Menu.Item key='28'>
          <NavLink to='/graph/algorithm' className='nav-link'>
            Алгоритмы над графами
          </NavLink>
        </Menu.Item>
        <Menu.Item key='29'>
          <NavLink to='/graph/example' className='nav-link'>
            Примеры
          </NavLink>
        </Menu.Item>
      </SubMenu>
    </Menu>
  )
}

export default Sider
