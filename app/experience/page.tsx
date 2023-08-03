'use client'

import ExpandButton from "@/components/expand-button/expand-button"
import { useState } from "react"

export default function Experience(): JSX.Element {
    const experiences: Experience[] = [
        {
            employer: "Sandwave.io", 
            role: "Software Engineer", 
            start: "october 2021", 
            end: "present", 
            highlights: [
                "Software Development company that supports Your.Online in there efforts to improve the hosting landscape within the EU.",
                "Part of an agile team within a larger and complex organization.",
                "Development of a multi-tenant NextJS based shop.",
                "Development of an order system with a complex product structure in Laravel.",
            ]
        },
        {
            employer: "Maxilia", 
            role: "Software Engineer", 
            start: "november 2021", 
            end: "september 2021", 
            highlights: [
                "E-commerce company that sells fully customizable products.",
                "Development a fully custom CMS and CRM (Laravel and Angular).",
                "Development of product design tool (Laravel and Svelte).",
                "Development of API connections between several shops (Python).",
                "Development of the Product Management System (PHP).",
            ]
        },
        {
            employer: "Bttr", 
            role: "Software Engineer", 
            start: "september 2019", 
            end: "october 2020", 
            highlights: [
                "Web agency that specializes in custom software.",
                "Various project ranging from marketing websites to fully custom CRM systems and e-commerce platforms.",
                "Development mainly done in Laravel and VeuJS/Nuxt."
            ]
        },
        {
            employer: "Sandd", 
            role: "Marketing Intelligence Analist", 
            start: "febraury 2019", 
            end: "august 2019",
             highlights: [
                "Postal company with over 17.000 employees acquired by PostNL.",
                "Responsible the data gathering for online recruitment and the e-commerce efforts.",
                "Helped in the transition from local recruitment to a more centralized approach."
             ]
        },
        {
            employer: "Euroforum", 
            role: "Online Marketeer", 
            start: "march 2017", 
            end: "february 2019", 
            highlights: [
                "Educational and event company focused on the B2B market.",
                "Responsible for the marketing in the Energy and Education segments.",
                "Mainly focused on Data Driven Marketing and marketing automation."
            ]
        }
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
    highlights: string[]
}

function ExperienceBlock({
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
        {expanded && highlights.length > 1 && <ul>
            {highlights.map((highlight, index) => <li key={index} className="py-1 text-xs text-slate-700 dark:text-gray-200">- {highlight}</li>)}
        </ul>}
    </li>
}
