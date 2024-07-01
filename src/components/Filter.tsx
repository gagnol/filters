'use client'
import { TextField } from '@radix-ui/themes'
import { useSearchParams } from 'next/navigation'
import { ChevronDown, FilterIcon } from 'lucide-react'

const Filter = () => {
  const searchParams = useSearchParams()
  const q = searchParams.get('q') || ''

  return (
    <div className=" md:inline-flex w-full">
      <form action="/search" method="GET" className="w-full mx-3 my-2 ">
        <div className="join flex w-full">

          <TextField.Root
            size="3"
            defaultValue={q}
            name="q"
            placeholder="Filtros"
            className="w-full"
          >
            <TextField.Slot>
            <FilterIcon height="16" width="16"/>
            
            </TextField.Slot>
          </TextField.Root>

        </div>
      </form>
    </div>
  )
}

export default Filter
