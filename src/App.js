import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// import Home from "./components/pages/Home"

import "./assets/scss/style.scss"
// import Header from "./components/layer/Header"
import Footer from "./components/layer/Footer"
import WhatIsGraph from "./components/pages/Graph/WhatIsGraph"
import WhatisHashTable from "./components/pages/Hash/WhatIsHashTable"
import DoublyList from "./components/pages/Lists/DoubleList"
import SinglyList from "./components/pages/Lists/SinglyList"
import WhatIsList from "./components/pages/Lists/WhatIsList"
import PriorityQueue from "./components/pages/Queues/PriorityQueue"
import Queues from "./components/pages/Queues/Queues"
import WhatIsStack from "./components/pages/Queues/WhatIsStack"
import DeleteTree from "./components/pages/Tree/DeleteTree"
import InsertTree from "./components/pages/Tree/InsertTree"
import WhatIsBinaryTree from "./components/pages/Tree/WhatIsBinaryTree"
import Sider from "./containers/Sidebar"

function App() {
  return (
    <div className='app'>
      <Router>
        {/* <Header /> */}
        <Sider />
        <Switch>
          {/* <Route path='/' exact component={TemplateForLectures} exact /> */}
          <Route path='/lists/what-is-list' component={WhatIsList} exact />
          <Route path='/lists/singly' component={SinglyList} />
          <Route path='/lists/doubly' component={DoublyList} />
          <Route path='/lists/visaul' component={SinglyList} />
          <Route path='/queues/stecks' component={WhatIsStack} />
          <Route path='/queues/queues' component={Queues} />
          <Route path='/queues/priority' component={PriorityQueue} />
          <Route path='/queues/visualization' component={SinglyList} />
          <Route path='/o/what-is-o' component={SinglyList} />
          <Route path='/o/example' component={SinglyList} />
          <Route path='/binary/what-is-tree' component={WhatIsBinaryTree} />
          <Route path='/binary/add-element' component={InsertTree} />
          <Route path='/binary/delete-element' component={DeleteTree} />
          <Route path='/binary/vizual' component={SinglyList} />
          <Route path='/pyramids/what-is-pyramids' component={SinglyList} />
          <Route path='/pyramids/sort' component={SinglyList} />
          <Route path='/pyramids/vizual' component={SinglyList} />
          <Route path='/hash/what-is-hash' component={WhatisHashTable} />
          <Route path='/hash/example' component={SinglyList} />
          <Route path='/graph/what-is-graph' component={WhatIsGraph} />
          <Route path='/graph/algorithm' component={SinglyList} />
          <Route path='/graph/example' component={SinglyList} />
          <Route component={NotFound} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  )
}

const NotFound = () => {
  return <div>not found 404!</div>
}

export default App
