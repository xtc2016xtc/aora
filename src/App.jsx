import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './man/Main';
import Checkout from './pages/Checkout';
import OrderStatus from './pages/OrderStatus';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-status" element={<OrderStatus />} />
      </Routes>
    </Router>
  );
};

export default App;