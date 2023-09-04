import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Navbar from './layout/navbar';
// Pages
import Home from './pages/home';
import Login from './Login/login';
import NewAccount from './Login/newAccount';
import About from './pages/about';
import Account from './Login/account';
import EmailForms from './form/emailForm';
import PasswordForms from './form/passwordForms';
import Product from './pages/Product';

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
      </Routes>
    </Router>
  );
}

export default App;
