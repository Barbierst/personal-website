import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation(): JSX.Element {
    return <nav>
        <ul>
            <NavigationItem href="/" text="About"/>
            <NavigationItem href="/experience" text="Experience"/>
            <NavigationItem href="/contact" text="Contact"/>
        </ul>
    </nav>
}

function NavigationItem({
    href,
    text
}: {
    href: string
    text: string
}): JSX.Element {
    const pathname = usePathname()
    return <li>
        {pathname === href ? "- " : ""}<Link href={href}>{text}</Link>
    </li>
}