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
import { Loader2, LoaderPinwheelIcon } from "lucide-react" // Import loader icon

interface DataTableProps {
    tableData: any[]
    HideIpAddress: boolean
    isLoading?: boolean
}

export default function DataTable({ tableData, HideIpAddress, isLoading }: DataTableProps) {
    // Pagination states
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5

    // Calculate total pages
    const totalPages = Math.ceil(tableData.length / itemsPerPage)

    // Get current page data
    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage
        return tableData.slice(startIndex, endIndex)
    }





    return (

        <section className="w-full relatve">
            <Table className=' overflow-scroll border border-blue-300 rounded-kg'>
                <TableHeader className='rounded-lg'>
                    <TableRow className='border-b border-gray-300 text-base rounded-lg '>
                        <TableHead className="font-bold p-4">Time</TableHead>
                        <TableHead className='font-bold p-4'>Download Speed</TableHead>
                        <TableHead className='font-bold p-4'>Upload Speed</TableHead>
                        <TableHead className="font-bold p-4">IP Address</TableHead>
                        <TableHead className="font-bold p-4">Bytes</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {
                        getCurrentPageData().length > 0 ?
                            (
                                getCurrentPageData().map((data, index) => (
                                    <TableRow
                                        key={index}
                                        className='border border-gray-300 text-base rounded-lg p-4 transition-all duration-300 ease-in-out hover:bg-gray-300 hover:shadow-md'
                                    >
                                        <TableCell className="p-4 w-[150px]">{data.Time}</TableCell>
                                        <TableCell className="p-4 w-[150px]">{data.DownloadSpeed}<span className='ml-1'>MB/s</span></TableCell>
                                        <TableCell className="p-4 w-[150px]">{data.UploadSpeed} <span className='ml-1'>MB/s</span></TableCell>
                                        <TableCell className="p-4 w-[150px]">
                                            {HideIpAddress ? data.IPAddress : '********'}
                                        </TableCell>
                                        <TableCell className="p-4 w-[150px]">{data.Bytes}</TableCell>
                                    </TableRow>
                                ))

                            ) : isLoading === false ?

                                (
                                    <TableRow className='border-2 border-red-500 w-full'>
                                        <TableCell className="w-full h-[400px] flex items-center justify-center border-2 border-blue-500">
                                            <p className="text-gray-500">No data available</p>
                                        </TableCell>
                                    </TableRow>

                                ) :
                                (
                                    <TableRow>

                                    </TableRow>
                                )
                    }
                </TableBody>
            </Table>

            {
                isLoading &&
                (
                    <section className='w-full border-2 border-black-500 flex items-center justify-center'>
                        <div className="w-[500px] h-[300px] flex items-center justify-center border-2 border-blue-500">
                            <LoaderPinwheelIcon className="w-8 h-8 animate-spin" />
                        </div>
                    </section>
                )
            }

            {
                tableData.length > itemsPerPage && (
                    <div className="flex items-center justify-end space-x-2 py-4">
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