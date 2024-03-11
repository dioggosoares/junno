// import { Ubuntu } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

// const font = Ubuntu({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '700'],
// })

export function Logo() {
  return (
    <button className="flex select-none items-center gap-x-2">
      <Link href="/">
        <Image
          src="/logo.svg"
          height="24"
          width="24"
          alt="Logo"
          className="dark:hidden"
        />
        <Image
          src="/logo-in-dark.svg"
          height="24"
          width="24"
          alt="Logo"
          className="hidden dark:block"
        />
        {/* <p className={cn('text-2xl font-bold', font.className)}>junno</p> */}
      </Link>
    </button>
  )
}
