"use client"
import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import FormComponent from './form';
import FormComponentvisa from './formvisa';
import FormComponentplus from './formplus';
import Footer from './footer';




const Home = () => {
  const [currentForm, setCurrentForm] = useState(0);

  



  const handleNext = () => {
    
    setCurrentForm((prev) => prev + 1);
  };
  const handleprev = () => {
    setCurrentForm((prev) => prev - 1);
  };

  return (
    <main>
      <br />
   
      {currentForm === 0 && <FormComponent onNext={handleNext} />}
      {currentForm === 1 && <FormComponentvisa onNext={handleNext}  onPrev={handleprev} />}
      {currentForm === 2 && <FormComponentplus onPrev={handleprev} />}
   
    
    </main>
  );
};

export default Home;
