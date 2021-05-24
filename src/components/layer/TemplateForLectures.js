import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Sidebar from "../../containers/Sidebar"

import Tree from "../pages/Tree"
import Lists from "../pages/Lists"
import Queues from "../pages/Queues"
import Sort from "../pages/Sort"
import Pyramids from "../pages/Pyramids"
import Hash from "../pages/Hash"
import Set from "../pages/Set"
import Map from "../pages/Map"
import Graph from "../pages/Graph"

const TemplateForLectures = (props) => {
  return (
    <div className='template'>
      <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route path='/lectures/lists' component={Lists} exact />
          <Route path='/lectures/stacks-queues' component={Queues} />
          <Route path='/lectures/sort' component={Sort} exact />
          <Route path='/lectures/tree' component={Tree} />
          <Route path='/lectures/pyramids' component={Pyramids} />
          <Route path='/lectures/hash' component={Hash} />
          <Route path='/lectures/set' component={Set} />
          <Route path='/lectures/map' component={Map} />
          <Route path='/lectures/graph' component={Graph} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default TemplateForLectures
