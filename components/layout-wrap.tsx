"use client"

import { Roboto_Mono } from "next/font/google"
import Header from "./header"
import Navigation from "./navigation/navigation"
import ThemeSelect from "@/modules/theme/theme-select"
import { useTheme } from "@/modules/theme/theme-context"

const inter = Roboto_Mono({ subsets: ["latin"] })

export default function LayoutWrap({
  children,
}: {
    children: React.ReactNode
  }): JSX.Element {
  const {theme} = useTheme()
  return <body className={`${inter.className} ${theme === "dark" ? "dark" : ""}`}>
    <div className='transition-colors flex w-screen min-h-screen bg-white dark:bg-stone-900 text-stone-900 dark:text-white'>
      <ThemeSelect className='fixed -left-12 bottom-24 -rotate-90 space-x-4 '/>
      <div className='w-full mx-10 my-8 pl-4 xl:pl-8 border-l-2'>
        <header className="xl:absolute">
          <Header className='pb-3'/>
          <Navigation theme={theme}/>
        </header>
        <main className='xl:h-full flex justify-center mt-12 xl:mt-48 2xl:mt-0 2xl:items-center'>
          <div className="xl:w-1/2 2xl:w-1/3 text-base xl:text-xl 2xl:text-2xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  </body>
}
