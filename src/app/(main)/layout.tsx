import '@/styles/globals.css'

import { Header } from './_components/header'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="h-full dark:bg-zinc-900">
      <Header />
      <div className="h-full">{children}</div>
    </div>
  )
}
