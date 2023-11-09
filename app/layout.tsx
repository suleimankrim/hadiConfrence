import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import { Tinos, Arima, Noto_Sans_Egyptian_Hieroglyphs } from 'next/font/google'
import Headers from './components/Headers'

// const inter = Tinos({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   style: ['normal', 'italic'],
//   display: 'swap',
// })
const inter = Arima({
  subsets: ['latin'],
  weight: ['400'],
})
export const metadata: Metadata = {
  title: 'QSES',
  description:
    'The ”Quantum Software Engineering Summit,” a groundbreaking event aimed at exploring the intersection of software engineering and quantum computing.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="overflow-x-hidden scrollbar scrollbar-w-2 scrollbar-thumb-sky-600  scrollbar-track-gray-200"
    >
      <body className={inter.className}>
        <Headers></Headers>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
