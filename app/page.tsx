export default function Home() {
  return <>
     <Paragraph>Dedicated, self-starting, communicative and adaptable software engineer specializing in full-stack development.</Paragraph>
     <Paragraph>With multiple years of industry experience, I acquired a comprehensive understanding of both front-end and back-end technologies.</Paragraph>
     <Paragraph>I excel in crafting engaging user interfaces using modern web technologies, while also being proficient in server-side programming, database management, and API integrations.</Paragraph>
     <Paragraph>My expertise in full-stack development provides me with a holistic view of the tasks at hand, ensuring smooth communication and data flow throughout the entire application.</Paragraph>
    </>
}

function Paragraph({children}: {children: React.ReactNode}): JSX.Element {
  return <p className="mb-2 sm:mb-6">
    {children}
  </p>
}
