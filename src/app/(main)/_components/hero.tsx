import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { capitalizeFirstLetter, cn } from '@/lib/utils'

import { CardRecommendeds } from './card-recommended'

export function Hero() {
  const isAuthenticated = true

  return (
    <div className="relative flex w-full">
      <div
        className="absolute inset-0 h-[29rem] w-full bg-gradient-to-r from-white
          via-white/50 to-white dark:flex dark:from-zinc-900
          dark:via-zinc-900/50 dark:to-zinc-900"
      />
      <div
        className="flex h-[29rem] w-full items-center justify-center overflow-hidden bg-cover
          bg-center bg-no-repeat px-5 py-16 md:bg-[url('/heroes/salao-01.jpg')] lg:px-32"
      >
        <div className="z-10 flex h-full w-full max-w-8xl gap-x-32 pt-16">
          <div className="flex w-full flex-col gap-10">
            <div className="flex w-full flex-col gap-3">
              <div className="block">
                <h1 className="text-zinc-600 dark:text-white">
                  Olá,{' '}
                  <span className="text-lg font-semibold">Faça o login</span>
                </h1>
                <span className="text-xs text-zinc-400">
                  {capitalizeFirstLetter(
                    format(new Date(), "EEE, d 'de' MMMM 'de' yyyy", {
                      locale: ptBR,
                    }),
                  )}
                </span>
              </div>

              <div className="flex w-full max-w-[22rem] gap-2 md:max-w-[27.5rem]">
                <Input type="text" placeholder="Buscar estabelecimentos" />
                <Button variant="brand" size="icon" className="px-2">
                  <Search className="h-6 w-6" />
                </Button>
              </div>
            </div>

            <div
              className={cn(
                `hidden w-full flex-col gap-5`,
                isAuthenticated && `flex`,
              )}
            >
              <span className="text-xs font-bold uppercase text-zinc-600 dark:text-white">
                Agendamentos
              </span>
              <div
                className="flex min-h-28 w-full rounded-md bg-background p-3 dark:bg-black
                md:max-w-[27.5rem]"
              ></div>
            </div>
          </div>

          <div className="hidden w-full flex-col gap-10 lg:flex">
            <span className="text-xs font-bold uppercase text-zinc-600 dark:text-white">
              Recomendados
            </span>
            <CardRecommendeds />
          </div>
        </div>
      </div>
    </div>
  )
}
