import { useState } from "react"

export default function RadioButton({
    label,
    value,
    onChange
}:{
    label: string
    value: boolean
    onChange: () => void
}): JSX.Element {
    return <label>
        <input type="radio" checked={value} onChange={onChange}/>
        {label}
    </label>
}