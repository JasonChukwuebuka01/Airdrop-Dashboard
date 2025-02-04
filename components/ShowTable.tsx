import React from 'react'
import DataTable from './Helper/dataTable'
import SwitchDemo from './Helper/SwitchDemo'

const ShowTable = () => {

    return (
        <section className=' border border-gray-300 p-2 rounded-lg pb-8 '>
            <header className='flex justify-between items-center '>
                <h2 className='text-base lg:text-xl font-bold text-gray-800 mb-2 '>Speedtest Statistics</h2>

                <article className='flex gap-2 justify-center items-center'>
                    <div className=''>
                        <SwitchDemo />
                    </div>
                    <h2 className='text-base lg:text-lg font-bold text-gray-800 text-center'>Hide IP Address</h2>
                </article>
            </header>

            <section className='border border-gray-300 rounded-xl'>
                <DataTable />
            </section>
        </section>
    )
}

export default ShowTable