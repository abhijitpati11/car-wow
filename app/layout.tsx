import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Carwow',
  description: 'Discover, Rent, Buy a car hustle free  in the most efficinet way',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
