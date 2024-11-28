import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EcoBite - Cook green, live clean',
  description: 'Discover eco-friendly recipes and make a positive impact on the environment with every meal.',
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
        <main className="container mx-auto px-4 pt-20 pb-8">
          {children}
        </main>
      </body>
    </html>
  )
}

