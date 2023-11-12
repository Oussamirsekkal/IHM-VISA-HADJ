/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from './navbar';
import FormComponent from './form';
import FormComponentvisa from './formvisa';
import FormComponentplus from './formplus';

import { Metadata } from 'next';


const Home = () => {
  const [currentForm, setCurrentForm] = useState(0);

  const handleNext = () => {
    setCurrentForm((prev) => prev + 1);
  };

  return (
    <main>
      <Navbar></Navbar>
      <br></br>
      <h1></h1>
      {currentForm === 0 && <FormComponent onNext={handleNext} />}
      {currentForm === 1 && <FormComponentvisa onNext={handleNext} />}
      {currentForm === 2 && <FormComponentplus />}
    </main>
  );
};

export default Home;
