"use client"
import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import FormComponent from './form';
import FormComponentvisa from './formvisa';
import FormComponentplus from './formplus';
import Footer from './footer';

const Home = () => {
  const [currentForm, setCurrentForm] = useState(0);

  const [cartData, setCartData] = useState<Array<{ id: string, client_name: string, email: string, phone_number: string, address: string }>>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/fetchCartData?user=1');
        const data = await response.json();
        setCartData(data);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchData();
  }, []);

  const renderCartData = () => {
    return (
      <div>
        {cartData.map((item) => (
          <div key={item.id}>
            <p>Name: {item.client_name}</p>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone_number}</p>
            <p>Address: {item.address}</p>
          </div>
        ))}
      </div>
    );
  };

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
      <div>
        {cartData.length > 0 ? (
          renderCartData()
        ) : (
          <p>Loading data...</p>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default Home;
