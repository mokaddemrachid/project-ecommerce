import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../redux/action/productAction'
import ProductListEnfant from './ProductListEnfant'

export default function Enfant() {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProduct())
        },[dispatch])

        const info = useSelector((state)=>state.productReducer.product)

  return (
    <div>
        <ProductListEnfant data={info} />
    </div>
  )
}
