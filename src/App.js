import React from 'react';
import ReactDOM from "react-dom/client";
import Navbar from './components/Navbar';
import About from './components/Profil/About';
import Contact from './components/Profil/Contact';
import Project from './components/Project';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
