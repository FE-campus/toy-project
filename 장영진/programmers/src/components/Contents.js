import React from 'react'
import Dashboard from './Dashboard'
import Carousel from './Carousel'
import Lecture from './Lecture'
import Incruit from './Incruit'
import Position from './Position'
import MyPosition from './MyPosition'

function Contents(props) {


  return (
    <div className='contents' style={{ marginBottom: 72 }}>
      <Dashboard userName={props.userName} />
      <Carousel />
      <Lecture />
      <Incruit />
      <Position />
      <MyPosition />
    </div>
  )
}

export default Contents