import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../redux/action/productAction'
import ProductListFemme from './ProductListFemme'

export default function Femme() {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProduct())
        },[dispatch])

        const info = useSelector((state)=>state.productReducer.product)

  return (
    <div>
        <ProductListFemme data={info} />
    </div>
  )
}
