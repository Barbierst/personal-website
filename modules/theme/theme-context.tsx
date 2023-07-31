import { Dispatch, ReactElement, SetStateAction, createContext, useContext, useState } from "react"

export type Theme = "light" | "dark"

const ThemeContext = createContext<ThemeContextProvider>({
    theme: "dark",
    setTheme: () => {}
})

interface ThemeContextProvider {
    theme: Theme,
    setTheme: Dispatch<SetStateAction<Theme>>
}

export function ThemeProvider({children}: {children: ReactElement}): JSX.Element {
    const [theme, setTheme] = useState<Theme>("dark")

    return <ThemeContext.Provider value={{
        theme,
        setTheme,
    }}>
        {children}
    </ThemeContext.Provider>
}

export function useTheme() {
    return useContext(ThemeContext)
}
