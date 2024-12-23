import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './pages/Navbar/Navbar';
//import Footer from './components/Footer';
import Home from './pages/Home/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Project from './pages/Project';
import './assets/style/banner.scss';
import './assets/style/elements.scss';
import './assets/style/predefine.scss';
import './assets/style/responsive.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (

    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
      {/* <Footer /> */}
    </div>

    // <Router>
    //   <div className="App">
    //     <Header />
    //     <main>
    //       <Switch>
    //         <Route exact path="/" component={Home} />
    //         <Route path="/about" component={About} />
    //         <Route path="/contact" component={Contact} />
    //         <Route path="/project" component={Project} />
    //       </Switch>
    //     </main>
    //     <Footer />
    //   </div>
    // </Router>
  );
}

export default App;
