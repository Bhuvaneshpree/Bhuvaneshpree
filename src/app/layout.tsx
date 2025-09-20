import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bhuvaneshpree - Full Stack Developer & CSE Student',
  description: 'Portfolio of Bhuvaneshpree - Computer Science & Engineering Student at VISTAS, passionate about Full Stack Development, Machine Learning & AI, and innovative coding solutions.',
  keywords: ['Bhuvaneshpree', 'Full Stack Developer', 'Web Development', 'Machine Learning', 'AI', 'React', 'Next.js', 'Computer Science'],
  authors: [{ name: 'Bhuvaneshpree' }],
  creator: 'Bhuvaneshpree',
  openGraph: {
    title: 'Bhuvaneshpree - Full Stack Developer & CSE Student',
    description: 'Portfolio showcasing projects and skills in Full Stack Development, Machine Learning & AI',
    url: 'https://github.com/Bhuvaneshpree',
    siteName: 'Bhuvaneshpree Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhuvaneshpree - Full Stack Developer & CSE Student',
    description: 'Portfolio showcasing projects and skills in Full Stack Development, Machine Learning & AI',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}