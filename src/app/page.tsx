"use client"
import { dogsService } from "@/api/dogs"
import List from "@/components/Breed/List"
import Search from "@/components/Search/Search"
import { useBreeds } from "@/hooks/useBreeds"

export default function Home() {
  const { dogs, setDogs, loading, error } = useBreeds()

  const handleSeatch = async (query: string) => {
    if (query.trim().length) {
      const response = await dogsService.searchBreeds(query)
      setDogs(response)
    } else {
      const response = await dogsService.getAllBreeds()
      setDogs(response)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <h1 className="text-4xl font-bold my-4">Breeds</h1>
      {loading && <p className="text-xl">Loading...</p>}
      {error && <p className="text-xl text-red-500">{error}</p>}
      {!loading && !error && (
        <>
          <Search onSearch={handleSeatch} />
          {dogs.length !== 0 ? <List breeds={dogs} /> : <p className="text-xl">No breed found.</p>}
        </>
      )}
    </main>
  )
}
