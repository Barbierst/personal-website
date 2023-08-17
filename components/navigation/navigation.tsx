import Link from "next/link"
import { usePathname } from "next/navigation"
import { Theme } from "../../modules/theme/theme-select"
import styles from "./styles.module.css"

export default function Navigation({theme}: {theme: Theme}): JSX.Element {
  return <nav>
    <ul>
      <NavigationItem href="/" text="About" theme={theme}/>
      <NavigationItem href="/experience" text="Experience" theme={theme}/>
      <NavigationItem href="/contact" text="Contact" theme={theme}/>
    </ul>
  </nav>
}

function NavigationItem({
  href,
  text,
  theme
}: {
    href: string
    text: string
    theme: Theme
}): JSX.Element {
  const pathname = usePathname()
  return <li>
    <Link className={`${styles.linkUnderline} ${theme === "light" ? styles.darkUnderline : styles.lightUnderline} ${pathname === href ? "ml-1 text-stone-700 dark:text-gray-300" : ""}`} href={href}>{text}</Link>
  </li>
}