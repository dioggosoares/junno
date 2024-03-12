import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function NewPartners() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
          >
            <Card className="rounded-2xl md:w-56">
              <CardContent className="flex h-72 w-full items-center justify-center p-6">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-4" />
      <CarouselNext className="-right-4 md:-right-2 lg:right-1 xl:-right-4" />
    </Carousel>
  )
}
