'use client'

import { Roboto_Mono } from "next/font/google"
import Header from "./header"
import Navigation from "./navigation"
import ThemeSelect, { Theme } from "./theme-select"
import { useState } from "react"

const inter = Roboto_Mono({ subsets: ['latin'] })

export default function LayoutWrap({
    children,
  }: {
    children: React.ReactNode
  }): JSX.Element {
    const [theme, setTheme] = useState<Theme>("dark")

    return <body className={`${inter.className} ${theme === "dark" ? "dark" : ""}`}>
    <div className='flex w-screen min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white'>
      <ThemeSelect 
        className='fixed -left-12 bottom-24' 
        selectedTheme={theme} 
        onChange={setTheme}/>
      <div className='w-full mx-10 my-8 pl-4 lg:pl-8 border-l-2 lg:flex'>
        <header>
          <Header className='pb-3'/>
          <Navigation theme={theme}/>
        </header>
        <main className='mt-12 lg:mt-0 w-full sm:w-3/4 flex lg:justify-center items-center'>
          <div className="lg:w-1/3">
            {children}
          </div>
        </main>
      </div>
    </div>
 </body>
}
