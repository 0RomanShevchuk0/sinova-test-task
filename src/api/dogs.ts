import { BreedImage } from "./../types/breedImage"
import { DogBreed } from "./../types/breed"
import { createAPIInstance } from "."

const dogsURL = "https://api.thedogapi.com/v1/"

const dogsApiKey = process.env.NEXT_PUBLIC_DOG_API_KEY

if (!dogsApiKey) {
  throw new Error("DOG_API_KEY is not defined")
}

const dogsAPI = createAPIInstance(dogsURL, dogsApiKey)

export const dogsService = {
  async getAllBreeds(): Promise<DogBreed[]> {
    try {
      return (await dogsAPI.get("breeds")).data
    } catch (error) {
      throw error
    }
  },
	
  async searchBreeds(query: string): Promise<DogBreed[]> {
    try {
      return (await dogsAPI.get(`breeds/search?q=${query}`)).data
    } catch (error) {
      throw error
    }
  },

  async getBreedById(id: string): Promise<DogBreed> {
    try {
      return (await dogsAPI.get(`breeds/${id}`)).data
    } catch (error) {
      throw error
    }
  },

  async getBreedImages(id: string): Promise<BreedImage[]> {
    try {
      return (await dogsAPI.get(`images/search/?limit=10&breed_ids=${id}`)).data
    } catch (error) {
      throw error
    }
  },
}
