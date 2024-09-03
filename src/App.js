import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyle from './styles/GlobalStyle';
import ArticlesPage from './pages/ArticlesPage';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:cityName" element={<Home />} />
        <Route path="/brand/:brandName" element={<Home />} />
        <Route path="/district/:districtName" element={<Home />} />
        <Route path="/type/:typeName" element={<Home />} />
        <Route path="/articles" element={<ArticlesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
