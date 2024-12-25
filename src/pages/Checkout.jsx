import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    // 模拟支付过程
    setTimeout(() => {
      alert('支付完成');
      navigate('/order-status');
    }, 1000);
  };

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">支付页面</h1>
      <img src="https://via.placeholder.com/150x150.png?text=二维码" alt="支付二维码" className="mx-auto mb-4" />
      <button onClick={handlePayment} className="px-4 py-2 bg-blue-500 text-white">确认支付</button>
    </div>
  );
};

export default Checkout;