import React from 'react'

function Catcard(props) {
  return (
    <div className='cat-card'>
        <img src={props.cat.imgUrl} />
        <h3>{props.cat.name}</h3>
        <p>phone: {props.cat.phone}</p>
        <p>Email: {props.cat.email}</p>
    </div>
  )
}

export default Catcard