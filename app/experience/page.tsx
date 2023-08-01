'use client'

import ExpandButton from "@/components/expand-button/expand-button"
import { useState } from "react"

export default function Experience(): JSX.Element {
    const experiences: Experience[] = [
        {employer: "Sandwave.io", role: "Software Engineer", start: "october 2021", end: "present", description: "test"},
        {employer: "Maxilia", role: "Software Engineer", start: "november 2021", end: "september 2021"},
        {employer: "Bttr", role: "Software Engineer", start: "september 2019", end: "october 2020"},
        {employer: "Sandd", role: "Marketing Intelligence Analist", start: "febraury 2019", end: "august 2019"},
        {employer: "Euroforum", role: "Online Marketeer", start: "march 2017", end: "february 2019"}
    ]

    return <ul>
        {experiences.map((experience) => <ExperienceBlock key={experience.employer} {...experience}/>)}
    </ul>
}

interface Experience {
    employer: string
    role: string
    start: string
    end: string
    description?: string
}

function ExperienceBlock({
    employer,
    role,
    start,
    end,
    description
}: Experience): JSX.Element {
    const [expanded, setExpanded] = useState<boolean>(false)

    return <li className="mb-6 pb-4 text-xs border-b-2">
        <p className="text-base">{employer} | {role}</p>
        <span className="flex justify-between">
            <p>{start} - {end}</p>
            <ExpandButton expanded={expanded} onClick={() => setExpanded(!expanded)}/>
        </span>
        {expanded && <p className="text-sm pt-2 text-slate-700 dark:text-gray-400">{description}</p>}
    </li>
}