"use client";

import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { tableData } from '@/data/tableData';


const DataTable = () => {

    return (
        <Table className=' overflow-scroll '>
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
                    tableData.map((data, index) => {
                        return (
                            <TableRow
                                key={index}
                                className='border border-gray-300 text-base rounded-lg p-4 transition-all duration-300 ease-in-out hover:bg-gray-300 hover:shadow-md'>
                                <TableCell className="p-4">{data.Time}</TableCell>
                                <TableCell className="p-4">{data.DownloadSpeed}<span className='ml-1'>MB/s</span></TableCell>
                                <TableCell className="p-4">{data.UploadSpeed} <span className='ml-1'>MB/s</span></TableCell>
                                <TableCell className="p-4">{data.IPAddress}</TableCell>
                                <TableCell className="p-4">{data.Bytes}</TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>

    )
}

export default DataTable;