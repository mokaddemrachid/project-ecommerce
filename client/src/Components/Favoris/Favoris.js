import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Favoris() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Load favorites from local storage (if any)
    const favoritesFromLocalStorage = localStorage.getItem('favorites');
    if (favoritesFromLocalStorage) {
      setFavorites(JSON.parse(favoritesFromLocalStorage));
    }
  }, []);

  return (
    <div>
      <h1>My Favorites</h1>
      <div className="favorites-list">
        {favorites.map((favoriteProduct) => (
          <Card key={favoriteProduct._id} style={{ width: '20rem' }}>
            <Link to={`/${favoriteProduct._id}`}>
              <Card.Img variant="top" src={favoriteProduct.image} />
            </Link>
            <Card.Body>
              <Card.Title style={{ textAlign: 'center' }}>{favoriteProduct.name}</Card.Title>
              <Card.Text style={{ textAlign: 'center' }}>{favoriteProduct.description}</Card.Text>
              <Card.Text style={{ textAlign: 'center' }}>
                {favoriteProduct.price} DT
              </Card.Text>
              <button style={{ border: '0' }} onClick={() => removeFavorite(favoriteProduct._id)}>
                Remove from Favorites
              </button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );

  function removeFavorite(productId) {
    // Remove the product from the favorites list
    const updatedFavorites = favorites.filter((product) => product._id !== productId);
    setFavorites(updatedFavorites);

    // Save the updated favorites to local storage
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }
}
