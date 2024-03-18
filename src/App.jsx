import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import SkillsPage from './components/Skills/SkillsPage';
import ContactPage from './components/Contact/ContactPage';
import StarrySky from './components/StarrySky';
import ProjecPage from './components/ProjectsPage/ProjectPage';

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
          <Route path="/projects" exact Component={ProjecPage}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;