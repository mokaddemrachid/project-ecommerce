import React from 'react'
import ProductCard from '../Homme/ProductCard'

export default function ProductList({data, search}) {
  console.log(search)
  return (
    <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', marginTop:'125px'}}>
      {console.log(data,'list')}
      
      {data.filter(product =>product.name.toUpperCase().includes(search.toUpperCase())).map((product) => <ProductCard key={product._id} product={product} />)}
    </div>
    
  )
}
