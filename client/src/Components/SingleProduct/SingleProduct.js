import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { getProduct } from '../../redux/action/productAction'
import './SingleProduct.css'
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { addItem, delItem } from '../../redux/action/cartAction'



export default function SingleProduct({data}) {

    const { id } = useParams()

    const dispatch = useDispatch()
    
    const [count, setCount] = useState(1);

    const [totalPrice, setTotalPrice] = useState(0);

    const [showOverlay, setShowOverlay] = useState(false);
    const [target, setTarget] = useState(null);
    
    console.log(id)

    useEffect(() =>{
      dispatch(getProduct())
    },[])

    const info = useSelector((state)=>state.productReducer.product)
    console.log(info)
    
    const singleProduct = info.find((product) => product._id === id)
    console.log(singleProduct)

    const handleIncrement = () => {
      if (count < 10)
      setCount(count + 1);
      if (count >= 9) {
        setShowOverlay(true);
      }
    };

    const handleDecrement = () => {
      if (count > 0)
      setCount(count - 1);
        setShowOverlay(false);
    };
    
    const addToCart = () => {
      dispatch(addItem(singleProduct,count))
    };

    useEffect(() => {
      const totale = singleProduct ? singleProduct.price : 0;
      setTotalPrice(totale * count);
    }, [count, singleProduct]);

  return (
     
      
      <main className="container">
  {/* Left Column */}
  <div className="left-column">
    <img data-image="black" src={singleProduct?.image} alt="" />
    <img data-image="blue" src={singleProduct?.image} alt="" />
    <img data-image="red" className="active" src={singleProduct?.image} alt="" />
  </div>
  {/* Right Column */}
  <div className="right-column">
    {/* Product Description */}
    <div className="product-description">
      <span>{singleProduct?.category}</span>
      <h1>{singleProduct?.name}</h1>
      <p>
          {singleProduct?.description}
      </p>
    </div>

      {/* Product Color */}
      <div className="product-color">
        <span>Color</span>
        <div className="color-choose">
          <div>
            <input
              data-image="red"
              type="radio"
              id="red"
              name="color"
              defaultValue="red"
              defaultChecked=""
            />
            <label htmlFor="red">
              <span />
            </label>
          </div>
          <div>
            <input
              data-image="blue"
              type="radio"
              id="blue"
              name="color"
              defaultValue="blue"
            />
            <label htmlFor="blue">
              <span />
            </label>
          </div>
          <div>
            <input
              data-image="black"
              type="radio"
              id="black"
              name="color"
              defaultValue="black"
            />
            <label htmlFor="black">
              <span />
            </label>
          </div>
        </div>
        <div className='quantity-btns'>

          <button className="btn-plus" onClick={handleIncrement} ref={(ref) => setTarget(ref)}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
            <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z">
            </path>
          </svg>
          </button>
          <span className="count">{count}</span>
          <button className="btn-minus" onClick={handleDecrement}>
          <img width="25" height="25" src="https://img.icons8.com/ios/50/minus.png" alt="minus"/>
          </button>
          <Overlay target={target} show={showOverlay} placement="left">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              10 articles maximum!
            </Tooltip>
          )}
        </Overlay>
        </div>
      </div>
  
    
    {/* Product Pricing */}
    <div className="product-price">
      {(count <= 1)?
      <span>{singleProduct?.price} DT</span>
      :<span>{totalPrice.toFixed(2)} DT</span>}
      <NavLink to={'/panier'}><button className="cart-btn" onClick={addToCart}>
      Ajout au panier
        </button>{' '}
        </NavLink>
      
      
      <button className='achat-btn'>Acheter</button>
    </div>
  </div>
</main>

    
  )
}
