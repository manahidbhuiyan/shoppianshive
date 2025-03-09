// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import ServicesPage from '../pages/ServicesPage.jsx'; // Make sure this is imported
import PortfolioPage from '../pages/PortfolioPage.jsx'; // Make sure this is imported
import AboutPage from '../pages/AboutPage.jsx'; // Fixed import (was pointing to HomePage)
import ContactPage from '../pages/ContactPage.jsx';

import Header from '../components/Navbar.jsx';
// import Footer from '../components/Footer.jsx'; // Uncomment if you have a Footer component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {/* {Footer && <Footer />} */}
    </Router>
  );
}

export default App;