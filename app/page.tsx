import Image from 'next/image';
import FormComponent from './form';
import FormComponentvisa from './formvisa';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'KSA',
}

export default function Home() {

  return (
    <main>
      <h1></h1>
      {}
      <FormComponentvisa /> 
    
    </main>
  );
}