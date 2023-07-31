'use client'

import { useTheme } from "@/modules/theme/theme-context"

export default function ExpandButton(): JSX.Element {
    const { theme } = useTheme()

    const fill = theme === "dark" ? "#FFFFFF" : "#000000" 

    return <svg className="cursor-pointer" width="15" height="15" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="button">
            <rect id="horizontal" y="28" width="70" height="15" rx="7.5" fill={fill}/>
            <rect id="verticle" x="27.5" y="70.5" width="70" height="15" rx="7.5" transform="rotate(-90 27.5 70.5)" fill={fill}/>
        </g>
    </svg>
}