import React from 'react'

import Menu from '../Menu'
import Footer from '../Footer'
import ThreeStart from './ThreeComponents/ThreeStart'
import ThreeSortingVisualizer from './ThreeComponents/ThreeSortingVisualizer'

import '../../css/Three.css'

const Three = () => {
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

export default Three