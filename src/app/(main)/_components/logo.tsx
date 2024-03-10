// import { Ubuntu } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// const font = Ubuntu({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '700'],
// })

export function Logo() {
  return (
    <Button
      variant="transparent"
      className="hidden select-none items-center gap-x-2 md:flex"
      asChild
    >
      <Link href="/">
        <Image
          src="/logo.svg"
          height="30"
          width="30"
          alt="Logo"
          className="dark:hidden"
        />
        <Image
          src="/logo-in-dark.svg"
          height="30"
          width="30"
          alt="Logo"
          className="hidden dark:block"
        />
        {/* <p className={cn('text-2xl font-bold', font.className)}>junno</p> */}
      </Link>
    </Button>
  )
}
