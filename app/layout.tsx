import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components'
import {Footer} from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DRIVE TREK',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/></body>
    </html>
  )
}
