import { LockIcon, TrafficConeIcon, TwitterIcon } from 'lucide-react'
import React from 'react'





const ConnectTelegram = () => {





    return (
        <article className='grid grid-cols-1 gap-2 md:grid-cols-6 h-[90%]'>

            <section
                className=' bg-[#06030f] border border-gray-900  mb-3 rounded-xl md:col-span-3 p-4'
            >

                <div className='flex items-center gap-3 mb-2'>
                    <div className=' w-[15%] lg:w-[9%] p-3  bg-gradient-to-r from-[#3b3941] to-[#0d0624] rounded-2xl flex justify-center items-center text-black'>
                        <TwitterIcon  className='text-purple-500'/>
                    </div>

                    <div className='w-[90%] flex flex-col justify-center items-start'>
                        <h2 className='text-base mb-1 font-bold'>Connect your Telegram</h2>
                        <button className='border border-gray-500 p-2 text-sm text-center px-5 rounded-xl bg-white/15'>Connect</button>
                    </div>

                </div>
                <button
                    disabled={true}
                    className={` text-white py-1 px-4 disabled:bg-white/25  font-bold text-[15px] flex justify-center items-center rounded-xl gap-2  border border-gray-300 mt-1 cursor-not-allowed`}
                >
                    <LockIcon size={18} />
                    <span className='flex gap-2 justify-center items-center'>
                        1000
                        <TrafficConeIcon size={18} />
                    </span>
                </button>
            </section>

            <section
                className=' bg-[#06030f] border border-gray-900  mb-3 rounded-xl md:col-span-3 p-4'
            >

                <div className='flex items-center gap-3 mb-2'>
                    <div className=' w-[15%] lg:w-[9%] p-3 bg-gradient-to-r from-[#3b3941] to-[#0d0624] rounded-2xl flex justify-center items-center text-black'>
                        <TwitterIcon size={20} className='text-purple-500' />
                    </div>

                    <div className='w-[90%] flex flex-col justify-center items-start'>
                        <h2 className='text-base mb-1 font-bold'>Join DeSpeed Telegram</h2>
                        <div>
                            <button className='border border-gray-500 p-2 text-sm text-center px-5 rounded-xl bg-white/15'>Join</button>
                            <button className='border border-gray-500 p-2 text-sm text-center px-5 rounded-xl ml-2 bg-white/15'>Verify</button>
                        </div>

                    </div>

                </div>
                <button
                    disabled={true}
                    className={` text-white py-1 px-4 disabled:bg-white/25  font-bold text-[15px] flex justify-center items-center rounded-xl gap-2  border border-gray-300 mt-1 cursor-not-allowed`}
                >
                    <LockIcon size={18} />
                    <span className='flex gap-2 justify-center items-center'>
                        1000
                        <TrafficConeIcon size={18} />
                    </span>
                </button>
            </section>

        </article>

    )
}

export default ConnectTelegram