import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './components/pages/Home'
import Lists from './components/pages/Lists'
import Queues from './components/pages/Queues'
import Sort from './components/pages/Sort'
import Tree from './components/pages/Tree'
import Pyramids from './components/pages/Pyramids'
import Hash from './components/pages/Hash'
import Set from './components/pages/Set'
import Map from './components/pages/Map'
import Graph from './components/pages/Graph'

import './assets/scss/style.scss'
import Header from "./components/layer/Header";
import Footer from "./components/layer/Footer";
import TemplateForLectures from "./components/layer/TemplateForLectures";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/lectures' component={TemplateForLectures} />
          <Route path='/lists' component={Lists} />
          <Route path='/stacks-queues' component={Queues} />
          <Route path='/sort' component={Sort} />
          <Route path='/tree' component={Tree} />
          <Route path='/pyramids' component={Pyramids} />
          <Route path='/hash' component={Hash} />
          <Route path='/set' component={Set} />
          <Route path='/map' component={Map} />
          <Route path='/graph' component={Graph} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
