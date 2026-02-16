import React, { useState } from 'react';
import { popularRecipe } from '../components/PopularRecipe/PopularRecipe';

export default function Cart() {
  const [cartItems, setCartItems] = useState(
    popularRecipe.slice(0, 4).map((item) => ({
      id: item.id,
      name: item.name,
      price: parseFloat(String(item.price).replace('$', '')),
      quantity: 1,
      image: item.img,
    }))
  );

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeItem(id);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
            <a href="/" className="text-green-500 hover:text-green-600 font-semibold">
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {cartItems.map(item => (
                  <div key={item.id} className="p-6 border-b border-gray-200 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-full" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-green-500 font-semibold">${item.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="w-16 px-2 py-1 border border-gray-300 rounded"
                      />
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-600 font-semibold"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 h-fit">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">$5.00</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="text-xl font-bold text-green-500">${(totalPrice + 5).toFixed(2)}</span>
                </div>
              </div>
              <a href="/checkout" className="btn-primary w-full text-center block">
                Proceed to Checkout
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
