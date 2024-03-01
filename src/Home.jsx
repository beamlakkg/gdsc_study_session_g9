import React from 'react';
import { Link } from 'react-router-dom';
import {Product} from "./Dummy"

const products = [
  { id: 1, name: 'Laptop', price: 1200, image: 'laptop.jpg' },
  { id: 2, name: 'Smartphone', price: 700, image: 'smartphone.jpg' },
  { id: 3, name: 'Headphones', price: 150, image: 'headphones.jpg' },
  { id: 4, name: 'Coffee Maker', price: 50, image: 'coffeemaker.jpg' },
  { id: 5, name: 'Fitness Tracker', price: 80, image: 'fitnesstracker.jpg' },
];

const Home = () => {
  return (
    <div>
      <h2>Product Listings</h2>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;