import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

function Product_details({ product }) {

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }

  return (
    <>
     <button variant="primary" onClick={handleShow} className='btndet'>
        Détails
      </button>

      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Détails produit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p style={{fontSize:30}}>Nom: {product.name}</p>
        <p style={{fontSize:25}}>Description: {product.description}</p>
        <p style={{fontSize:30}}>Prix: {product.price}</p>
        <p style={{fontSize:25}}>Image: <img src={product.image} alt={product.name} style={{width:'100px', height:'125px'}}/></p>
        <p style={{fontSize:30}}>Category: {product.category}</p>
        <p style={{fontSize:30}}>Sexe: {product.gender}</p>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Product_details
