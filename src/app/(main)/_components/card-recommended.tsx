'use client'

import { CardStack } from '@/components/card-stack'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const CARDS = [
  {
    id: 0,
    name: 'Sandra Souto',
    designation: 'Salão de beleza',
    content: (
      <>
        <div
          className="h-28 overflow-hidden rounded-lg bg-zinc-800 bg-[url('/cardpic-salao.jpg')]
          bg-cover bg-center bg-no-repeat"
        />
      </>
    ),
  },
  {
    id: 1,
    name: 'Ian Correa',
    designation: 'Barbearia',
    content: (
      <div
        className="h-28 overflow-hidden rounded-lg bg-zinc-800 bg-[url('/cardpic-barbearia.jpg')]
          bg-cover bg-center bg-no-repeat"
      />
    ),
  },
  {
    id: 2,
    name: 'Nature Benessere',
    designation: 'Clínica de estética',
    content: (
      <div
        className="h-28 overflow-hidden rounded-lg bg-zinc-800 bg-[url('/cardpic-clinica.jpg')]
          bg-cover bg-center bg-no-repeat"
      />
    ),
  },
]

export function CardRecommendeds() {
  return <CardStack items={CARDS} scaleFactor={0.012} />
}
