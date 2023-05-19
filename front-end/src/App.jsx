import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Narbar from './layout/navbar';
// Pages
import Home from './pages/home';
import Login from './pages/login';

function App() {
  return (
    <Router>
      <Narbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
