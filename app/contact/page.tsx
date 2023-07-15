import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Contact(): JSX.Element {
    const socialLinks: SocialLinkProps[] = [
        {icon: faEnvelope, text: "info@timbarbiers.nl", href: "mailto:info@timbarbiers.nl"},
        {icon: faLinkedin, text: "linkedin.com/in/tim-barbiers", href: "https://www.linkedin.com/in/tim-barbiers/", newTab: true},
        {icon: faGithub, text: "github.com/Barbierst", href: "https://github.com/Barbierst", newTab: true}
    ] 
    
    return <>
        {socialLinks.map((socialLink) => 
            <SocialLink {...socialLink}/>
        )}
    </>
}

interface SocialLinkProps {
    icon: IconDefinition
    text: string
    href: string
    newTab?: boolean
}

function SocialLink({
    icon,
    text,
    href,
    newTab,
}: SocialLinkProps): JSX.Element {
    return <a className="flex" href={href} target={newTab? "blank" : ""}>
        <FontAwesomeIcon className="w-5 mr-2 mb-2" icon={icon}/>
        <span>{text}</span>
    </a>
}