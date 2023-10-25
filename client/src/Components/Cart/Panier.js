import React, { useEffect } from 'react'
import './Panier.css'
import { useDispatch, useSelector } from 'react-redux';
import { delItem } from '../../redux/action/cartAction';
import { useNavigate } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai'
import Button from 'react-bootstrap/Button';


export default function Panier({ count }) {

  
    const products = useSelector((state) => state.addItems) || [];

    const dispatch = useDispatch();

    const navigate = useNavigate();

    console.log(products)

    useEffect(() => {
   
    }, [products,dispatch]);

    var totale=0
    var totalPrice=0

    const handleClose = (item) => {
      dispatch(delItem(item));
    };
    
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
                    onClick={() => dispatch(delItem(product._id))}
                  >
                    <AiOutlineDelete style={{ fontSize: '20px', color: 'blue' }} />
                  </button>
                </td>
              </tr>
            )})}
          </tbody>
        </table>
  
        <div className="cart-total">
          Prix Totale: {totale}
        </div>
        <button>Continuer</button>
      </div>
    );
  }
   
