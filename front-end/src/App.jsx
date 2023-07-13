import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Narbar from './layout/navbar';
// Pages
import Home from './pages/home';
import Login from './pages/login';
import NewAccount from './pages/NewAccount';
import About from './pages/about';

function App() {
  return (
    <Router>
      <Narbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newAccount" element={<NewAccount />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
