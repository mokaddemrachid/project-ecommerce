import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Nouv.css'


export default function Nouv() {
  return (
    <>
    <div className='container'>
    <Carousel>
        <img className='imagecar' src='https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'></img> 
    </Carousel>
    </div>
    <div className='secondiv'>
        <p id='prag'>découvrez notre nouvelle collection ne ratez pas l'occasion</p>
        <h1 id='title'>NOUVELLES COLLECTION.</h1>
        <button className='nouvbtn'>Acheter</button>
    </div>
    <h5 id='artitle'>Plus d'articles</h5>
    <div className='divimg'>   
        <img className='imgn' src='https://i.pinimg.com/564x/65/12/e1/6512e16e6accc56797fabe711282337f.jpg'></img>
        <img className='imgn' src='https://i.pinimg.com/564x/27/cd/8d/27cd8dc44d313fffad76a5a86924c059.jpg'></img>
        <img className='imgn' src='https://i.pinimg.com/564x/2a/3d/db/2a3ddb5a7435ebfebee2b8b4acd69098.jpg'></img>
    
    </div>
    </>
  )
}


