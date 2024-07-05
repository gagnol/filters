"use client"
import { Box, Button, Card, Checkbox, Heading, Inset, Strong, Text } from '@radix-ui/themes';
import { CheckIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';


const Reservation = ({ selectedProduct,d}: any) => {
  return (
    <>
      <section className=" w-full mx-auto h-full max-h-[850px] min-h-[850px]
       px-[32px] py-[14px] relative shadow-xl">
        {selectedProduct ? (
          <>
            <Heading className="pt-0 pb-[16px] text-[32px]">
              {selectedProduct.name}
            </Heading>
            <div className="grid grid-cols-1 
            sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className='overflow-hidden col-span-1 items-center flex justify-center'>
                <Box maxWidth="140px" className="max-h-[300px]  xl:min-h-[576px]">
                  <Card size="2">
                    <Inset clip="padding-box" side="top" pb="current">
                      <Image width={140} height={50} src="/fondo.png" alt="Bold typography"
                        style={{
                          display: 'block',
                          objectFit: 'cover',
                          width: '100%',
                          height: 50,
                          backgroundColor: 'var(--gray-5)',
                        }}
                      />
                      <Text className='absolute top-3 left-4 text-gray-500'>
                      < Checkbox size="3" /> 
                      &nbsp;<Strong>Fecha</Strong>
                      </Text>
                    </Inset>
                    <table className="min-w-full divide-y divide-gray-500 text-center">
                      <tbody>
                        {selectedProduct.Fecha.map((fecha: any, index: number) => (
                          <tr key={index} className="hover:bg-[#fdf1ff] border-b border-1">
                            <td className="py-4 whitespace-nowrap text-sm">
                           < Checkbox size="3" />
                            </td>
                            <td className="px-1 py-4 whitespace-nowrap text-left">
                              {fecha}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Card>
                </Box>
              </div>
              <div className='overflow-hidden col-span-1 
              items-center flex justify-center'>
                <Box maxWidth="140px" className="max-h-[300px] 
                 xl:min-h-[576px] relative">
                  <Card size="2">
                    <Inset clip="padding-box" side="top" pb="current">
                      <Image width={140} height={50} src="/fondo.png" alt="Bold typography"
                        style={{
                          display: 'block',
                          objectFit: 'cover',
                          width: '100%',
                          height: 50,
                          backgroundColor: 'var(--gray-5)',
                        }}
                      />
                     <Text className='absolute top-3 left-4 text-gray-500'>
                      < Checkbox size="3" /> 
                      &nbsp;<Strong>Hora</Strong>
                      </Text>
                   </Inset>
                    <table className="min-w-full divide-y divide-gray-500 text-center">
                      <tbody>
                        {selectedProduct.Hora.map((hora: any, index: any) => (
                          <tr key={index} className="hover:bg-[#fdf1ff] border-b border-1">
                            <td className="py-4 whitespace-nowrap text-sm">
                              <Checkbox size="3" />
                            </td>
                            <td className="px-1 py-4 whitespace-nowrap text-left">
                              {hora}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Card>
                </Box>
              </div>
              <div className='overflow-hidden col-span-2'>
                <Box maxWidth="325px" className="max-h-[300px]  xl:min-h-[576px] overflow-y-scroll xl:overflow-y-hidden">
                  <Card size="2">
                    <Inset clip="padding-box" side="top" pb="current">
                      <Image width={140} height={50} src="/fondo.png" alt="Bold typography"
                        style={{
                          display: 'block',
                          objectFit: 'cover',
                          width: '100%',
                          height: 50,
                          backgroundColor: 'var(--gray-5)',
                        }}
                      />
                     <Text className='absolute top-3 left-4 text-gray-500'>
                      < Checkbox size="3" /> 
                      &nbsp; <Strong>Tipo de Entrada</Strong>
                      </Text>
                    </Inset>
                    <table className="min-w-full divide-y divide-gray-500 text-center">
                      <tbody>
                        {selectedProduct.Tipo.map((tipo: any, index: number) => (
                          <tr key={index} className="hover:bg-[#fdf1ff] border-b border-1">
                            <td className="py-4 whitespace-nowrap text-sm">
                              <Checkbox size="3" />
                            </td>
                            <td className="px-1 py-4 whitespace-nowrap 
                            text-left text-gray-500">
                              <Text size="1">
                              <Strong>{tipo.name}</Strong> -S/ ${tipo.price}
                              </Text>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Card>
                </Box>
              </div>
            </div>
            <div className="absolute bottom-6 right-10">
              <Button 
                variant='classic' 
                style={{ width: '172px', height: '44px', backgroundColor:'#0dcbb4' }}>
                <Text size="4">Enviar</Text>
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center min-h-[860px] flex flex-col justify-center 
          items-center p-[40px]">
            <Image alt="ticket" src="/ticket.png" width={200} height={150} className='mb-[24px]' />
            <div className='w-[360px] px-[20px] pt-[8px] pb-[20px]'>
              <Text className="text-[#6b2980] text-[26px] pb-[4px]">
                <Strong>
                  ¡Hola, buen día!
                </Strong>
              </Text>
              <br />
              <Text size="4" color="gray">
                Parece que no has elegido ningún evento todavía.
              </Text>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default Reservation;
