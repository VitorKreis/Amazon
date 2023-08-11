import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Narbar from './layout/navbar';
// Pages
import Home from './pages/home';
import Login from './Login/login';
import NewAccount from './Login/newAccount';
import About from './pages/about';
import Account from './Login/account';
import NameForms from './form/nameForm';
import EmailForms from './form/emailForm';
import PasswordForms from './form/passwordForms';

function App() {
  return (
    <Router>
      <Narbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newAccount" element={<NewAccount />} />
        <Route path="/about" element={<About />} />
        <Route path="/You" element={<Account />} />
        <Route path="/editName" element={<NameForms />} />
        <Route path="/editEmail" element={<EmailForms />} />
        <Route path="/editPassword" element={<PasswordForms />} />
      </Routes>
    </Router>
  );
}

export default App;
