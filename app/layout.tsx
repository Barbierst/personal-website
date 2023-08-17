import "./globals.css"
import type { Metadata } from "next"
import LayoutWrap from "@/components/layout-wrap"
import { ThemeProvider } from "@/modules/theme/theme-context"

export const metadata: Metadata = {
    title: "Tim Barbiers",
    description: "Software development",
}

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
  
    return (
        <html lang="en">
            <ThemeProvider>
                <LayoutWrap>
                    {children}
                </LayoutWrap>
            </ThemeProvider>
        </html>
    )
}
