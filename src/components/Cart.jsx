import React from 'react';

const Cart = ({ total, onCheckout }) => {
  return (
    <div className="p-4 border border-black w-full md:w-1/3 lg:w-1/4 mx-auto">
      <h2 className="text-xl font-bold">购物车</h2>
      <p>总价: ${total}</p>
      <button onClick={onCheckout} className="px-4 py-2 bg-blue-500 text-white">支付</button>
    </div>
  );
};

export default Cart;