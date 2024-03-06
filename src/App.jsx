import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import SkillsPage from './SkillsPage/SkillsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <br />
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/skills" exact Component={SkillsPage}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;