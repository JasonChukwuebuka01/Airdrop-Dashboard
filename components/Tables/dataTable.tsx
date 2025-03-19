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
import ToolTipProvider from '../Helper/ToolTipProvider';



interface DataTableProps {
    tableData: any[]
    HideIpAddress: boolean
    isLoading?: boolean
}




export default function DataTable({ tableData, HideIpAddress, isLoading }: DataTableProps) {
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
            <Table className=' overflow-scroll border border-gray-900 rounded-lg '>
                <TableHeader className=' mb-4 bg-black/25 '>
                    <TableRow className='border-b border-gray-900 text-base rounded-lg  hover:bg-black/25'>
                        <TableHead className="font-bold p-4 text-white ">Time</TableHead>
                        <TableHead className='font-bold p-4 text-white'>Download Speed</TableHead>
                        <TableHead className='font-bold p-4 text-white'>Upload Speed</TableHead>
                        <TableHead className="font-bold p-4 text-white">IP Address</TableHead>
                        <TableHead className="font-bold p-4 text-white">Bytes</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        getCurrentPageData().length > 0 ?
                            (
                                getCurrentPageData().map((data, index) => (
                                    <TableRow
                                        key={index}
                                        className='border border-gray-900 text-base rounded-lg p-4 transition-all duration-300 ease-in-out hover:bg-black/25 hover:shadow-md'
                                    >
                                        <TableCell className="p-4 w-[150px] min-w-[150px] max-w-[150px] whitespace-pre-wrap">{data.Time}</TableCell>
                                        <TableCell className="p-4 w-[150px] min-w-[150px] max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis">{data.DownloadSpeed}<span className='ml-1'>MB/s</span></TableCell>
                                        <TableCell className="p-4 w-[150px] min-w-[150px] max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis">{data.UploadSpeed} <span className='ml-1'>MB/s</span></TableCell>
                                        <TableCell className="p-4 w-[150px] min-w-[150px] max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis">
                                            {HideIpAddress ? data.IPAddress : '********'}
                                        </TableCell>
                                        <TableCell className="p-4 w-[150px]">

                                            {
                                                data.Bytes > 50 ?
                                                    (
                                                        <ToolTipProvider
                                                            BytesValue={data.Bytes}
                                                        />
                                                    ) :
                                                    (

                                                        <div className='border border-gray-900 lg:w-[40%]  flex items-center justify-center gap-3 p-1 pl-2 pr-2 rounded-lg bg-gradient-to-r from-[#392c47] to-[#0E0417]'>
                                                            <span className='font-bold '>{data.Bytes}</span>
                                                            <div><TrafficConeIcon /></div>
                                                        </div>
                                                    )
                                            }

                                        </TableCell>
                                    </TableRow>
                                ))

                            ) : isLoading === false ?

                                (
                                    <TableRow className=' w-full'>
                                        <TableCell className="w-full h-[400px] flex items-center justify-center ">
                                            <p className="text-gray-500">No data available</p>
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
                    <section className='w-full flex items-center justify-center'>
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
                            className="bg-black/25 text-white border border-gray-900"
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
                                    className={currentPage === page ? "border border-gray-900 bg-gradient-to-r from-purple-300 to-purple-500" : "bg-black/25 text-white border border-gray-900"}
                                >
                                    {page}
                                </Button>
                            ))}
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="bg-black/25 text-white border border-gray-900"
                        >
                            Next
                        </Button>
                    </div>

                )
            }

        </section>
    )
}