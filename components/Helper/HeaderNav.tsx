import React from 'react'
import ThumbNail from './ThumbNail'
import Image from 'next/image'




const HeaderNav = () => {

    return (
        <section className="flex justify-between items-center h-[14vh] border-b border-b-gray-700/30 sticky top-0 z-10 p-4 bg-[#0E0417]">
            <article className="xl:hidden">
                <ThumbNail />
            </article>
            <article className='hidden lg:block'></article>
            <article className='flex justify-center gap-3'>
                <div className="w-18 h-10 rounded-full overflow-hidden bg-transparent">
                    <Image
                        src="https://robohash.org/jason001"
                        alt="Profile Avatar"
                        width={40}
                        height={40}
                        priority
                        quality={100}
                        loading="eager"
                        className="object-cover w-full h-full"
                    />
                </div>
                <h1 className="text-base font-bold text-white py-3 ">jason001</h1>
            </article>
        </section>
    )
}

export default HeaderNav