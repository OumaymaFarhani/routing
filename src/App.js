import React from 'react';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Shop from './Pages/Shop';
import ErrorPage from './Pages/ErrorPage';
import {BrowserRouter as Router,Routes,Route , Link} from 'react-router-dom';
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
      </nav>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop/:username" element={<Shop />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
   <footer>GOOD BYE</footer>
    </Router>
  );
}

export default App;
