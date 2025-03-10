// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../src/pages/HomePage.jsx';
import ServicesPage from '../src/pages/ServicesPage.jsx';
import PortfolioPage from '../src/pages/PortfolioPage.jsx';
import AboutUsPage from '../src/pages/AboutUsPage.jsx';
import ContactPage from '../src/pages/ContactPage.jsx';
import Header from '../src/components/Navbar.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
