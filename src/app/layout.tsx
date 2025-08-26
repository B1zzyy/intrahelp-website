import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IntraHelp - AI Interview Assistant',
  description: 'Revolutionary AI-powered interview assistant that helps you ace your job interviews with real-time assistance and expert guidance.',
  keywords: 'AI interview assistant, job interview help, interview preparation, career coaching, AI assistant',
  authors: [{ name: 'IntraHelp Team' }],
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'IntraHelp - AI Interview Assistant',
    description: 'Revolutionary AI-powered interview assistant that helps you ace your job interviews',
    url: 'https://intrahelp.com',
    siteName: 'IntraHelp',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IntraHelp - AI Interview Assistant',
    description: 'Revolutionary AI-powered interview assistant that helps you ace your job interviews',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/icon.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png?v=2" />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}