"use client"
import React, { useState } from 'react';
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

  const handlePrev = () => {
    setCurrentForm((prev) => prev - 1);
  };

  const totalForms = 3;
  const progressBarStyle = 'w-full h-2 bg-gray-200 rounded overflow-hidden';
  const progressStyle = 'h-full bg-green-500';

  const calculateProgressBarWidth = () => {
    const progress = (currentForm / (totalForms - 1)) * 100;
    return `w-${progress} ${progressStyle}`;
  };

  const renderProgressCircles = () => {
    const circles = [];
    for (let i = 0; i < totalForms; i++) {
      circles.push(
        <span
          key={i}
          className={`w-3 h-3 bg-gray-300 rounded-full ${
            i <= currentForm ? 'bg-green-500' : ''
          }`}
        ></span>
      );
    }
    return circles;
  };

  return (
    <main>
      <br />
      <div className="mx-auto max-w-xl px-4 mt-8">
        <div className={progressBarStyle}>
          <div
            className={`${
              currentForm === 0 ? 'w-0' : currentForm === 1 ? 'w-1/2' : 'w-full'
            } ${progressStyle}`}
          ></div>
        </div>
        <div className="flex justify-between mt-2">
          {renderProgressCircles()}
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-sm text-gray-500">Personal informations</span>
          <span className="text-sm text-gray-500">Trip details</span>
          <span className="text-sm text-gray-500">Finalize</span>
        </div>
      </div>

      {currentForm === 0 && <FormComponent onNext={handleNext} />}
      {currentForm === 1 && <FormComponentvisa onNext={handleNext} onPrev={handlePrev} />}
      {currentForm === 2 && <FormComponentplus onPrev={handlePrev} />}
    </main>
  );
};

export default Home;
