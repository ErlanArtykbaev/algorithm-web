import React from 'react'

import Menu from '../layer/Menu'
import Footer from '../layer/Footer'
import ThreeStart from './ThreeComponents/ThreeStart'
import ThreeSortingVisualizer from './ThreeComponents/ThreeSortingVisualizer'


const Sort = () => {
  return(
    <div>
      <Menu />
      <div>
        <ThreeStart />
        <div className="title">Визуализация сортировки</div>
        <ThreeSortingVisualizer />
        
      </div>
       
      <Footer />       
    </div>
  )
}

export default Sort