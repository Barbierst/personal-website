export default function RadioButton({
  label,
  value,
  onChange
}:{
    label: string
    value: boolean
    onChange: () => void
}): JSX.Element {
  return <label className="cursor-pointer">
    <input type="radio" checked={value} onChange={onChange} className="hidden"/>
    <span className={`h-4 w-4 inline-block transition mr-1 border hover:bg-stone-800 dark:hover:bg-gray-100 ${value ? "bg-stone-900 dark:bg-white" : ""}`}/>
    {label}
  </label>
}