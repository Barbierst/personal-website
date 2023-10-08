"use client"

import { useState } from "react"
import ExpandButton from "./expand-button/expand-button"
import { Experience } from "@/modules/strapi/object-types"
import Markdown from "react-markdown"

export function ExperienceBlock(props: Experience): JSX.Element {
  const [expanded, setExpanded] = useState<boolean>(false)

  return <li className="mb-6 pb-4 border-b-2">
    <p>{props.company} | {props.role}</p>
    <span className="text-sm xl:text-base">
      <span className="flex justify-between">
        <p>{props.start_date} - {props.end_date}</p>
        <ExpandButton expanded={expanded} onClick={() => setExpanded(!expanded)}/>
      </span>
      <Markdown className={`pt-4 opacity-50 transition-all overflow-hidden ${expanded ? "max-h-64": "max-h-0"}`}>{props.description}</Markdown>
    </span>
  </li>
}