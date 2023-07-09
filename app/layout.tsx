import './globals.css'
import type { Metadata } from 'next'
import LayoutWrap from '@/components/layout-wrap'

export const metadata: Metadata = {
  title: 'Tim Barbiers',
  description: 'Software development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <LayoutWrap>
        {children}
      </LayoutWrap>
    </html>
  )
}
