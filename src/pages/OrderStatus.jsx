import React from 'react';

const OrderStatus = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">订单状态</h1>
      <p>已完成支付</p>
      <p>正在等商家发货</p>
    </div>
  );
};

export default OrderStatus;