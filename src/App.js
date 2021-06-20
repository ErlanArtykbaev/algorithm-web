import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/scss/style.scss";
const Course = React.lazy( () => import("./components/pages/Course"))

const Home = React.lazy(() => import('./components/pages/Home'))

function App() {
  return (
    <div className="app">
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/course' component={Course} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

const NotFound = () => {
  return <div>not found 404!</div>;
};

export default App;
