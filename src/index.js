import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import Prism from "prismjs"
import * as serviceWorker from "./serviceWorker"
import { Suspense } from "react"

ReactDOM.render(
  <Suspense fallback={<div className='title'>loading...</div>}>
    <App />
  </Suspense>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
setTimeout(() => Prism.highlightAll(), 0)
