import React from 'react'
import ProductCard from '../Homme/ProductCard'

export default function ProductListFemme({data}) {
  return (
    <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', marginTop:'125px'}}>
      {data.filter((product) => product.gender === "femme").map((product) => <ProductCard key={product._id} product={product} />)}
    </div>
  )
}
