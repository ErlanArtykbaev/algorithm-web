import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// import Home from "./components/pages/Home"

import "./assets/scss/style.scss"
// import Header from "./components/layer/Header"
import Footer from "./components/layer/Footer"
import WhatIsList from "./components/pages/Lists/WhatIsList"
import Sider from "./containers/Sidebar"

function App() {
  return (
    <div>
      <Router>
        {/* <Header /> */}
        <Sider />
        <Switch>
          {/* <Route path='/' exact component={TemplateForLectures} exact /> */}
          <Route path='/lists/what-is-list' component={WhatIsList} exact />
          <Route path='/lists/singly' component={WhatIsList} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

const NotFound = () => {
  return <div>not found 404!</div>
}

export default App
