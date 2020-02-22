import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import Home from './components/Home'
import One from './components/pages/One'
import Two from './components/pages/Two'
import Three from './components/pages/Three'
import Four from './components/pages/Four'
import Five from './components/pages/Five'
import Six from './components/pages/Six'
import Seven from './components/pages/Seven'
import Eight from './components/pages/Eight'
import Nine from './components/pages/Nine'


import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/' component={Home} exact />
          
          <Route path='/one' component={One} />
          <Route path='/two' component={Two} />
          <Route path='/three' component={Three} />
          <Route path='/four' component={Four} />
          <Route path='/five' component={Five} />
          <Route path='/six' component={Six} />
          <Route path='/seven' component={Seven} />
          <Route path='/eight' component={Eight} />
          <Route path='/nine' component={Nine} />

        
        </Switch>
      </div>
    </BrowserRouter>
    
  )
}

export default App
