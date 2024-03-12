import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Inter, Ubuntu } from 'next/font/google'
import { Toaster } from 'sonner'

import { STORAGE_KEYS } from '@/constants/general'
import { ThemeProvider } from '@/providers/theme-provider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
})

export const metadata: Metadata = {
  title: 'Junno',
  description: 'Uma nova forma de reservar ou agendar sua hora de beleza.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/logo.svg',
        href: '/logo.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/logo-in-dark.svg',
        href: '/logo-in-dark.svg',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className="antialiased" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${ubuntu.variable} font-sans dark:bg-zinc-900`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey={STORAGE_KEYS.JUNNO_THEME}
        >
          <Toaster position="bottom-center" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
