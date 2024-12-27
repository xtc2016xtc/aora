import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './man/Main';
import Checkout from './pages/Checkout';
import OrderStatus from './pages/OrderStatus';
import Navbar from './components/Navbar';
import News from './pages/News';

const App = () => {
  return (
    <Router>
      <div className="w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-status" element={<OrderStatus />} />
          <Route path="/news" element={<News />} />
          {/* 添加其他路由 */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;