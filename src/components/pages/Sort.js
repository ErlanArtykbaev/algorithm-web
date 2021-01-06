import React from 'react'

import Menu from '../layer/Menu'
import Footer from '../layer/Footer'
import ThreeStart from './Sort/ThreeStart'
import ThreeSortingVisualizer from './Sort/ThreeSortingVisualizer'


const Sort = () => {
  return(
    <>
    <div className='sort'>
      <Menu />
      <div className='content'>
        <ThreeStart />
        <div className="title">Визуализация сортировки</div>
        <ThreeSortingVisualizer />
      </div>
    </div>
    <Footer />       
    </>
  )
}

export default Sort
