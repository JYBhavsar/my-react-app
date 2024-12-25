import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
// import Contact from './pages/Contact';
// import Project from './pages/Project';
import './assets/style/banner.scss';
import './assets/style/elements.scss';
import './assets/style/predefine.scss';
import './assets/style/responsive.scss';
import Services from './pages/Services/Services';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add other routes here */}
        </Routes>
      </main>
      <Footer />
    </Router>
    // <BrowserRouter>
    //   <div className="App">
    //     <Header />
    //     <main>
    //       <Home />
    //     </main>
    //     <Footer />
    //   </div>
    // </BrowserRouter>
  );
}

export default App;