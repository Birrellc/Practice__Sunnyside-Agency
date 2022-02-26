import React from 'react';
import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
    </>
  );
};

export default App;
