import React from 'react'
import ThumbNail from './ThumbNail'



const HeaderNav = () => {

    return (
        <section className=" bg-gray-800 flex justify-between items-center h-[15vh] border-b border-b-gray-700/30 sticky top-0 z-65 p-4">
            <div className="lg:hidden">
                <ThumbNail />
            </div>
            <div className='hidden lg:block'></div>
            <h1 className="text-xl font-bold text-white p-3 ">Jason</h1>
        </section>
    )
}

export default HeaderNav