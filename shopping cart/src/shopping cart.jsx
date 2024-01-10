import React, { useState } from 'react';

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemPrice, setItemPrice] = useState(0);

  const handleNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setItemQuantity(e.target.value);
  };

  const handlePriceChange = (e) => {
    setItemPrice(e.target.value);
  };

  const handleAddToCart = () => {
    if (itemName && itemQuantity > 0 && itemPrice > 0) {
      const newItem = {
        name: itemName,
        quantity: parseInt(itemQuantity),
        price: parseFloat(itemPrice),
      };

      setItems([...items, newItem]);
      // Reset form fields
      setItemName('');
      setItemQuantity(1);
      setItemPrice(0);
    } else {
      alert('Please fill in all fields with valid values.');
    }
  };

  const handleRemoveFromCart = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      <form>
        <label>
          Name:
          <input type="text" value={itemName} onChange={handleNameChange} />
        </label>
        
        <label>
          Quantity:
          <input type="number" value={itemQuantity} onChange={handleQuantityChange} />
        </label>
        <label>
          Price:
          <input type="number" value={itemPrice} onChange={handlePriceChange} />
        </label><br></br>
        <br></br>
        <button type="button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </form>

      <div>
        <h2>Checkout</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.quantity * item.price}</td>
                <td>
                  <button type="button" onClick={() => handleRemoveFromCart(index)}>
                    remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total Price: {calculateTotalPrice()}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;