import React from 'react'

import img from '../../assets/img/main-image.svg'

const MainHomeInfo = () => {
  return (
    <div className='main-home-info'>
      <div className='main-home-info-text'>
        <h1>Learn to use Algorithms Here</h1>
        <p>
          Learn to use algorithms with my beginner-friendly tutorials and examples.
          Read tutorials, try examples, write programs, and learn to code.
        </p>
        <div className='home-main-btn'>Learn</div>
      </div>
      <div className='main-home-info-photo'>
        <img src={img} alt='main photo' className='main-img'/>
      </div>
    </div>
  )
}

export default MainHomeInfo