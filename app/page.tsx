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

  return (
    <main>
      <Navbar />
      <br />
      <h1>Data from SQL Database</h1>
      {currentForm === 0 && <FormComponent onNext={handleNext} />}
      {currentForm === 1 && <FormComponentvisa onNext={handleNext} />}
      {currentForm === 2 && <FormComponentplus />}
   
      <Footer />
    </main>
  );
};

export default Home;
