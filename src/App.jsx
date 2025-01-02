import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load the pages
const Home = lazy(() => import('./pages/Home'));
const Apply = lazy(() => import('./pages/Apply'));
const Join = lazy(() => import('./pages/Join'));

const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/apply' element={<Apply />} />
          <Route path='/join' element={<Join />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
