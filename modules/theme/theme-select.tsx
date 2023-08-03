import RadioButton from "../../components/radio-button"
import { useTheme } from "./theme-context"

export type Theme = "light" | "dark"

export default function ThemeSelect({
    className,
}:{
    className?: string
}): JSX.Element {
    const {theme, setTheme} = useTheme()

    return <div className={className}>
        <RadioButton 
            label="Light"
            value={theme === "light"}
            onChange={() => setTheme("light")}
        />
        <RadioButton 
            label="Dark"
            value={theme === "dark"}
            onChange={() => setTheme("dark")}
        />
    </div>
}