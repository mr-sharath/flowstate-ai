import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FlowState AI',
  description: 'Sleek operations agent for freelancers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans bg-gray-900 text-white min-h-screen">{children}</body>
    </html>
  )
}
