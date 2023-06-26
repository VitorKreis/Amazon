import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Narbar from './layout/navbar';
// Pages
import Home from './pages/home';
import Login from './pages/login';
import NewAccount from './pages/NewAccount';
import About from './pages/about';
import Product from './pages/producuts';

function App() {
  return (
    <Router>
      <Narbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newAccount" element={<NewAccount />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
