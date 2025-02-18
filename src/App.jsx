import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Apply from './pages/Apply';
import Join from './pages/Join';
import AboutPage from './pages/AboutPage';
import EventDetails from './pages/EventDetails';
import AUIMUN12thEdition from './pages/AUIMUN12thEdition';


// Lazy load the pages
// const Home = lazy(() => import('./pages/Home'));
// const Apply = lazy(() => import('./pages/Apply'));
// const Join = lazy(() => import('./pages/Join'));

const App = () => {
  return (
    <Router>
      <Header />
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply' element={<Apply />} />
        <Route path='/join' element={<Join />} />
        <Route path='/AboutPage' element={<AboutPage />} />
        <Route path='/EventDetails/:id' element={<EventDetails />} />
        <Route path='/auimun-12th-edition' element={<AUIMUN12thEdition />} />
      </Routes>
      {/* </Suspense> */}
      <Footer />
    </Router>
  );
};

export default App;
