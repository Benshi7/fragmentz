import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home';
import SkillsPage from './SkillsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './ContactPage';

function App() {
  return (
    <>
      <Router>
        <Header />
        <br />
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/skills" exact Component={SkillsPage}/>
          <Route path="/contact" exact Component={ContactPage}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;