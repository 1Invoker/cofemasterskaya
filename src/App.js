import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyle from './styles/GlobalStyle';
import ArticlesPage from './pages/ArticlesPage';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/city/:cityName" element={<Home />} />
        <Route path="/brand/:brandName" element={<Home />} />
        <Route path="/district/:districtName" element={<Home />} />
        <Route path="/type/:typeName" element={<Home />} />
        <Route path="/neispravnosti/:issueSlug" element={<Home />} />
        <Route path="/?service/:serviceSlug" element={<Home />} />
        <Route path="/neispravnosti/" element={<Home />} />
        <Route path="/city" element={<Home />} />
        <Route path="/district" element={<Home />} /> 
        <Route path="/brand" element={<Home />} /> 
        <Route path="/type" element={<Home />} /> 
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/" element={<Home />} />   
      </Routes>
    </Router>
  );
};

export default App;