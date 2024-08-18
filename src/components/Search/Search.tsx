import { FC, useState } from "react"

type SearchProps = {
  onSearch: (query: string) => void
}

const Search: FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("")

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(query)
    }
  }

  return (
    <div className="self-start flex items-center gap-2 h-10">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-80 px-4 h-full border rounded-md outline-none text-black "
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={() => onSearch(query)}
        className="bg-dark-gray text-white h-full px-3 rounded-md"
      >
        Search
      </button>
    </div>
  )
}

export default Search
