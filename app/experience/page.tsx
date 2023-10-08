import { getData } from "@/modules/strapi/fetch"
import { Experience } from "@/modules/strapi/object-types"
import { ExperienceBlock } from "../../components/experience-block"

export default async function Experience(): Promise<JSX.Element> {
  const res = await getData<Experience>("experiences")

  return <ul className="list-none">
    {res.data.map((experience) => <span key={experience.attributes.company}>
        <ExperienceBlock {...experience.attributes}/>
      </span>
      )}
  </ul>
}
