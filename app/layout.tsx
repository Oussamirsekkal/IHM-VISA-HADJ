import { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './navbar';
import Footer from './footer'; // Import your Footer component
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Visa Hadj App</title>
        <meta name="description" content="by Sekkal and Makhlouf" />
      </Head>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer /> 
        </body>
      </html>
    </>
  );
}
