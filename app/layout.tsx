import type { Metadata } from 'next'
import Navbar from './navbar';
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Visa Hadj App',
  description: 'by Sekkal and Makhlouf',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      {children}</body>
    </html>
  )
}
