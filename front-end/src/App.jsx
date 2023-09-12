import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Navbar from './layout/Navbar';
// Pages
import Home from './pages/Home';
import Login from './login/Login';
import Account from './login/Account';
import EmailForms from './form/emailForm';
import PasswordForms from './form/passwordForms';
import Product from './pages/Product';
import Cart from './pages/cart';
import NewAccount from './login/NewAccount';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newAccount" element={<NewAccount />} />
        <Route path="/about" element={<About />} />
        <Route path="/You" element={<Account />} />
        <Route path="/editEmail" element={<EmailForms />} />
        <Route path="/editPassword" element={<PasswordForms />} />
       <Route path="/Product/:id" element={<Product />} />
       <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
