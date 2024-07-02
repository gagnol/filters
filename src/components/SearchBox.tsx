'use client'
import { TextField } from '@radix-ui/themes'
import { Cross2Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { useState, ChangeEvent, FormEvent } from 'react'

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  }

  const clearQuery = () => {
    setQuery('');
    onSearch('');
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <div className="md:inline-flex w-[98%] mx-2">
      <form 
      action="/search" 
      method="GET" 
      className="w-full mx-4 my-2 bg-[#edecf2]" 
      onSubmit={handleSubmit}>
        <div className="join flex w-full">
          <TextField.Root
            size="3"
            value={query}
            onChange={handleChange}
            name="q"
            placeholder="Busca el Evento"
            className="w-full"
          >
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
            {query && (
              <TextField.Slot onClick={clearQuery} style={{ cursor: 'pointer' }}>
                <Cross2Icon height="16" width="16" radius="full"/>
              </TextField.Slot>
            )}
          </TextField.Root>
        </div>
      </form>
    </div>
  )
}

export default SearchBox
