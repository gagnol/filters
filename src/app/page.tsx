'use client';

import { useState } from 'react';
import Filter from '@/components/Filter';
import Reservation from '@/components/Reservation';
import SearchBox from '@/components/SearchBox';
import Dropdown from '@/components/Dropdown'; // Import the Dropdown component
import { RECOMMENDED_PRODUCTS } from '@/constant/products';
import { Box, Button, Flex, Heading, Text } from '@radix-ui/themes';
import { CheckIcon, ChevronsLeft, ChevronsRight } from 'lucide-react';
import * as Checkbox from '@radix-ui/react-checkbox';
import Image from 'next/image';

export default function Home({ searchParams }: any) {
  const [query, setQuery] = useState(searchParams.query || '');
  const [page, setPage] = useState(parseInt(searchParams.page, 10) || 1);
  const [filterCategory, setFilterCategory] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<any>(null); // Track the selected product
  const [selectedEvento, setSelectedEvento] = useState<string>(''); // Track the selected evento
  const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(false); // Track the checkbox state
  const perPage = 7;

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1); // Reset to first page on new search
  };

  const handleFilterChange = (category: string) => {
    setFilterCategory(category);
    setPage(1); // Reset to first page on new filter
  };

  const handleCategoryChange = (category: string) => {
    setFilterCategory(category);
  };

  const handleEventoChange = (evento: string) => {
    setSelectedEvento(evento);
  };

  const handleProductSelect = (item: any) => {
    if (selectedProduct?.id === item.id) {
      setSelectedProduct(null); // Uncheck the checkbox
    } else {
      setSelectedProduct(item); // Check the checkbox
      setFilterCategory(''); // Clear filterCategory
      setSelectedEvento(''); // Clear selectedEvento
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setIsCheckboxChecked(checked);
    if (checked) {
      setFilterCategory('');
      setSelectedProduct(null);
      setSelectedEvento('');
    }
  };

  // Get unique categories and eventos from the products
  const categories = Array.from(new Set(RECOMMENDED_PRODUCTS.map(product => product.category)));
  const eventos = Array.from(new Set(RECOMMENDED_PRODUCTS.map(product => product.eventosCms)));

  // Filter and paginate the recommended products
  const filteredProducts = RECOMMENDED_PRODUCTS
    .filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) &&
      (filterCategory ? product.category === filterCategory : true) &&
      (selectedEvento ? product.eventosCms === selectedEvento : true) // Filter by "eventosCms" field
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
    <section className="md:max-w-screen-lg max-w-screen-xl w-full 
    mx-auto bg-gray-200 min-h-screen px-4 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mb-2 gap-4">
        <div className="overflow-hidden col-span-1 xl:col-span-2 max-h-[850px] min-h-[850px]">
          <Box className="rounded-xl bg-[#ffff] min-h-screen pt-4 pb-2 px-4">
            <Heading className="text-[#6b2980] text-3xl pb-4">
              Eventos Joinnus
            </Heading>
            <SearchBox onSearch={handleSearch} />
            <Box className="flex border-2 rounded-xl px-4 py-2 mt-4">
              <Heading size="5" className="pb-1">Filtra los Eventos</Heading>
              <Flex className="justify-between w-full">
                <Filter categories={categories} onFilterChange={handleFilterChange} />
                <Button
                  size="3"
                  mb="2"
                  mx="1"
                  variant="surface"
                  color="gray"
                  onClick={() => {
                    setFilterCategory('');
                    setSelectedEvento('');
                  }}>
                  Limpiar Filtros
                </Button>
              </Flex>
            </Box>
            <Box className="my-4 flex border-2 rounded-xl ">
              <table className="min-w-full divide-y divide-gray-500 text-center min-h-[384px]">
                <thead className="bg-[#f4f3f9]">
                  <tr>
                    <th scope="col" className="px-1 py-3 text-xs font-medium tracking-wider w-[48px] h-[40px]">
                      <Checkbox.Root
                        className={`
                          flex h-[18px] w-[18px] appearance-none items-center 
                          justify-center rounded-[4px] border-gray-300 border-2
                          outline-none ${isCheckboxChecked ? 'bg-[#0dcbb4]' : 'bg-white'}
                        `}
                        checked={isCheckboxChecked}
                        onCheckedChange={handleCheckboxChange}
                      >
                        <Checkbox.Indicator>
                          <CheckIcon width="14px" className="text-white font-bold rounded-[4px]" />
                        </Checkbox.Indicator>
                      </Checkbox.Root>
                    </th>
                    <th scope="col" className="px-1 py-3 text-xs font-medium tracking-wider text-left w-[199px]">
                      <Text size="2" >Todos los Eventos</Text>
                    </th>
                    <th scope="col" className="px-1 py-3 text-xs font-medium tracking-wider
                     text-center w-[97px]">
                      <Text  size="2">N&#x2070; Funciones</Text>
                    </th>
                    <th scope="col" className="text-center w-[71px]">
                      <Dropdown eventos={eventos} handleEventoChange={handleEventoChange} />
                    </th>
                  </tr>
                </thead>
                <tbody className="min-h-[384px]">
                  {paginatedProducts.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-4 whitespace-nowrap text-sm">
                        No se encontraron resultados
                      </td>
                    </tr>
                  ) : (
                    paginatedProducts.map((item, index) => (
                      <tr
                        key={item.id}
                        className={`hover:bg-[#fdf1ff] border-b border-1 w-[97px] h-[40px]
                          ${paginatedProducts.length < 7 ? 'h-[40px]' : ''}
                          ${selectedProduct?.id === item.id ? 'bg-[#fdf1ff]' : ''}`}
                      >
                        <td className="p-1 whitespace-nowrap text-sm w-[48px] h-[40px]">
                          <Checkbox.Root
                            className={`
                              flex h-[18px] w-[18px] appearance-none items-center 
                              justify-center rounded-[4px] border-gray-300 border-2
                              outline-none ${selectedProduct?.id === item.id ? 'bg-[#0dcbb4]' : 'bg-white'}
                            `}
                            checked={selectedProduct?.id === item.id}
                            onCheckedChange={() => handleProductSelect(item)}
                          >
                            <Checkbox.Indicator>
                              <CheckIcon width="14px" className="text-white font-bold rounded-[4px]" />
                            </Checkbox.Indicator>
                          </Checkbox.Root>
                        </td>
                        <td className="px-1 py-4 whitespace-nowrap text-left text-gray-500 w-[199px]">
                          {item.name.substring(0, 30)}
                        </td>
                        <td className="px-1 py-4 whitespace-nowrap text-sm text-center text-gray-500 w-[97px] h-[40px]">
                          {item.countInStock}
                        </td>
                        <td className="px-1 py-4 text-center w-[71px]">
                          {item.eventosCms === "Eventos Cargados en CMS" ? (
                            <Image alt="dato" width={68} height={16} src="/dato.png"
                            style={{ width: 68, height: "auto" }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            loading='lazy'
                            />
                          ) : (
                            ''
                          )}
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
              <div className="flex justify-center items-center my-5 w-[415px] mx-auto h-[36px] mb-[16px] min-w-[216px] max-w-[216px]">
                <div className="flex border-[1px] gap-4 rounded-[10px] border-light-green">
                  {page === 1 ? (
                    <Button size="1" variant="surface" color="gray" aria-disabled="true">
                      <ChevronsLeft />
                    </Button>
                  ) : (
                    <Button size="1" variant="surface" onClick={() => setPage(prevPage)}>
                      <ChevronsLeft />
                    </Button>
                  )}
                  {pageNumbers.map((pageNumber, index) => (
                    <button
                      className={`w-[24px] h-[24px] rounded-full ${page === pageNumber ? "bg-[#0dcbb4] text-white" : "bg-gray-300 text-black"}`}
                      key={index}
                      onClick={() => setPage(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  ))}
                  {page === totalPages ? (
                    <Button size="1" variant="surface" color="gray" aria-disabled="true">
                      <ChevronsRight />
                    </Button>
                  ) : (
                    <Button size="1" variant="surface" onClick={() => setPage(nextPage)}>
                      <ChevronsRight />
                    </Button>
                  )}
                </div>
              </div>
              <div className="mx-auto pb-5 flex 
              justify-center items-center w-full h-[44px]">
                <Button
                  variant="classic"
                  style={{
                    width: '80%',
                    maxWidth: 'full',
                    height: '44px',
                    backgroundColor: '#0dcbb4'
                  }}>
                  <Text size="4">Enviar</Text>
                </Button>
              </div>
            </Box>
          </Box>
        </div>
        <div className="overflow-hidden col-span-1 xl:col-span-3 min-h-screen">
          <Box className="rounded-xl ml-4 bg-[#ffff] min-h-screen ">
            <Box>
              <Reservation selectedProduct={selectedProduct} />
            </Box>
          </Box>
        </div>
      </div>
    </section>
  );
}
