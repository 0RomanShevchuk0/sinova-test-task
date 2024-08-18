"use client"
import { useParams } from "next/navigation"
import { FC } from "react"
import { useSingleBreed } from "@/hooks/useSingleBreed"
import { imagePlaceHolder } from "@/utils/contstants"

const BreedPage: FC = () => {
  const { slug } = useParams()
  const id = slug.toString().split("-").at(-1)

  const { breed, images, loading, error } = useSingleBreed(id)

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  if (!breed) {
    return <p>No breed found.</p>
  }

  const Gallery = images.map((image, index) => (
    <img
      key={index}
      src={image.url}
      alt={`${breed.name} ${index + 1}`}
      className="w-full h-48 object-cover rounded-md"
    />
  ))

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto bg-dark-gray rounded-lg shadow-lg p-6">
        <div className="flex items-center">
          <img
            src={images[0]?.url || imagePlaceHolder}
            alt={breed.name}
            className="w-48 h-48 object-cover rounded-md mr-6"
          />
          <div>
            <h1 className="text-4xl font-bold">{breed.name}</h1>
            <p className="mt-2 text-gray-400">{breed.origin}</p>
            <p className="mt-2">{breed.description}</p>
            <p className="mt-4">{`Life Span: ${breed.life_span}`}</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Temperament</h2>
          <p className="mt-2">{breed.temperament}</p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">{Gallery}</div>
        </div>
      </div>
    </div>
  )
}

export default BreedPage
