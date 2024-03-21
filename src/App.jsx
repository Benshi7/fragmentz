import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import SkillsPage from './components/SkillsPage';
import ContactPage from './components/ContactPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StarrySky from './components/StarrySky';
import ProjectPage from './components/ProjectPage';
import About from './components/About';

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
          <Route path='/about' exact Component={About}/>
          <Route path="/skills" exact Component={SkillsPage}/>
          <Route path="/contact" exact Component={ContactPage}/>
          <Route path="/projects" exact Component={ProjectPage}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;