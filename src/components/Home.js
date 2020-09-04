import React  from 'react'
import {NavLink} from 'react-router-dom'

import Footer from './layer/Footer'

const Home = () => {

  return (
    <div className="app">
      
      <div className="App-main">
        <div className="App-grid-container">
            
            <div className="post-1 bor">
              <NavLink to="/lists" className="App-link">
                <div className="App-photo-link-one">
                  1. Списки. Односвязные и двусвязные списки
                </div>
              </NavLink>
            </div>
            <div className="post-2 bor">
              <NavLink to="/stacks-queues" className="App-link">
                <div className="App-photo-link-two">
                  2. Стеки и очереди. Приоритетные очереди.
                </div>
              </NavLink>
            </div>
            <div className="post-3 bor">
              <NavLink to="/sort" className="App-link">
                <div className="App-photo-link-three">
                  3. Метод сортировки.
                </div>
              </NavLink>
            </div>
            <div className="post-4 bor">
              <NavLink to="/tree" className="App-link">
                <div className="App-photo-link-four">
                  4. Бинарное дерево поиска. (Вставка, удаление, обходы, поиск узла)
                </div>
              </NavLink>
            </div>
            <div className="post-5 bor">
              <NavLink to="/pyramids" className="App-link">
                <div className="App-photo-link-five">
                  5. Пирамиды.<br /> Пирамидальная сортировка.
                </div>
              </NavLink>
            </div>
            <div className="post-6 bor">
              <NavLink to="/hash" className="App-link">
                <div className="App-photo-link-six">
                  6. Хеш – таблицы.
                </div>
              </NavLink>
            </div>
            <div className="post-7 bor">
              <NavLink to="/set" className="App-link">
                <div className="App-photo-link-seven">
                  7. Set.
                </div>
              </NavLink>
            </div>
            <div className="post-8 bor">
              <NavLink to="/Map" className="App-link">
                <div className="App-photo-link-eight">
                  8. Map.
                </div>
              </NavLink>
            </div>
            <div className="post-9 bor">
              <NavLink to="/graph" className="App-link">
                <div className="App-photo-link-nine">
                  9. Графы. (Алгоритмы над графами).
                </div>
              </NavLink>
            </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home