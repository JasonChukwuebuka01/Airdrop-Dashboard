import React from 'react'
import ThumbNail from './ThumbNail'



const HeaderNav = () => {

    return (
        <section className="flex justify-between items-center h-[15vh] border-b border-b-gray-700/30 sticky top-0 z-10">
            <div className="lg:hidden">
                <ThumbNail />
            </div>
            <div className='hidden lg:block'></div>
            <h1 className="text-xl font-bold text-gray-800 ">Jason</h1>
        </section>
    )
}

export default HeaderNav