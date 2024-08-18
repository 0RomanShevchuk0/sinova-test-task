import { dogsService } from "@/api/dogs"
import { DogBreed } from "@/types/breed"
import { useEffect, useState } from "react"

export const useBreeds = () => {
  const [dogs, setDogs] = useState<DogBreed[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBreeds = async () => {
      setLoading(true)
      try {
        const response = await dogsService.getAllBreeds()
        setDogs(response)
      } catch (error) {
        setError("Failed to fetch data")
      } finally {
        setLoading(false)
      }
    }
    fetchBreeds()
  }, [])

  return { dogs, setDogs, loading, error }
}
