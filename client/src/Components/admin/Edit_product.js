import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../redux/action/productAction';

function Edit_product({product}) {

    console.log(product)

    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const [name,setname]=useState(product.name)
    const [description,setDescription]=useState(product.description)
    const [price,setPrice]=useState(product.price)
    const [category,setCat]=useState(product.category)
    const [image,setImage]=useState(product.image)
    const [gender,setGender]=useState(product.gender)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleEdit = () => {
        dispatch(updateProduct(product._id, {name, description, price, category, image, gender}))
        handleClose()
    }
  return (
    <>
       <button variant="primary" onClick={handleShow} className='btnmodif'>
        Modifier
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier le produit</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:'rgb(79, 126, 255)'}}>
        <>
      <Form.Group className="mb-3">
        <Form.Label>nom</Form.Label>
        <Form.Control 
         defaultValue={product?.name}
         name="name"
         type="text"
         placeholder="Enter le nom du produit"
         onChange={(e)=>setname(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>description</Form.Label>
        <Form.Control 
        defaultValue={product?.description}
        name="description"
        type="text"
        placeholder="Enter la description du produit"
        onChange={(e)=>setDescription(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>price</Form.Label>
        <Form.Control 
        defaultValue={product?.price}
        name="price"
        type="number"
        placeholder="Enter le price du produit"
        onChange={(e)=>setPrice(e.target.value)}  />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>image</Form.Label>
        <Form.Control 
        defaultValue={product?.image}
        name="image"
        type="text"
        placeholder="Enter limage du produit"
        onChange={(e)=>setImage(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>category</Form.Label>
        <Form.Control 
        defaultValue={product?.category}
        name="category"
        type="text"
        placeholder="Enter la category du produit"
        onChange={(e)=>setCat(e.target.value)}  />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>gender</Form.Label>
        <Form.Control 
        defaultValue={product?.gender}
        name="gender"
        type="text"
        placeholder="sexe"
        onChange={(e)=>setGender(e.target.value)}  />
      </Form.Group>       
    </>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:'rgb(79, 126, 255)'}}>
          <Button className='btnaanul' variant="secondary" onClick={handleClose} style={{marginRight:'135px'}}>
            Annuler
          </Button>
          <Button className='btnsauv' variant="primary" onClick={handleEdit}>
            Sauvegarder
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit_product
