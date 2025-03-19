"use client";


import React, { useEffect, useState } from 'react'
import DataTable from '../Tables/dataTable'
import SwitchDemo from '../Helper/SwitchDemo'
import { tableData } from '@/data/tableData';





const ShowTable = () => {



    const [HideIpAddress, setHideIpAddress] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState(true);
    const [tableDatas, setTableData] = useState<any[]>([]);

    
    // Fetch data
    useEffect(() => {

        const fetchData = async () => {

            setIsLoading(true);

            try {

                await new Promise(resolve => {
                    setTimeout(() => {
                        setTableData(tableData);
                        resolve(true)
                    }, 2000)
                });

            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        };

        fetchData();
    }, [])

    





    return (
        <section className=' border border-gray-900 p-4 rounded-lg bg-[#0E0417] text-white'>
            <header className='flex justify-between items-center mb-3'>
                <h2 className='text-base lg:text-xl font-bold  mb-2 '>Speedtest Statistics</h2>

                <article className='flex gap-2 justify-center items-center'>
                    <div>
                        <SwitchDemo
                            setHideIpAddress={setHideIpAddress}
                            HideIpAddress={HideIpAddress}
                        />
                    </div>
                    <h2 className='text-base lg:text-lg font-bold  text-center'>Hide IP Address</h2>
                </article>
            </header>

            <section>
                <DataTable tableData={tableDatas} HideIpAddress={HideIpAddress} isLoading={isLoading} />
            </section>
        </section>
    )
}

export default ShowTable;