import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Home from './pages/Home';
import Events from './pages/Events';
import Apply from './pages/Apply';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #ffffff;
    color: #333333;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
