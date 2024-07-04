"use client"
import { Button, DropdownMenu } from '@radix-ui/themes';
import { ChevronDown } from 'lucide-react';
import React from 'react';

const Dropdown = ({ eventos, handleEventoChange }: { eventos: string[], handleEventoChange: (evento: string) => void }) => {
    return (
        <div className="flex justify-center items-center h-full">
            <DropdownMenu.Root>
                <DropdownMenu.Trigger className="flex items-center">
                    <Button variant="ghost" rounded-full >
                    <ChevronDown />
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content style={{ width: "full" }}>
                    {eventos.map((evento) => (
                        <DropdownMenu.Item key={evento} onSelect={() => handleEventoChange(evento)}>
                            {evento}
                        </DropdownMenu.Item>
                    ))}
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </div>
    );
};

export default Dropdown;
