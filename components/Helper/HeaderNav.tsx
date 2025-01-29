import React from 'react'
import ThumbNail from './ThumbNail'



const HeaderNav = () => {

    return (
        <section className="flex justify-between items-center mb-6">
            <div className="lg:hidden">
                <ThumbNail />
            </div>
            <div className='hidden lg:block'></div>
            <h1 className="text-xl font-bold text-gray-800 ">Jason</h1>
        </section>
    )
}

export default HeaderNav