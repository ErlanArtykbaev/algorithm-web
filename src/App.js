import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './components/pages/Home'

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
          <Route path='/' exact component={Home} exact />
          <Route path='/lectures' component={TemplateForLectures} exact />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

const NotFound = () => {
  return(
    <div>
      not found 404!
    </div>
  )
}

export default App
