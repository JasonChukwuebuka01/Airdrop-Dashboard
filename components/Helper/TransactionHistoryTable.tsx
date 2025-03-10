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
import { LoaderPinwheelIcon, TrafficConeIcon } from "lucide-react" // Import loader icon
import Image from 'next/image';




interface DataTableProps {
    tableData: any[]
    isLoading?: boolean
}




export default function TransactionHistoryTable({ tableData, isLoading }: DataTableProps) {
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
                        <TableHead className="font-bold p-4">Transaction Id</TableHead>
                        <TableHead className='font-bold p-4'>Transaction Type</TableHead>
                        <TableHead className='font-bold p-4'>Time</TableHead>
                        <TableHead className="font-bold p-4">Bytes Earned</TableHead>
                        <TableHead className="font-bold p-4">Detailss</TableHead>
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
                                        <TableCell className="p-4 w-[220px] min-w-[220px] max-w-[220px] whitespace-pre-wrap">{data.TransactionId}</TableCell>
                                        <TableCell className="p-4 w-[150px] min-w-[150px] max-w-[150px] whitespace-nowrap ">{data.TransactionType}</TableCell>
                                        <TableCell className="p-4 w-[200px] min-w-[200px] max-w-[200px] whitespace-nowrap ">{data.Time} <span className='ml-1 p-2 rounded-xl border text-white font-bold bg-green-600 px-4 '>{data.cycle}</span></TableCell>
                                        <TableCell className="p-4 w-[150px] min-w-[150px] max-w-[150px] whitespace-nowrap">
                                            <div className='border-2 border-black lg:w-[60%] flex items-center justify-center gap-3 p-1 px-4 rounded-lg'>
                                                <span className='font-bold '>{data.BytesEarned}</span>
                                                <div><TrafficConeIcon /></div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="p-4 w-[220px] min-w-[220px] max-w-[220px]  whitespace-break-spaces">
                                            {data.Details}
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