import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Narbar from './layout/navbar';
// Pages
import Home from './pages/home';
import Login from './pages/login';
import NewAccount from './pages/NewAccount';

function App() {
  return (
    <Router>
      <Narbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newAccount" element={<NewAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
