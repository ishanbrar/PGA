import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ContentProvider } from './contexts/ContentContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Board from './pages/Board';
import Events from './pages/Events';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Members from './pages/Members';
import Admin from './pages/Admin';

const App: React.FC = () => {
  return (
    <ContentProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/board" element={<Board />} />
              <Route path="/events" element={<Events />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/members" element={<Members />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </ContentProvider>
  );
};

export default App;
