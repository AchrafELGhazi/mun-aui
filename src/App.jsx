import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Apply from './pages/Apply';
import Footer from './components/Footer';
import Join from './pages/Join';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply' element={<Apply />} />
        <Route path='/join' element={<Join />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
