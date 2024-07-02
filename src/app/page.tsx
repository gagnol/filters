'use client'
import { useState } from "react";
import Filter from "@/components/Filter";
import Reservation from "@/components/Reservation";
import SearchBox from "@/components/SearchBox";
import { RECOMMENDED_PRODUCTS } from "@/constant/products";
import { Box, Button, Checkbox, Flex, Heading, Text } from "@radix-ui/themes";
import { ChevronsLeft, ChevronsRight, CircleChevronDown } from "lucide-react";

export default function Home({ searchParams }: any) {
  const [query, setQuery] = useState(searchParams.query || '');
  const [page, setPage] = useState(parseInt(searchParams.page, 10) || 1);
  const [filterCategory, setFilterCategory] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<any>(null); // Track the selected product
 
  
  const perPage = 7;

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1); // Reset to first page on new search
  };

  const handleFilterChange = (category: string) => {
    setFilterCategory(category);
    setPage(1); // Reset to first page on new filter
  };

  const handleProductSelect = (product: any) => {
    setSelectedProduct(product);
  };

  // Get unique categories from the products
  const categories = Array.from(new Set(RECOMMENDED_PRODUCTS.map(product => product.category)));

  // Filter and paginate the recommended products
  const filteredProducts = RECOMMENDED_PRODUCTS
    .filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) &&
      (filterCategory ? product.category === filterCategory : true)
    );
  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / perPage);
  const paginatedProducts = filteredProducts.slice((page - 1) * perPage, page * perPage);

  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;

  const pageNumbers = [];
  const offsetNumber = 3;
  for (let i = page - offsetNumber; i <= page + offsetNumber; i++) {
    if (i >= 1 && i <= totalPages) {
      pageNumbers.push(i);
    }
  }

  return (
    <section className="max-w-screen-xl w-full mx-auto my-2 h-full bg-[#f4f3f9]">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className='overflow-hidden col-span-1 xl:col-span-2 min-h-[850px]'>
          <Box className="rounded-xl mx-2 my-5 bg-[#ffff] min-h-[850px] shadow-lg">
            <Heading size="8" className="pt-5 px-5 text-[#6b2980]">Eventos Joinnus</Heading>
            <SearchBox onSearch={handleSearch} />
            <Box className="mx-5 pt-1 px-5 flex border-2 rounded-xl">
              <Heading size="5" className="pt-1 px-4">Filtra los Eventos</Heading>
              <Flex className="justify-between">
              <Filter categories={categories} onFilterChange={handleFilterChange} />
               <Button 
               size="3"
               mb="2"
               mx="1"
               variant="surface" 
               color="gray" 
               onClick={() => setFilterCategory('')}>
                  Limpiar Filtros
                  </Button>
                </Flex>
              </Box>
            <Box className="mx-5 my-5 pt-5 px-5 flex border-2 rounded-xl">
            <table className="min-w-full divide-y divide-gray-500 text-center min-h-[500px]">
                <thead className="bg-[#f4f3f9]">
                  <tr>
                    <th scope="col" className="px-2 py-3 text-xs font-medium tracking-wider">
                      <Checkbox size="3" />
                    </th>
                    <th scope="col" className="px-1 py-3 text-xs font-medium tracking-wider w-3/4 text-left">
                      <Text size="2">Todos los Eventos</Text>
                    </th>
                    <th scope="col" className="px-1 py-3 text-xs font-medium tracking-wider text-center">
                      N&#x2070; Funciones
                    </th>
                    <th scope="col" className="px-1 py-3 text-xs font-medium tracking-wider text-center">
                      <CircleChevronDown />
                    </th>
                  </tr>
                </thead>
                <tbody className="min-h-[500px]">
                  {paginatedProducts.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-4 whitespace-nowrap text-sm">
                        No se encontraron resultados
                      </td>
                    </tr>
                  ) : (
                    paginatedProducts.map((item, index) => (
                      <tr key={item.id} className={`hover:bg-[#fdf1ff] border-b border-1
                       ${paginatedProducts.length < 7 ? 'h-[62px]' : ''}`}>
                        <td className="px-2 py-4 whitespace-nowrap text-sm">
                         <input 
                          type="checkbox" 
                          checked={selectedProduct?.id === item.id} 
                          onChange={() => handleProductSelect(item)}
                         />
                        </td>
                        <td className="px-1 py-4 whitespace-nowrap text-left">
                          {item.name.substring(0, 30)}
                        </td>
                        <td className="px-1 py-4 whitespace-nowrap text-sm font-bold text-center">
                          {item.countInStock}
                        </td>
                        <td className="px-1 py-4 text-center">
                          <Button variant="ghost" size="1">
                            Dato
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                    {paginatedProducts.length < 7 && (
                    Array.from({ length: 7 - paginatedProducts.length }).map((_, index) => (
                      <tr key={`empty-${index}`} className="h-[62px]">
                        <td colSpan={4}></td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              <div className="flex justify-center items-center my-5">
                <div className="flex border-[1px] gap-4 rounded-[10px] border-light-green p-4">
                  {page === 1 ? (
                    <Button size="2" variant='surface' color='gray' aria-disabled="true">
                      Anterior
                    </Button>
                  ) : (
                    <Button size="2" variant='surface' onClick={() => setPage(prevPage)}>
                      <ChevronsLeft />
                      Anterior
                    </Button>
                  )}
                  {pageNumbers.map((pageNumber, index) => (
                    <button
                      className={`w-8 rounded-full ${page === pageNumber ? "bg-green-500 text-white" : "bg-gray-300 text-black"}`}
                      key={index}
                      onClick={() => setPage(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  ))}
                  {page === totalPages ? (
                    <Button size="2" variant='surface' color='gray' aria-disabled="true">
                      Siguiente
                    </Button>
                  ) : (
                    <Button size="2" variant='surface' onClick={() => setPage(nextPage)}>
                      Siguiente
                      <ChevronsRight />
                    </Button>
                  )}
                </div>
              </div>
            </Box>
          </Box>
        </div>
        <div className='overflow-hidden col-span-1 xl:col-span-3 min-h-[850px]'>
          <Box className="rounded-xl mx-2 my-5 bg-[#ffff] min-h-[850px] shadow-lg">
            <Box className="p-5">
              <Reservation selectedProduct={selectedProduct} />
            </Box>
          </Box>
        </div>
      </div>
    </section>
  );
}
