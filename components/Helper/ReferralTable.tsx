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
import { CopyIcon, LoaderPinwheelIcon, TrafficConeIcon } from "lucide-react" 
import ToolTipProvider from './ToolTipProvider';
import Image from 'next/image';



interface DataTableProps {
    tableData: any[]
    HideIpAddress: boolean
    isLoading?: boolean
}




export default function ReferralTable({ tableData, HideIpAddress, isLoading }: DataTableProps) {
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


    function copyText() {
        navigator.clipboard.writeText("https://app.despeed.net/register?ref=mm6FQ0AmwxiX")
            .then(() => alert("Link copied to clipboard!"))
            .catch((err) => console.error("Failed to copy text: ", err));
    }




    return (

        <section className="w-full relatve ">
            <Table className=' overflow-scroll border border-gray-300 rounded-lg'>
                <TableHeader className='rounded-lg mb-4'>
                    <TableRow className='border-b border-gray-300 text-base rounded-lg'>
                        <TableHead className="font-bold p-4">Username</TableHead>
                        <TableHead className='font-bold p-4'>Email</TableHead>
                        <TableHead className='font-bold p-4'>Registration Date</TableHead>
                        <TableHead className="font-bold p-4">Referral Status</TableHead>
                        <TableHead className="font-bold p-4">Referral Bonus</TableHead>
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

                                                        <div className='border-2 border-black lg:w-[40%] flex items-center justify-center gap-3 p-1 pl-2 pr-2 rounded-lg'>
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
                                    <TableRow ></TableRow>

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
                tableData.length <= 0 && !isLoading &&(
                    <section className='w-full'>
                        <article className="w-full h-[400px] flex flex-col items-center justify-center pb-4 border border-gray-300">

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

                            <h2 className='text-base md:text-xl font-bold text-center'>Looks like you haven't referred anyone yet!</h2>
                            <p className="text-sm md:text-base pl-8 pr-8">Invite your friends now and start earning rewards!</p>

                            <div className="w-[220px] xl:w-[220px] flex justify-center items-center gap-2  rounded-xl border-2 border-gray-300 cursor-pointer mt-4 p-4 h-[10vh] font-bold"
                                onClick={() => copyText()}
                            >
                                <div><CopyIcon /></div>
                                <button>
                                    Copy Referral link
                                </button>
                            </div>
                        </article>
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