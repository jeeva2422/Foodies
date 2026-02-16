import React, { useState } from 'react';
import { popularRecipe } from '../components/PopularRecipe/PopularRecipe';

export default function Favorite() {
  const [favorites, setFavorites] = useState(
    popularRecipe.map((item) => ({
      id: item.id,
      name: item.name,
      price: parseFloat(String(item.price).replace('$', '')),
      image: item.img,
    }))
  );

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  const addToCart = (item) => {
    // Handle add to cart logic
    console.log('Added to cart:', item);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">My Favorites</h1>

        {favorites.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">No favorite items yet</p>
            <a href="/" className="text-green-500 hover:text-green-600 font-semibold">
              Explore Menu
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg duration-200">
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{item.name}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-green-500 font-bold text-lg">${item.price}</p>
                    <button
                      onClick={() => removeFavorite(item.id)}
                      className="text-red-500 hover:text-red-600 font-semibold text-sm"
                    >
                      Remove
                    </button>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 duration-200"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
