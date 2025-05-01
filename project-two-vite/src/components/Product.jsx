import React from 'react'

function Product(props) {
  return (
    <div>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <h4>${props.price}</h4>
    </div>
  )
}

export default Product