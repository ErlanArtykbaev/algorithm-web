import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Home from "./components/pages/Home"

import "./assets/scss/style.scss";

// import Header from "./components/layer/Header"
const GraphAlgorithms = React.lazy(() =>
  import("./components/pages/Graph/GraphAlgorithms")
);
const WhatIsSort = React.lazy(() =>
  import("./components/pages/Sort/WhatIsSort")
);
const SortingVisualizer = React.lazy(() =>
  import("./components/pages/Sort/SortingVisualizer")
);
const ListExample = React.lazy(() =>
  import("./components/pages/Lists/ListExample")
);
const TreeExample = React.lazy(() =>
  import("./components/pages/Tree/TreeExample")
);
const WhatIsBigO = React.lazy(() =>
  import("./components/pages/BigO/WhatIsBigO")
);
const GraphExample = React.lazy(() =>
  import("./components/pages/Graph/GraphExample")
);
const WhatIsGraph = React.lazy(() =>
  import("./components/pages/Graph/WhatIsGraph")
);
const WhatisHashTable = React.lazy(() =>
  import("./components/pages/Hash/WhatIsHashTable")
);
const DoublyList = React.lazy(() =>
  import("./components/pages/Lists/DoubleList")
);
const SinglyList = React.lazy(() =>
  import("./components/pages/Lists/SinglyList")
);
const WhatIsList = React.lazy(() =>
  import("./components/pages/Lists/WhatIsList")
);
const PriorityQueue = React.lazy(() =>
  import("./components/pages/Queues/PriorityQueue")
);
const Queues = React.lazy(() => import("./components/pages/Queues/Queues"));
const WhatIsStack = React.lazy(() =>
  import("./components/pages/Queues/WhatIsStack")
);
const DeleteTree = React.lazy(() =>
  import("./components/pages/Tree/DeleteTree")
);
const InsertTree = React.lazy(() =>
  import("./components/pages/Tree/InsertTree")
);
const WhatIsBinaryTree = React.lazy(() =>
  import("./components/pages/Tree/WhatIsBinaryTree")
);
const Sider = React.lazy(() => import("./containers/Sidebar"));

function App() {
  return (
    <div className="app">
      <Router>
        {/* <Header /> */}
        <Sider />
        <Switch>
          {/* <Route path='/' exact component={TemplateForLectures} exact /> */}
          <Route path="/lists/what-is-list" component={WhatIsList} exact />
          <Route path="/lists/singly" component={SinglyList} />
          <Route path="/lists/doubly" component={DoublyList} />
          <Route path="/lists/visual" component={ListExample} />
          <Route path="/queues/stecks" component={WhatIsStack} />
          <Route path="/queues/queues" component={Queues} />
          <Route path="/queues/priority" component={PriorityQueue} />
          <Route path="/queues/visualization" component={SinglyList} />
          <Route path="/o/what-is-o" component={WhatIsBigO} />
          <Route path="/o/example" component={SinglyList} />
          <Route path="/binary/what-is-tree" component={WhatIsBinaryTree} />
          <Route path="/binary/add-element" component={InsertTree} />
          <Route path="/sort/sort-visual" component={SortingVisualizer} />
          <Route path="/sort/what-is-sort" component={WhatIsSort} />
          <Route path="/binary/delete-element" component={DeleteTree} />
          <Route path="/binary/vizual" component={TreeExample} />
          <Route path="/hash/what-is-hash" component={WhatisHashTable} />
          <Route path="/hash/example" component={SinglyList} />
          <Route path="/graph/what-is-graph" component={WhatIsGraph} />
          <Route path="/graph/algorithm" component={GraphAlgorithms} />
          <Route path="/graph/example" component={GraphExample} />
          <Route component={NotFound} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

const NotFound = () => {
  return <div>not found 404!</div>;
};

export default App;
