import React from 'react'

import ThreeStart from '../../containers/algorythms/Sort/ThreeStart'
import ThreeSortingVisualizer from '../../containers/algorythms/Sort/ThreeSortingVisualizer'


const Sort = () => {
  return(
    <>
    <div className='sort'>
      <div className='content'>
        <ThreeStart />
        <div className="title">Визуализация сортировки</div>
        <ThreeSortingVisualizer />
      </div>
    </div>
    </>
  )
}

export default Sort
