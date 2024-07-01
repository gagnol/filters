'use client'
import { Button, TextField } from '@radix-ui/themes'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

const SearchBox = ({ onSearch }:any) => {
  const [query, setQuery] = useState('');

  const handleChange = (event:any) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  }

  return (
    <div className="md:inline-flex w-[98%] mx-2">
      <form action="/search" method="GET" className="w-full mx-4 my-2 bg-[#edecf2]" onSubmit={(e) => e.preventDefault()}>
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
          </TextField.Root>
        </div>
      </form>
    </div>
  )
}

export default SearchBox
