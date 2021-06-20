import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Header from "./components/layer/Header"
const GraphAlgorithms = React.lazy(() =>
  import("./Graph/GraphAlgorithms")
);
const WhatIsSort = React.lazy(() =>
  import("./Sort/WhatIsSort")
);
const SortingVisualizer = React.lazy(() =>
  import("./Sort/SortingVisualizer")
);
const ListExample = React.lazy(() =>
  import("./Lists/ListExample")
);
const TreeExample = React.lazy(() =>
  import("./Tree/TreeExample")
);
const WhatIsBigO = React.lazy(() =>
  import("./BigO/WhatIsBigO")
);
const GraphExample = React.lazy(() =>
  import("./Graph/GraphExample")
);
const WhatIsGraph = React.lazy(() =>
  import("./Graph/WhatIsGraph")
);
const WhatIsHashTable = React.lazy(() =>
  import("./Hash/WhatIsHashTable")
);
const DoublyList = React.lazy(() =>
  import("./Lists/DoubleList")
);
const SinglyList = React.lazy(() =>
  import("./Lists/SinglyList")
);
const WhatIsList = React.lazy(() =>
  import("./Lists/WhatIsList")
);
const PriorityQueue = React.lazy(() =>
  import("./Queues/PriorityQueue")
);
const Queues = React.lazy(() => import("./Queues/Queues"));
const WhatIsStack = React.lazy(() =>
  import("./Queues/WhatIsStack")
);
const DeleteTree = React.lazy(() =>
  import("./Tree/DeleteTree")
);
const InsertTree = React.lazy(() =>
  import("./Tree/InsertTree")
);
const WhatIsBinaryTree = React.lazy(() =>
  import("./Tree/WhatIsBinaryTree")
);
const Sidebar = React.lazy(() => import("../../containers/Sidebar"));

const Course = (props) => {
  return(
    <Router>
      {/* <Header /> */}
      <Sidebar />
      <Switch>
        <Route path="/course/1/lists/what-is-list" component={WhatIsList} exact />
        <Route path="/course/1/lists/singly" component={SinglyList} />
        <Route path="/course/1/lists/doubly" component={DoublyList} />
        <Route path="/course/1/lists/visual" component={ListExample} />
        <Route path="/course/1/queues/stecks" component={WhatIsStack} />
        <Route path="/course/1/queues/queues" component={Queues} />
        <Route path="/course/1/queues/priority" component={PriorityQueue} />
        <Route path="/course/1/queues/visualization" component={SinglyList} />
        <Route path="/course/1/o/what-is-o" component={WhatIsBigO} />
        <Route path="/course/1/o/example" component={SinglyList} />
        <Route path="/course/1/binary/what-is-tree" component={WhatIsBinaryTree} />
        <Route path="/course/1/binary/add-element" component={InsertTree} />
        <Route path="/course/1/sort/sort-visual" component={SortingVisualizer} />
        <Route path="/course/1/sort/what-is-sort" component={WhatIsSort} />
        <Route path="/course/1/binary/delete-element" component={DeleteTree} />
        <Route path="/course/1/binary/vizual" component={TreeExample} />
        <Route path="/course/1/hash/what-is-hash" component={WhatIsHashTable} />
        <Route path="/course/1/hash/example" component={SinglyList} />
        <Route path="/course/1/graph/what-is-graph" component={WhatIsGraph} />
        <Route path="/course/1/graph/algorithm" component={GraphAlgorithms} />
        <Route path="/course/1/graph/example" component={GraphExample} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  )
}

export default Course