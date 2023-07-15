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
    <div className={`flex w-screen h-full sm:h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white`}>
      <ThemeSelect 
        className='absolute -left-12 bottom-24' 
        selectedTheme={theme} 
        onChange={setTheme}/>
      <div className='w-full mx-10 my-8 pl-4 sm:pl-8 border-l-2 sm:flex'>
        <header>
          <Header className='pb-3'/>
          <Navigation theme={theme}/>
        </header>
        <main className='mt-12 sm:mt-0 sm:ml-24 sm:w-1/2 grid content-center justify-center'>
          {children}
        </main>
      </div>
    </div>
 </body>
}