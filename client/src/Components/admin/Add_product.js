import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/action/productAction';

function Add_product({product}) {

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

    const handleSubmit = () => {
        dispatch(addProduct({name, description, price, category, image, gender}))
        handleClose()
    }

  return (
    <>
    <div style={{display:'flex', justifyContent:'space-around', width:'450px', marginTop:'25px',
      marginLeft:'95px', marginBottom:'25px'}}>
    <h6>Ajouter un nouveau produit</h6>
    <button variant="primary" onClick={handleShow} className='btnajout'>
     Ajouter
   </button>
    </div>

   <Modal show={show} onHide={handleClose}>
     <Modal.Header closeButton>
       <Modal.Title>Nouveau produit</Modal.Title>
     </Modal.Header>
     <Modal.Body  style={{backgroundColor: 'rgb(0, 141, 42)'}}>
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
     <Form.Label>prix</Form.Label>
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
     <Modal.Footer style={{backgroundColor: 'rgb(0, 141, 42)'}}>
       <Button className='btnaanul' variant="secondary" onClick={handleClose}>
         Annuler
       </Button>
       <Button className='btnajout' variant="primary" onClick={handleSubmit}>
         Ajouter
       </Button>
     </Modal.Footer>
   </Modal>
 </>
  )
}

export default Add_product
