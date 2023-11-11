/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import FormComponent from './form';
import Head from 'next/head'; 
import Navbar from './navbar';
import FormComponentvisa from './formvisa';
import { Metadata } from 'next'

 
export const metadata: Metadata = {
  title: 'TP IHM',
}

export default function Home() {

  return (
    
    <main>

      
      <Navbar></Navbar>
      <br></br>
      
      <h1></h1>
      {}
      <FormComponentvisa /> 
    
    </main>
  );
}