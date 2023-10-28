import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { TfiHeart } from "react-icons/tfi";
import { Link } from 'react-router-dom'
import { addItem } from '../../redux/action/cartAction';
import { useDispatch } from 'react-redux';


export default function ProductCard({product}) {

  const dispatch = useDispatch()

  const [user, setUser] = useState();

  const [favorites, setFavorites] = useState([]);

  const [isClicked, setIsClicked] = useState(false);
  

  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem('user');
    if (userFromLocalStorage) {
      setUser(JSON.parse(userFromLocalStorage));
    }
        // Load favorites from local storage (if any)
        const favoritesFromLocalStorage = localStorage.getItem('favorites');
        if (favoritesFromLocalStorage) {
          setFavorites(JSON.parse(favoritesFromLocalStorage));
        }
  }, []);

      // Function to add a product to favorites
  const addToFavorites = () => {
    if (user) {
      const updatedFavorites = [...favorites, product];
      setFavorites(updatedFavorites);

      // Save favorites to local storage
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsClicked(true);
      console.log('Product added to favorites:', product);
    }
  };


  return (
    <div>
      {user && user.role==="admin"?  <Card style={{ width: '20rem' }}>
            <Link to={`/${product._id}`}>
              <Card.Img variant="top" src={product.image}/>
            </Link>
            <Card.Body>
                <Card.Title style={{textAlign:'center'}}> {product.name} </Card.Title>
                <Card.Text style={{textAlign:'center'}}>
                    {product.description}
                </Card.Text>
                <Card.Text style={{textAlign:'center'}}>
                    {product.price}
                    <span> DT </span>
                </Card.Text>
            <Button variant="primary">Ajouter</Button>
            <Button variant="primary">remove</Button>
            <button style={{border:'0'}}><TfiHeart   style={{
    color: isClicked ? 'red' : 'gray',
  }}/></button>
            </Card.Body>
    </Card>:
     <Card style={{ width: '20rem' }}>
     <Link to={`/${product._id}`}>
       <Card.Img variant="top" src={product.image}/>
     </Link>
     <Card.Body>
         <Card.Title style={{textAlign:'center'}}> {product.name} </Card.Title>
         <Card.Text style={{textAlign:'center'}}>
             {product.description}
         </Card.Text>
         <Card.Text style={{textAlign:'center', fontWeight: 'bold', fontSize: '1.2em'}}>
             {product.price}
             <span> DT </span>
         </Card.Text>
     <button style={{border:'0'}} onClick={addToFavorites}><TfiHeart   style={{
    fontColor: isClicked ? 'red' : 'gray',
  }}/></button>
     
     </Card.Body>
</Card>}
   
      
    </div>
  )
}
