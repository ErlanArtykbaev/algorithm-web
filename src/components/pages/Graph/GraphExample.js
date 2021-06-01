import React from "react"
import App from "../../../containers/algorythms/PathFinding/pathFinding"
import PathfindingVisualizer from "../../../containers/algorythms/PathFinding/Pathfinding-Visualizer-Tutorial/PathfindingVisualizer/PathfindingVisualizer"

const GraphExample = () => {
  return (
    <div className='container'>
      <h3 className='title'>Here examples how graph algorithms work</h3>
      <App />
      <div className='divider'></div>
      <h3 className='sub-title'>Another example</h3>
      <PathfindingVisualizer />
    </div>
  )
}

export default GraphExample
