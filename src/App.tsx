import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import SDGGoals from './pages/SDGGoals';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import ProjectDetail from './pages/ProjectDetail';
import Media from './pages/Media';
import CovidPandemic from './pages/CovidPandemic';
import Trusty from './pages/Trusty';
import Awards from './pages/Awards';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sdg-goals" element={<SDGGoals />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/media" element={<Media />} />
          <Route path="/covid-pandemic" element={<CovidPandemic />} />
          <Route path="/trusty" element={<Trusty />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;