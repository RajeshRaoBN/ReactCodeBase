import React from 'react'
import Product from './Product'
import productsData from '../data/productsData'

function Products() {
    const productComponent = productsData.map(product => <Product key={product.id} name={product.name} description={product.description} price={product.price} />)
  return (
    <div>
        <h3>Product List</h3>
        {productComponent}
    </div>
  )
}

export default Products