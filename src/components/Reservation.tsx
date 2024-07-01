import { Box, Button, Card, Checkbox, Inset, Strong, Text } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

const Reservation = () => {
    return (
        <>
            <section className=" w-full mx-auto h-full p-5"
                id="collection" aria-label="collection">
                <div className="grid gap-8 grid-cols-1 
            sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className='overflow-hidden col-span-1 xl:col-span-1 items-center 
                    flex justify-center'>
                        <Box maxWidth="240px">
                            <Card size="2">
                                <Inset clip="padding-box" side="top" pb="current">
                                    <Image width={140} height={50}
                                        src="/fondo.png"
                                        alt="Bold typography"
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
                                        <tr className="hover:bg-[#fdf1ff] border-b border-1">
                                            <td className=" py-4 whitespace-nowrap text-sm">
                                                <Checkbox size="3" />
                                            </td>
                                            <td className="px-1 py-4 whitespace-nowrap text-left">
                                                17/05/2024
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-[#fdf1ff] border-b border-1">
                                            <td className=" py-4 whitespace-nowrap text-sm">
                                                <Checkbox size="3" />
                                            </td>
                                            <td className="px-1 py-4 whitespace-nowrap text-left">
                                                18/05/2024
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Card>
                        </Box>

                    </div>
                    <div className='overflow-hidden col-span-1 xl:col-span-1 items-center flex justify-center'>
                        <Box maxWidth="240px" className='relative'>
                            <Card size="2">
                                <Inset clip="padding-box" side="top" pb="current">
                                    <Image width={140} height={50}
                                        src="/fondo.png"
                                        alt="Bold typography"
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
                                        <tr className="hover:bg-[#fdf1ff] border-b border-1">
                                            <td className=" py-4 whitespace-nowrap text-sm">
                                                <Checkbox size="3" />
                                            </td>
                                            <td className="px-1 py-4 whitespace-nowrap text-left">
                                                04:30 P.M.                                            </td>
                                        </tr>
                                        <tr className="hover:bg-[#fdf1ff] border-b border-1">
                                            <td className=" py-4 whitespace-nowrap text-sm">
                                                <Checkbox size="3" />
                                            </td>
                                            <td className="px-1 py-4 whitespace-nowrap text-left">
                                                07:30 P.M.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Card>
                        </Box>
                    </div>
                    <div className='overflow-hidden col-span-1 xl:col-span-2'>
                        <Box maxWidth="600px">
                            <Card size="2">
                                <Inset clip="padding-box" side="top" pb="current">
                                    <Image width={140} height={50}
                                        src="/fondo.png"
                                        alt="Bold typography"
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
                                        <tr className="hover:bg-[#fdf1ff] border-b border-1">
                                            <td className=" py-4 whitespace-nowrap text-sm">
                                                <Checkbox size="3" />
                                            </td>
                                            <td className="px-1 py-4 whitespace-nowrap text-left">
                                                <Strong>Silla Palco</Strong> -S/192.00
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-[#fdf1ff] border-b border-1">
                                            <td className=" py-4 whitespace-nowrap text-sm">
                                                <Checkbox size="3" />
                                            </td>
                                            <td className="px-1 py-4 whitespace-nowrap text-left">
                                                <Strong>Silla Palco Niños/Adultos</Strong>-S/162.00
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Card>
                        </Box>
                    </div>
                </div>
                <div className='my-4 flex justify-end'>
                    <Button variant='classic' size="4">
                        Enviar
                    </Button>
                </div>
            </section>
        </>
    )
}

export default Reservation
