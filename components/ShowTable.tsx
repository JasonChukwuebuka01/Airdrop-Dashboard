import React from 'react'
import DataTable from './Helper/Table'

const ShowTable = () => {

    return (
        <section className='border-2 border-red-500'>
            <header className='flex justify-between items-center '>
                <h2>Speedtest Statistics</h2>

                <article className='flex gap-2'>
                    <span></span>
                    <h2>Hide IP Address</h2>
                </article>
            </header>

            <DataTable />
        </section>
    )
}

export default ShowTable