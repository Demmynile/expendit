import Footer from '@/components/Footer';
import React from 'react';
import './globals.css'

export const metadata = {
  title: 'Expendit',
  description: 'Expense tracker App',
}

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=AR+One+Sans:wght@400;500;600;700&family=Barlow:wght@200;300;400;500;600;700;800;900&family=Cabin:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className=''>
        {children}
        <Footer />
      </body>
    </html>
  )
}