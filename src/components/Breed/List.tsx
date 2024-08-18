import { FC } from "react"
import Card from "./Card"
import { DogBreed } from "@/types/breed"

type BreedListPropsType = {
  breeds: DogBreed[]
}

const List: FC<BreedListPropsType> = ({ breeds }) => {
  const BreedComponents = breeds.map((b) => <Card key={b.id} breed={b} />)
  return <div className="w-full grid grid-cols-4 justify-between gap-3">{BreedComponents}</div>
}

export default List
