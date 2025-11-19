import React from "react";
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Projects from './components/Pages/Projects'
import Contact from './components/Pages/Contact'

const App = () => {
  return (
    <div style={{ paddingTop: '20px' }}>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div >
  );
};

export default App;
