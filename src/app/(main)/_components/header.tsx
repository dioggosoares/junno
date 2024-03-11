'use client'

import { Calendar, Menu } from 'lucide-react'

import { ToggleTheme } from '@/components/toggle-theme'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useScrollTop } from '@/hooks/use-scroll-top'
import { cn } from '@/lib/utils'

import { Logo } from './logo'

export function Header() {
  const scrolled = useScrollTop()
  const isAuthenticated = true

  return (
    <header
      className={cn(
        `fixed top-0 z-50 flex w-full items-center justify-center border-b bg-background
        px-5 py-6 dark:bg-zinc-900 md:border-0 md:bg-transparent dark:md:bg-transparent lg:px-32`,
        scrolled &&
          `shadow-sm transition duration-150 ease-linear dark:bg-zinc-900 md:border-b
          md:bg-background dark:md:bg-zinc-900`,
      )}
    >
      <div className="flex w-full max-w-8xl items-center justify-between">
        <Logo />
        <Button className="flex md:hidden" variant="ghost" size="icon">
          <Menu />
        </Button>
        <div className="hidden w-full max-w-8xl items-center justify-between gap-x-3 md:ml-auto md:flex md:justify-end">
          <Button variant="secondary" className="gap-x-2">
            <Calendar className="h-4 w-4" />
            Agendamentos
          </Button>
          {isAuthenticated ? (
            <Avatar className="h-9 w-9">
              <AvatarImage
                src="https://github.com/dioggosoares.png"
                alt="@dioggosoares"
              />
              <AvatarFallback>DS</AvatarFallback>
            </Avatar>
          ) : (
            <Button variant="brand">Entrar</Button>
          )}
          <ToggleTheme />
        </div>
      </div>
    </header>
  )
}
