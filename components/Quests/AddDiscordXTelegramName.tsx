import { BotIcon, CopyIcon, LockIcon, TrafficConeIcon, Twitter } from "lucide-react";




const AddDiscordXTelegramName = () => {


    function handleCopy() {

        window.navigator.clipboard.writeText('၊||၊ DeSpeed ၊||၊')
            .then(() => alert("copied"))

    }


    return (
        <article className='grid grid-cols-1 gap-2 md:grid-cols-6 h-[90%]'>

            <section
                className='border border-gray-700  mb-3 rounded-xl md:col-span-3 p-4'
            >

                <div className='flex items-center gap-3 mb-2'>
                    <div className=' w-[15%] lg:w-[9%] p-3 bg-gray-200 rounded-2xl flex justify-center items-center text-black'>
                        <BotIcon/>
                    </div>

                    <div className='w-[90%] flex flex-col justify-center items-start'>
                        <h2 className='w-full text-base mb-1 flex items-center font-bold'>Add <span className="border-2 border-dotted  rounded-sm text-sm flex items-center gap-1  mx-2"><span className='px-2'>၊||၊ DeSpeed ၊||၊ </span><span className='border-l border-dashed px-2'><CopyIcon onClick={handleCopy} size={18} /></span></span> to Discord Name</h2>
                        <div>
                            <button className='border border-gray-700 p-2 text-sm text-center px-5 rounded-xl'>Add</button>
                            <button className='border border-gray-700 p-2 text-sm text-center px-5 rounded-xl ml-2'>Verify</button>
                        </div>

                    </div>

                </div>
                <button
                    disabled={true}
                    className={` text-white py-1 px-4 disabled:bg-gray-700  font-bold text-[15px] flex justify-center items-center rounded-xl gap-2  border border-gray-300 mt-1 cursor-not-allowed`}
                >
                    <LockIcon size={18} />
                    <span className='flex gap-2 justify-center items-center'>
                        1000
                        <TrafficConeIcon size={18} />
                    </span>
                </button>
            </section>

            <section
                className='border border-gray-700  mb-3 rounded-xl md:col-span-3 p-4'
            >

                <div className='flex items-center gap-3 mb-2'>
                    <div className=' w-[15%] lg:w-[9%] p-3 bg-gray-200 rounded-2xl flex justify-center items-center text-black'>
                        <Twitter />
                    </div>

                    <div className='w-[90%] flex flex-col justify-center items-start'>
                        <h2 className='w-full text-base mb-1 flex items-center font-bold '>Add <span className="border-2 border-dotted  rounded-sm text-sm flex items-center gap-1  mx-2"><span className='px-2'>၊||၊ DeSpeed ၊||၊ </span><span className='border-l border-dashed px-2'><CopyIcon onClick={handleCopy} size={18} /></span></span>to Telegram Name</h2>
                        <div>
                            <button className='border border-gray-700 p-2 text-sm text-center px-5 rounded-xl'>Add</button>
                            <button className='border border-gray-700 p-2 text-sm text-center px-5 rounded-xl ml-2'>Verify</button>
                        </div>

                    </div>

                </div>
                <button
                    disabled={true}
                    className={` text-white py-1 px-4 disabled:bg-gray-700  font-bold text-[15px] flex justify-center items-center rounded-xl gap-2  border border-gray-300 mt-1 cursor-not-allowed`}
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

export default AddDiscordXTelegramName;