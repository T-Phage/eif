import logo from './logo.svg';
import './App.css';
import NavComponent from './components/NavComponent';
import FooterComponent from './components/FooterComponent';
import HomePage from './pages/HomePage';
import AboutPage from './pages/About-us';
import Sermons from './pages/Sermons';
import Devotionals from './pages/Devotionals';
import Contact from './pages/Contact-us';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="site-content">
      <NavComponent/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/devotionals" element={<Devotionals />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      <FooterComponent/>
    </div>
  );
}

export default App;
