import React from "react"

import vid from "../../../assets/img/linkedlist.mp4"

const ListExample = () => {
  return (
    <div className='container'>
      <h3 className='title'>Example of Lists</h3>
      <video controls width='800px'>
        <source src={vid} type='video/mp4' />
      </video>
    </div>
  )
}

export default ListExample
