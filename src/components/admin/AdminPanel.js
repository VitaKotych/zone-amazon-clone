import React, { useState, useEffect } from 'react';
import { Divider, Button, TextField } from '@mui/material';
import './AdminPanel.css';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
  });

  const getProducts = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data.products);
  };

  const addProduct = async () => {
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
      
    });

    if (res.status === 201) {
      getProducts();
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>

      <div className="product-form">
        <TextField
          label="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <TextField
          label="Product Price"
          type="number"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <Button variant="contained" onClick={addProduct}>
          Add Product
        </Button>
      </div>

      <Divider />

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <p>{product.name}</p>
            <p>${product.price}.00</p>
            {/* Add more product details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
