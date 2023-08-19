"use client"

import { useState } from "react"
import ExpandButton from "./expand-button/expand-button"

export interface Experience {
    employer: string
    role: string
    start: string
    end: string
    highlights: string[]
}

export function ExperienceBlock({
  employer,
  role,
  start,
  end,
  highlights
}: Experience): JSX.Element {
  const [expanded, setExpanded] = useState<boolean>(false)

  return <li className="mb-6 pb-4 text-xs border-b-2">
    <p className="text-base">{employer} | {role}</p>
    <span className="flex justify-between">
      <p>{start} - {end}</p>
      <ExpandButton expanded={expanded} onClick={() => setExpanded(!expanded)}/>
    </span>
    <ul className={`list-disc pl-3 transition-all overflow-hidden ${expanded ? "max-h-48": "max-h-0"}`}>
      {highlights.map((highlight, index) => <li key={index} className="py-1 text-xs text-stone-700 dark:text-gray-200">{highlight}</li>)}
    </ul>
  </li>
}