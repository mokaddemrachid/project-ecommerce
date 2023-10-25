import React from 'react'
import { BsFacebook, BsYoutube, BsInstagram, BsPinterest } from 'react-icons/bs'
import './Footer.css'
export default function Footer() {
  return (
    <>
    <div className='footer-container'>
      <div className='aboutus'>
        <h2>A PROPOS</h2>
        <p>inscrivez vous a notre newsletter</p>
        <ul className='sci'>
            <li><button><BsFacebook /></button></li>
            <li><button><BsInstagram /></button></li>
            <li><button><BsPinterest /></button></li>
            <li><button><BsYoutube /></button></li>
        </ul>
      </div>
      <div className='aide'>
        <h2>AIDE</h2>
        <ul>
            <li><a href='#'>Modes de paiement</a></li>
            <li><a href='#'>Nous contacter</a></li>
            <li><a href='#'>Expédition et livraison</a></li>
            <li><a href='#'>Retours</a></li>
            <li><a href='#'>Actualités</a></li>
        </ul>
      </div>
      <div className='shop'>
        <h2>MAGASIN</h2>
        <ul>
            <li><a href='/Homme'>Hommes</a></li>
            <li><a href='Femme'>Femmes</a></li>
            <li><a href='Enfant'>Enfants</a></li>
            <li><a href='#'>Accesoires</a></li>
        </ul>
      </div>
    </div>
          <div className='copyright'>
          <p>© 2023 Corner, Inc. Tous droits réservés</p>
          </div>
          </>
  )
}
