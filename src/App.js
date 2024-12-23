import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Project from './pages/Project';
import './assets/style/banner.scss';
import './assets/style/elements.scss';
import './assets/style/predefine.scss';
import './assets/style/responsive.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;