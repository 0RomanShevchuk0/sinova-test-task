export interface Measurement {
  imperial: string
  metric: string
}

interface Image {
  id: string
  url: string
  width?: number
  height?: number
}

export interface DogBreed {
  id: number | string
  name: string
  origin: string
  weight: Measurement
  height?: Measurement
  life_span: string
  temperament: string
  description: string
  image: Image
  bred_for?: string
  breed_group?: string
}
