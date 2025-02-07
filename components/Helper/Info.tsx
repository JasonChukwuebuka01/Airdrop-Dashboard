"use client";

import { InfoIcon } from 'lucide-react';
import React from 'react';





const Info = () => {



    
    return (
        <section className='relative flex group '>
           
            <article className=' bg-gray-800/90 text-white hidden absolute -top-14  lg:-top-5 -left-80   lg:-left-[360] w-[360px] p-1 z-40 justify-center items-center group-hover:flex transition-all duration-300 transform opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100'>
                <p className='w-[85%] text-xs font-bold p-2'>Successful Referral: When Referee activates <br/>the Despeed account accomplishes 15 speed test</p>
            </article>

            <article className='flex justify-center items-center p-1 cursor-pointer'>
                <InfoIcon size={19} />
            </article>
        </section>
    )
};



export default Info;