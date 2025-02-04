import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import TrainingCertification from './components/TrainingCertification';
import Contact from './components/Contact';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style.css';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Experience />
        <TrainingCertification/>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
