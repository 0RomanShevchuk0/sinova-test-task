import { dogsService } from "@/api/dogs"
import { DogBreed } from "@/types/breed"
import { BreedImage } from "@/types/breedImage"
import { useState, useEffect } from "react"

export const useSingleBreed = (id: string | undefined) => {
  const [breed, setBreed] = useState<DogBreed | null>(null)
  const [images, setImages] = useState<BreedImage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    const fetchBreedDetails = async () => {
      setLoading(true)
      try {
        const [breedResponse, imagesResponse] = await Promise.all([
          dogsService.getBreedById(id),
          dogsService.getBreedImages(id),
        ])
        setBreed(breedResponse)
        setImages(imagesResponse)
      } catch (error) {
        setError("Failed to fetch breed details")
      } finally {
        setLoading(false)
      }
    }

    fetchBreedDetails()
  }, [id])

  return { breed, images, loading, error }
}
