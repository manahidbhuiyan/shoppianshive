// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../src/pages/HomePage.jsx';
import AboutPage from '../src/pages/HomePage.jsx'; // Example page
import Header from '../src/components/Navbar.jsx'; // Optional: If you have a Header component
// import Footer from '../src/components/Footer_1.jsx'; // Optional: If you have a Footer component

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
    </Router>
  );
}

export default App;
