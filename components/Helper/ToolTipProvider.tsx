"use client";

import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import {  TrafficConeIcon } from 'lucide-react';


interface props {
    BytesValue: number
};

const ToolTipProvider = ({ BytesValue }: props) => {

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div className='border-2 border-black flex items-center justify-center gap-2 p-1 pl-2 pr-2 rounded-lg'>
                        <span className='font-bold'>{BytesValue}</span>
                        <div><TrafficConeIcon /></div>
                    </div>
                </TooltipTrigger>
                <TooltipContent className='bg-black  rounded-lg w-[110px] p-2 flex flex-col gap-2'>
                    <p className=' font-bold text-sm border-b border-gray-500 p-1'>Boosts</p>

                    <section className='flex justify-between '>
                        <p >Unique IP</p>
                        <p>2x</p>
                    </section>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )
}

export default ToolTipProvider;