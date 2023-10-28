import React, { useEffect, useState } from 'react'
import './Admin.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getProduct } from '../../redux/action/productAction'
import Edit_product from './Edit_product';
import Add_product from './Add_product';
import Product_details from './Product_details';



function Admin() {

  const dispatch = useDispatch()


  useEffect(()=>{
      dispatch(getProduct())
      },[dispatch])


      const info = useSelector((state)=>state.productReducer.product)

  return (
  <div>  
    <h1>ADMIN</h1>
    <Add_product product={info} />
    <table className='ProductTable'>
  <tr>
    <th >Product id</th>
    <th >Product name</th>
    <th >Détails produit</th>
    <th >Supprimer</th>
    <th >Modifier</th>
  </tr>
  {info.map((product) =>
  <tr>
    <td>{product._id}</td>
    <td>{product.name}</td>
    <td>
    <Product_details product={product} />
    </td>
    <td>
      <button onClick={()=> dispatch(deleteProduct(product._id))} className='btndlt'>Supprimer</button>
    </td>
    <td><Edit_product product={product}/></td>
  </tr>)}

</table>
  </div>
      
  )
}

export default Admin