'use client'
import { Button, DropdownMenu, TextField } from '@radix-ui/themes'
import { useState } from 'react'
import { FilterIcon } from 'lucide-react'

interface FilterProps {
  categories: string[];
  onFilterChange: (category: string) => void;
}

const Filter: React.FC<FilterProps> = ({ categories, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="md:inline-flex w-full">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger >
          <TextField.Root
            size="3"
            name="q"
            placeholder="Filtros"
            className="w-full"
          >
            <TextField.Slot>
              <FilterIcon height="16" width="16" />
              Filtros
              <DropdownMenu.TriggerIcon />
            </TextField.Slot>
          </TextField.Root>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content style={{width:"full"}}>
          {categories.map((category) => (
            <DropdownMenu.Item key={category} onSelect={() => handleCategoryChange(category)}>
              {category}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};

export default Filter;
