import { Box, Button, Card, Checkbox, Heading, Inset, Strong, Text } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

const Reservation = ({ selectedProduct }:any) => {
  return (
    <>
      <section className=" w-full mx-auto h-full max-h-[800px] p-5" id="collection" aria-label="collection">
        {selectedProduct ? (
            <>
             <Heading className="pt-0 pb-5 px-5">{selectedProduct.name}</Heading>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className='overflow-hidden col-span-1 xl:col-span-1 items-center flex justify-center'>
              <Box maxWidth="240px">
                <Card size="2" >
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
                    <Text className='absolute top-3 left-10'><Strong>Fecha</Strong></Text>
                  </Inset>
                  <table className="min-w-full divide-y divide-gray-500 text-center">
                    <tbody>
                      {selectedProduct.Fecha.map((fecha:any, index:number) => (
                        <tr key={index} className="hover:bg-[#fdf1ff] border-b border-1">
                          <td className="py-4 whitespace-nowrap text-sm">
                            <Checkbox size="3" />
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
            <div className='overflow-hidden col-span-1 xl:col-span-1 items-center flex justify-center'>
              <Box maxWidth="240px" className='relative'>
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
                    <Text className='absolute top-3 left-10'><Strong>Hora</Strong></Text>
                  </Inset>
                  <table className="min-w-full divide-y divide-gray-500 text-center">
                    <tbody>
                      {selectedProduct.Hora.map((hora:any, index:any) => (
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
            <div className='overflow-hidden col-span-1 xl:col-span-2'>
              <Box maxWidth="600px">
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
                    <Text className='absolute top-3 left-10'><Strong>Tipo de entrada</Strong></Text>
                  </Inset>
                  <table className="min-w-full divide-y divide-gray-500 text-center">
                    <tbody>
                      {selectedProduct.Tipo.map((tipo:any, index:number) => (
                        <tr key={index} className="hover:bg-[#fdf1ff] border-b border-1">
                          <td className="py-4 whitespace-nowrap text-sm">
                            <Checkbox size="3" />
                          </td>
                          <td className="px-1 py-4 whitespace-nowrap text-left">
                            <Strong>{tipo.name}</Strong> -S/  {tipo.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Card>
              </Box>
            </div>
            <div className='my-4 flex justify-end'>
          <Button variant='classic' size="4">
            Enviar
          </Button>
        </div>
          </div>
          </> 
        ) : (
          <div className="text-center min-h-[800px] flex flex-col justify-center items-center">
          <Image alt="ticket" src="/ticket.png" width={200} height={150}/>
          <Text size="7" className="text-[#6b2980]"><Strong>¡Hola, buen día!</Strong></Text>
          <br/>
          <Text size="4" color="gray">Parece que no has elegido ningún evento <br/>todavía</Text>
        </div>
        
        )
      
        }
     
        
      </section>
    </>
  )
}

export default Reservation
