import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// import Home from "./components/pages/Home"

import "./assets/scss/style.scss"
// import Header from "./components/layer/Header"
import Footer from "./components/layer/Footer"
import DoublyList from "./components/pages/Lists/DoubleList"
import SinglyList from "./components/pages/Lists/SinglyList"
import WhatIsList from "./components/pages/Lists/WhatIsList"
import WhatIsStack from "./components/pages/Queues/WhatIsStack"
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
          <Route path='/queues/priority' component={SinglyList} />
          <Route path='/queues/visualization' component={SinglyList} />
          <Route path='/o/what-is-o' component={SinglyList} />
          <Route path='/o/example' component={SinglyList} />
          <Route path='/binary/what-is-tree' component={SinglyList} />
          <Route path='/binary/binary-tree' component={SinglyList} />
          <Route path='/binary/add-element' component={SinglyList} />
          <Route path='/binary/delete-element' component={SinglyList} />
          <Route path='/binary/obhod' component={SinglyList} />
          <Route path='/binary/search' component={SinglyList} />
          <Route path='/binary/vizual' component={SinglyList} />
          <Route path='/pyramids/what-is-pyramids' component={SinglyList} />
          <Route path='/pyramids/sort' component={SinglyList} />
          <Route path='/pyramids/vizual' component={SinglyList} />
          <Route path='/hash/what-is-hash' component={SinglyList} />
          <Route path='/hash/example' component={SinglyList} />
          <Route path='/set/what-is-set' component={SinglyList} />
          <Route path='/set/example' component={SinglyList} />
          <Route path='/map/what-is-map' component={SinglyList} />
          <Route path='/map/example' component={SinglyList} />
          <Route path='/graph/what-is-graph' component={SinglyList} />
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
