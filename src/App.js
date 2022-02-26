import React from 'react';
import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';
import Navbar from './components/Navbar/Navbar';
import Testimonials from './components/Testimonials/Testimonials';
import Gallery from './components/Gallery/Gallery';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Testimonials />
      <Gallery />
    </>
  );
};

export default App;
