import React, { useEffect } from 'react'
import './Panier.css'
import { useDispatch, useSelector } from 'react-redux';
import { delItem } from '../../redux/action/cartAction';
import { FaTrashCan } from 'react-icons/fa6'
import axios from 'axios';
import { CiCreditCard2 } from 'react-icons/ci'


export default function Panier({ count }) {

  
    const products = useSelector((state) => state.addItems) || [];

    const dispatch = useDispatch();

    const checkout=()=>{
      try {
         axios.post(`http://localhost:7000/create-checkout-session`,{products}).then((res)=>{
        console.log(res)
        if(res.data.url){
          window.location.href=res.data.url
        }
      })
      } catch (error) {
        console.log(error)
      }
    }


    console.log(products)

    useEffect(() => {
   
    }, [products,dispatch]);

    var totale=0

    
    return (
      <div className="cart-container">
        <h1 className="cart-title">Panier</h1>
        <table className="cart-table" style={{width:'100%'}}>
          <thead>
            <tr>
              <th className="produit-column">Produit</th>
              <th>Nom</th>
              <th>Prix</th>
              <th>Qte</th>
              <th>Soustotale</th>
              <th>Rejeter</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) =>{
              
              
              totale = totale + product.count*product.product.price;
              
            return (
              <tr key={product.product._id}>
                <td>
                  <img src={product.product.image} alt={product.product.name} className="product-image" />
                </td>
                <td>{product.product.name}</td>
                <td>
                  {product.product.price} 
                </td>
                <td>
                  {product.count}{' '}
                </td>
                <td>
                  {product.count * product.product.price} 
                </td>
                <td>
                  <button
                    style={{ background: 'none', border: 'none' }}
                    onClick={() => dispatch(delItem(product.product._id))}
                  >
                    <FaTrashCan style={{ fontSize: '35px', color: 'rgb(255, 90, 90)'}} />
                  </button>
                </td>
              </tr>
            )})}
          </tbody>
        </table>

        <div className="cart-total">
         <p style={{backgroundColor: 'transparent', fontWeight: '600'}}> Totale : <span>{totale}</span></p> 
          <button className='cartbtn' onClick={checkout}>Continuer
          <CiCreditCard2 className='CiCreditCard2'/>
          </button>{' '}
        </div>
      </div>
    );
  }
   
