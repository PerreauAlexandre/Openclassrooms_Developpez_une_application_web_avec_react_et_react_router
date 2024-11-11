export type Logement = {
  id: string
  title: string
  cover: string
  pictures: string[]
  description: string
  host: {
    name: string
    picture: string
  }
  rating: string
  location: string
  equipments: string[]
  tags: string[]
}

export type AccordionProps = {
  title: string
  content: string[]
  accordionLarge: boolean
}

export type CarouselProps = {
  pictures: string[]
}