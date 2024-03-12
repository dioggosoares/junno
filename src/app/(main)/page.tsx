import { Hero } from './_components/hero'
import { MoreVisiteds } from './_components/more-visiteds'
import { NewPartners } from './_components/new-partners'

export default function Main() {
  return (
    <div className="flex min-h-full w-full flex-col">
      <Hero />
      <div className="flex-1">
        <div className="mx-auto flex w-full max-w-8xl flex-col px-5 py-10 lg:px-32">
          <div className="flex w-full flex-col gap-5 py-5">
            <span className="text-xl font-bold text-zinc-600 dark:text-white">
              Novos Parceiros
            </span>
            <NewPartners />
          </div>
          <div className="flex w-full flex-col gap-5 py-5">
            <span className="text-xl font-bold text-zinc-600 dark:text-white">
              Mais Visitados
            </span>
            <MoreVisiteds />
          </div>
        </div>
      </div>
    </div>
  )
}
