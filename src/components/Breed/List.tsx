import { BreedBase } from "@/types/breed"
import { FC } from "react"
import Card from "./Card"

type BreedListPropsType = {
  breeds: BreedBase[]
}

const List: FC<BreedListPropsType> = ({ breeds }) => {
  const BreedComponents = breeds.map((b) => <Card key={b.id} breed={b} />)
  return <div className="w-full grid grid-cols-4 justify-between gap-3">{BreedComponents}</div>
}

export default List
