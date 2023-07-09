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
    const [theme, setTheme] = useState<Theme>("light")

    return <body className={`${inter.className} ${theme === "dark" ? "dark" : ""}`}>
    <div className={`flex w-screen h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white`}>
      <ThemeSelect 
        className='absolute -left-10 bottom-24' 
        selectedTheme={theme} 
        onChange={setTheme}/>
      <div className='w-full m-10 px-2 sm:px-10 border-l-2 sm:flex'>
        <header>
          <Header className='pb-3'/>
          <Navigation theme={theme}/>
        </header>
        <main className='ml-24 w-1/2 sm:grid sm:content-center'>
          {children}
        </main>
      </div>
    </div>
 </body>
}