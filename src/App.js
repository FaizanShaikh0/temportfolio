// App.js
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';
import Contact from './pages/contact/Contact';
import Footer from './pages/footer/Footer';

function App() {
  return (
    <div className='app'>
      <div>

        <Navbar />
        <Home />
        {/* <About /> */}
        <Skills />
        <Contact />
        <Footer />
      </div>

    </div>

  );
}

export default App;
