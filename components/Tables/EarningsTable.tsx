"use client";

import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Clock1Icon, LoaderPinwheelIcon, TrafficConeIcon } from "lucide-react" // Import loader icon
import Image from 'next/image';




interface DataTableProps {
    tableData: any[]
    isLoading?: boolean
}




export default function EarningsTable({ tableData, isLoading }: DataTableProps) {
    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Calculate total pages
    const totalPages = Math.ceil(tableData.length / itemsPerPage)

    // Get current page data
    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage
        return tableData.slice(startIndex, endIndex)
    }





    return (

        <section className="w-full relatve ">
            <Table className=' overflow-scroll border border-gray-300 rounded-lg'>
                <TableHeader className='rounded-lg mb-4'>
                    <TableRow className='border-b border-gray-300 text-base rounded-lg'>
                        <TableHead className="font-bold p-4">Cycle</TableHead>
                        <TableHead className='font-bold p-4'>Start/End Date</TableHead>
                        <TableHead className='font-bold p-4'>Referral Reward</TableHead>
                        <TableHead className='font-bold p-4'>Speedtest Earning</TableHead>
                        <TableHead className="font-bold p-4">Referral Commission</TableHead>
                        <TableHead className="font-bold p-4">Quest Earning</TableHead>
                        <TableHead className="font-bold p-4">Total</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        getCurrentPageData().length > 0 ?
                            (
                                getCurrentPageData().map((data, index) => (
                                    <TableRow
                                        key={index}
                                        className='border border-gray-300 text-base rounded-lg p-4 transition-all duration-300 ease-in-out hover:bg-gray-300 hover:shadow-md overflow-auto'
                                    >
                                        <TableCell className="p-4 w-[130px] min-w-[130px] max-w-[130px] whitespace-pre-wrap">{data.Cycle}</TableCell>
                                        <TableCell className="p-4 w-[220px] min-w-[220px] max-w-[220px] whitespace-pre-wrap">

                                            <div className='flex'>
                                                <section className='items-center flex justify-center flex-col mr-1 gap-[2px]'>
                                                    <span className='w-2 h-[10px] border-none rounded-full bg-purple-600 flex items-center justify-center'></span>
                                                    <div className='flex flex-col gap-[0.7px] items-center justify-center'>
                                                        <span className='w-[0.1px] h-1  bg-purple-600  border-none  outline-none'></span>
                                                        <span className='w-[0.1px] h-1  bg-purple-600  border-none outline-none'></span>
                                                        <span className='w-[0.1px] h-1  bg-purple-600 border-none  outline-none'></span>
                                                    </div>
                                                    <span className='w-2 h-[10px] border-none rounded-full  bg-purple-600 flex items-center justify-center'></span>
                                                </section>



                                                <section>
                                                    <article>
                                                        <div className='flex items-center'>{data.StartDate}</div>

                                                        <div>{data.EndDate}</div>
                                                    </article>
                                                </section>


                                                <section className="ml-3">
                                                    <div className='flex items-center justify-center'><Clock1Icon size={15}/>{data.StartTime}</div>
                                                    <div className='flex items-center justify-center' > <Clock1Icon size={15}/>{data.EndTime}</div>
                                                </section>

                                            </div>

                                        </TableCell>
                                        <TableCell className="p-4 w-[180px] min-w-[180px] max-w-[180px] whitespace-nowrap ">
                                            <div className='border border-black lg:w-[60%] flex items-center justify-center gap-3 p-1 px-4 rounded-lg'>
                                                <span className='font-bold '> {data.ReferralReward}</span>
                                                <div><TrafficConeIcon /></div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="p-4 w-[180px] min-w-[180px] max-w-[180px] whitespace-nowrap ">
                                            <div className='border border-black lg:w-[60%] flex items-center justify-center gap-3 p-1 px-4 rounded-lg'>
                                                <span className='font-bold '>{data.SpeedtestEarning}</span>
                                                <div><TrafficConeIcon /></div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="p-4 w-[200px] min-w-[200px] max-w-[200px] whitespace-nowrap">
                                            <div className='border border-black lg:w-[60%] flex items-center justify-center gap-3 p-1 px-4 rounded-lg'>
                                                <span className='font-bold '>{data.ReferralCommission}</span>
                                                <div><TrafficConeIcon /></div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="p-4 w-[150px] min-w-[150px] max-w-[150px]  whitespace-break-spaces">
                                            <div className='border border-black lg:w-[130px] flex items-center justify-center gap-3 p-1 px-4 rounded-lg'>
                                                <span className='font-bold '>{data.QuestEarning}</span>
                                                <div><TrafficConeIcon /></div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="p-4 w-[200px] min-w-[200px] max-w-[200px]  whitespace-break-spaces">
                                            <div className='border border-black lg:w-[130px] flex items-center justify-center gap-3 p-1 px-4 rounded-lg'>
                                                <span className='font-bold '> {data.Total}</span>
                                                <div><TrafficConeIcon /></div>
                                            </div>
                                        </TableCell>

                                    </TableRow>
                                ))

                            ) : isLoading === false ?

                                (
                                    <TableRow className='w-full border-2 border-black'>
                                        <TableCell colSpan={5} className="h-[400px] text-center">
                                            <div className="w-full h-full flex flex-col items-center justify-center">
                                                <div className="w-full max-w-[200px] h-auto">
                                                    <Image
                                                        src="https://app.despeed.net/media/campaign/no-data.png"
                                                        alt="No referral data"
                                                        width={100}
                                                        height={100}
                                                        priority
                                                        className="w-full h-auto object-contain"
                                                    />
                                                </div>
                                                <p className="text-gray-500 text-xl font-bold mt-2">Looks like you haven't earned any Bytes yet!</p>
                                            </div>
                                        </TableCell>
                                    </TableRow>

                                ) :
                                (
                                    <TableRow></TableRow>
                                )
                    }
                </TableBody>
            </Table>

            {
                isLoading &&
                (
                    <section className='w-full h-full flex items-center justify-center absolute inset-0 top-5 left-10'>
                        <div className="w-[500px] h-[300px] flex items-center justify-center">
                            <LoaderPinwheelIcon className="w-8 h-8 animate-spin" />
                        </div>
                    </section>
                )
            }

            {
                tableData.length > itemsPerPage && (
                    <div className="flex items-center justify-center space-x-2 py-4">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </Button>
                        {
                            Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <Button
                                    key={page}
                                    variant={currentPage === page ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </Button>
                            ))}
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </Button>
                    </div>

                )
            }

        </section>
    )
}