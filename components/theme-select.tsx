import RadioButton from "./radio-button"

export type Theme = "light" | "dark"

export default function ThemeSelect({
    className,
    onChange,
    selectedTheme
}:{
    className?: string
    onChange: (theme: Theme) => void
    selectedTheme: Theme
}): JSX.Element {
    return <div className={`${className} -rotate-90 space-x-4`}>
        <RadioButton 
            label="Light"
            value={selectedTheme === "light"}
            onChange={() => onChange("light")}
        />
        <RadioButton 
            label="Dark"
            value={selectedTheme === "dark"}
            onChange={() => onChange("dark")}
        />
    </div>
}