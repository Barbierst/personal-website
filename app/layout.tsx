'use client'

import ThemeSelect, { Theme } from '@/components/theme-select'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useState } from 'react'

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
          <div className={`flex w-screen h-screen bg-white dark:bg-slate-900`}>
            <ThemeSelect 
              className='absolute -left-10 bottom-20' 
              selectedTheme={theme} 
              onChange={setTheme}/>
            <main className='w-full m-8 border-2'>
              {children}
            </main>
          </div>
       </body>
    </html>
  )
}
