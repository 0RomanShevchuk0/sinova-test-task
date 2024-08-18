import { Measurement } from "./breed"

interface Breed {
  id: number
  name: string
  origin: string
  weight: Measurement
  height: Measurement
  life_span: string
  temperament: string
  bred_for: string
  breed_group: string
  reference_image_id: string
}

export interface BreedImage {
  breeds: Breed[]
  id: string
  url: string
  width: number
  height: number
}
