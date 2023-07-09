'use client'

import ThemeSelect, { Theme } from '@/components/theme-select'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import Navigation from '@/components/navigation'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tim Barbiers',
  description: 'Software development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<Theme>("light")
  
  return (
    <html lang="en">
        <body className={`${inter.className} ${theme === "dark" ? "dark" : ""}`}>
          <div className={`flex w-screen h-screen bg-white dark:bg-slate-900 dark:text-white`}>
            <ThemeSelect 
              className='absolute -left-10 bottom-24' 
              selectedTheme={theme} 
              onChange={setTheme}/>
            <div className='w-full m-10 px-2 sm:px-10 border-l-2 sm:flex'>
              <header>
                <Header className='pb-3'/>
                <Navigation/>
              </header>
              <main className='ml-24 w-1/2 sm:grid sm:content-center'>
                {children}
              </main>
            </div>
          </div>
       </body>
    </html>
  )
}
