import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import SkillsPage from './components/SkillsPage';
import ContactPage from './components/ContactPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StarrySky from './components/StarrySky';

function App() {
  return (
    <>
      <Router>
        <Header />
        <>
        <StarrySky/>
        </>
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