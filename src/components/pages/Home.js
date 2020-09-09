import React  from 'react'
import {NavLink} from 'react-router-dom'

import Footer from '../layer/Footer'

const Home = () => {

  return (
    <div className="home">
      
      <div className="pages">
        <div className="algorithm">
          <NavLink to="/lists">
            1. Списки. Односвязные и двусвязные списки
          </NavLink>
        </div>
        <div className="algorithm">
          <NavLink to="/stacks-queues">
            2. Стеки и очереди. Приоритетные очереди.
          </NavLink>
        </div>
        <div className="algorithm">
          <NavLink to="/sort">
            3. Метод сортировки.
          </NavLink>
        </div>
        <div className="algorithm">
          <NavLink to="/tree">
            4. Бинарное дерево поиска. (Вставка, удаление, обходы, поиск узла)
          </NavLink>
        </div>
        <div className="algorithm">
          <NavLink to="/pyramids">
            5. Пирамиды.<br /> Пирамидальная сортировка.
          </NavLink>
        </div>
        <div className="algorithm">
          <NavLink to="/hash">
            6. Хеш – таблицы.
          </NavLink>
        </div>
        <div className="algorithm">
          <NavLink to="/set">
            7. Set.
          </NavLink>
        </div>
        <div className="algorithm">
          <NavLink to="/map">
            8. Map.
          </NavLink>
        </div>
        <div className="algorithm">
          <NavLink to="/graph">
            8. Map.
          </NavLink>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home