import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ProductList = ({ products, onAdd, onRemove }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products.map((product) => (
        <div key={product.id} className="p-4 border border-black flex-1 min-w-[200px] max-w-[300px]">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <Zoom>
            <img src={product.image} alt={product.name} className="w-full h-auto" />
          </Zoom>
          <p className="mt-2">{product.description}</p>
          <p className="mt-2">价格: ${product.price}</p>
          <div className="flex items-center mt-2">
            <button onClick={() => onRemove(product.id)} className="px-2 py-1 bg-red-500 text-white">-</button>
            <span className="mx-2">{product.quantity}</span>
            <button onClick={() => onAdd(product.id)} className="px-2 py-1 bg-green-500 text-white">+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;