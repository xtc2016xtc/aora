import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import { useNavigate } from 'react-router-dom';

const initialProducts = [
  { id: 1, name: '商品1', price: 100, quantity: 0, image: 'https://via.placeholder.com/300x400.png', description: '这是商品1的简介' },
  { id: 2, name: '商品2', price: 200, quantity: 0, image: 'https://via.placeholder.com/300x400.png', description: '这是商品2的简介' },
  { id: 3, name: '商品3', price: 300, quantity: 0, image: 'https://via.placeholder.com/300x400.png', description: '这是商品3的简介' },
  { id: 4, name: '商品3', price: 300, quantity: 0, image: 'https://via.placeholder.com/300x400.png', description: '这是商品3的简介' },
];

const Main = () => {
  const [products, setProducts] = useState(initialProducts);
  const navigate = useNavigate();

  const handleAdd = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const handleRemove = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.quantity > 0 ? { ...product, quantity: product.quantity - 1 } : product
      )
    );
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const total = products.reduce((sum, product) => sum + product.price * product.quantity, 0);

  return (
    <div className="p-4">
      <section className="flex flex-col md:flex-row justify-center items-start gap-4">
        <ProductList products={products} onAdd={handleAdd} onRemove={handleRemove} />
        <Cart total={total} onCheckout={handleCheckout} />
      </section>
    </div>
  );
};

export default Main;