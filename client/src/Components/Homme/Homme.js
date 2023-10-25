import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductList from './ProductList'
import { getProduct } from '../../redux/action/productAction'
import SingleProduct from '../SingleProduct/SingleProduct';
import { Route, Routes } from 'react-router-dom';



export default function Homme() {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProduct())
        },[dispatch])

        const info = useSelector((state)=>state.productReducer.product)
  return (
    <div>
      
       {<ProductList data={info} />}
       <Routes>
        {info.map((product) => 
          <Route path={`/Homme/:id`} element={<SingleProduct key={product._id} data={product} />} />
        )}
       </Routes>


    </div>
  )
}
