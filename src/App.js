import React from 'react';
import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';
import Navbar from './components/Navbar/Navbar';
import Testimonials from './components/Testimonials/Testimonials';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Testimonials />
    </>
  );
};

export default App;
