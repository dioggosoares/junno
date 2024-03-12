import '@/styles/globals.css'

import { Header } from './_components/header'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-full flex-col dark:bg-zinc-900">
      <div className="mx-auto flex w-full flex-1 justify-center">
        <Header />
        <div className="flex w-full">{children}</div>
      </div>
      <footer className="mt-auto">footer</footer>
    </div>
  )
}
