import { Experience, ExperienceBlock } from "../../components/experience-block"

export default function Experience(): JSX.Element {
  const experiences: Experience[] = [
    {
      employer: "Sandwave.io", 
      role: "Software Engineer", 
      start: "october 2021", 
      end: "present", 
      highlights: [
        "Software Development company that supports Your.Online in their efforts to improve the hosting landscape within the EU.",
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
        "Development of a fully custom CMS and CRM (Laravel and Angular).",
        "Development of a product design tool (Laravel and Svelte).",
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
        "Responsible the data gathering for online recruitment and e-commerce efforts.",
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
