import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import { Barlow_Condensed } from 'next/font/google'
import { Bellefair } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navBar'


const barlow =
  Barlow({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    variable: '--font-barlow',
  })
const barlow_condensed =
  Barlow_Condensed({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    variable: '--font-barlow-condensed',
  })
const bellefair =
  Bellefair({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-bellefair',
  })


export const metadata: Metadata = {
  title: 'Space Tourism',
  description: 'A Project by Alex Joshua',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${barlow_condensed.variable} ${bellefair.variable} bg-slate-900 text-white`}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
