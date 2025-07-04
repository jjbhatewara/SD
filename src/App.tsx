import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Distributors from './components/Distributors';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Distributors />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;