'use client'

import { ToggleTheme } from '@/components/toggle-theme'
import { useScrollTop } from '@/hooks/use-scroll-top'
import { cn } from '@/lib/utils'

import { Logo } from './logo'

export function Header() {
  const scrolled = useScrollTop()

  return (
    <header
      className={cn(
        'fixed top-0 z-50 flex w-full items-center justify-center p-6',
        scrolled &&
          'border-b bg-background shadow-sm transition duration-150 ease-linear dark:bg-zinc-900',
      )}
    >
      <div className="flex w-full max-w-8xl items-center justify-between">
        <Logo />
        <div className="flex w-full max-w-8xl items-center justify-between gap-x-2 md:ml-auto md:justify-end">
          <ToggleTheme />
        </div>
      </div>
    </header>
  )
}
