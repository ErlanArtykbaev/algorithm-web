import React  from 'react'
import MainHomeInfo from "../Home/MainHomeInfo";
import ChooseWhatToLearn from "../Home/ChooseWhatToLearn";
import Container from "../layer/Container";
import OnlineEmlation from '../Home/OnlineEmulation';

const Home = () => {

  return (
    <div className="home">
      <Container>
        <MainHomeInfo />
        <ChooseWhatToLearn />
        <OnlineEmlation />
      </Container>
      {/*<div className="pages">*/}
      {/*  <div className="algorithm">*/}
      {/*    <NavLink to="/lists">*/}
      {/*      1. Списки. Односвязные и двусвязные списки*/}
      {/*    </NavLink>*/}
      {/*  </div>*/}
      {/*  <div className="algorithm">*/}
      {/*    <NavLink to="/stacks-queues">*/}
      {/*      2. Стеки и очереди. Приоритетные очереди.*/}
      {/*    </NavLink>*/}
      {/*  </div>*/}
      {/*  <div className="algorithm">*/}
      {/*    <NavLink to="/sort">*/}
      {/*      3. Метод сортировки.*/}
      {/*    </NavLink>*/}
      {/*  </div>*/}
      {/*  <div className="algorithm">*/}
      {/*    <NavLink to="/tree">*/}
      {/*      4. Бинарное дерево поиска. (Вставка, удаление, обходы, поиск узла)*/}
      {/*    </NavLink>*/}
      {/*  </div>*/}
      {/*  <div className="algorithm">*/}
      {/*    <NavLink to="/pyramids">*/}
      {/*      5. Пирамиды. Пирамидальная сортировка.*/}
      {/*    </NavLink>*/}
      {/*  </div>*/}
      {/*  <div className="algorithm">*/}
      {/*    <NavLink to="/hash">*/}
      {/*      6. Хеш – таблицы.*/}
      {/*    </NavLink>*/}
      {/*  </div>*/}
      {/*  <div className="algorithm">*/}
      {/*    <NavLink to="/set">*/}
      {/*      7. Set.*/}
      {/*    </NavLink>*/}
      {/*  </div>*/}
      {/*  <div className="algorithm">*/}
      {/*    <NavLink to="/map">*/}
      {/*      8. Map.*/}
      {/*    </NavLink>*/}
      {/*  </div>*/}
      {/*  <div className="algorithm">*/}
      {/*    <NavLink to="/graph">*/}
      {/*      9. Graph.*/}
      {/*    </NavLink>*/}
      {/*  </div>*/}
      {/*</div>*/}

    </div>
  )
}

export default Home
