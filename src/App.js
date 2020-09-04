import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './components/Home'
import Lists from './components/pages/Lists'
import Queues from './components/pages/Queues'
import Sort from './components/pages/Sort'
import Tree from './components/pages/Tree'
import Pyramids from './components/pages/Pyramids'
import Hash from './components/pages/Hash'
import Set from './components/pages/Set'
import Map from './components/pages/Map'
import Graph from './components/pages/Graph'

function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/lists'>
              <Lists />
            </Route>
            <Route path='/stacks-queues'>
              <Queues />
            </Route>
            <Route path='/sort'>
              <Sort />
            </Route>
            <Route path='/tree'>
              <Tree />
            </Route>
            <Route path='/pyramids'>
              <Pyramids />
            </Route>
            <Route path='/hash'>
              <Hash />
            </Route>
            <Route path='/set'>
              <Set />
            </Route>
            <Route path='/map'>
              <Map />
            </Route>
            <Route path='/graph'>
              <Graph />
            </Route>
          </Switch>
      </Router>
    </div>
  )
}

export default App
