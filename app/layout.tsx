import { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './navbar';
import Footer from './footer'; // Import your Footer component
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'tp ihm',
  description: 'Sekkal',
}
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
         
          {children}
          <Analytics />
       
        </body>
      </html>
    </>
  );
}
