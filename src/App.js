import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyle from './styles/GlobalStyle';
import ArticlesPage from './pages/ArticlesPage';
import SitemapPage from './pages/SitemapPage';
import BrandPage from './pages/BrandPage';
import AreasPage from './pages/AreasPage';
import CityPage from './pages/CityPage';
import DistrictPage from './pages/DistrictPage';
import TypePage from './components/TypePage';

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
        <Route path="/service/:serviceSlug" element={<Home />} />
        <Route path="/karta-saita" element={<SitemapPage />} />
        <Route path="/neispravnosti/" element={<Home />} />
        <Route path="/city" element={<CityPage />} />
        <Route path="/district" element={<DistrictPage />} /> 
        <Route path="/brand" element={<BrandPage />} /> 
        <Route path="/type" element={<TypePage />} /> 
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/" element={<Home />} />   
      </Routes>
    </Router>
  );
};

export default App;