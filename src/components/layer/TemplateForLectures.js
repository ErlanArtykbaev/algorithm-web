import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'

import Sidebar from './Sidebar'

import Tree from '../pages/Tree'

const TemplateForLectures = (props) => {
  return(
    <div>
      <Sidebar />
      <BrowserRouter>
        <Switch>
          <Route path='/a' component={Tree} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default TemplateForLectures
