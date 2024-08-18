import { DogBreed } from "@/types/breed"
import { imagePlaceHolder } from "@/utils/contstants"
import Link from "next/link"
import { FC } from "react"

type BreedCardPropsType = {
  breed: DogBreed
}

const Card: FC<BreedCardPropsType> = ({ breed }) => {
  const breedLink = `/breed/${breed.name}-${breed.id}`

  return (
    <div className="w-full bg-dark-gray text-white shadow-lg rounded-lg overflow-hidden mx-auto my-4">
      <Link href={breedLink}>
        <img
          src={breed.image?.url ?? imagePlaceHolder}
          alt={breed.name || "Breed image"}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-100">{breed.name}</h2>
          <p className="text-gray-300 mt-2">{breed.temperament}</p>
          <p className="text-gray-400 text-sm mt-1">{breed.origin}</p>
        </div>
      </Link>
    </div>
  )
}

export default Card
