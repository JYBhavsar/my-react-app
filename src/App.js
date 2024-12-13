import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
// import About from "./components/About/About";
// import Projects from "./components/Projects/Projects";
// import Skills from "./components/Skills/Skills";
import './assets/style/responsive.scss';
import './assets/style/banner.scss';
import './assets/style/predefine.scss';
import './App.css'



function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      {/* <About /> */}
      {/*<Projects />
      <Skills /> */}
    </div>
  );
}

export default App;
