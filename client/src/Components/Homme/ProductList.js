import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList({data}) {
  return (
    <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', marginTop:'125px'}}>
      {console.log(data,'list')}
      {data.filter((product) => product.gender === "homme").map((product) => <ProductCard key={product._id} product={product} />)}
    </div>
  )
}
