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
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="">Time</TableHead>
                    <TableHead>Download Speed</TableHead>
                    <TableHead>Upload Speed</TableHead>
                    <TableHead className="">IP Address</TableHead>
                    <TableHead className="">Bytes</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    tableData.map((data, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell className="">{data.Time}</TableCell>
                                <TableCell>{data.DownloadSpeed}</TableCell>
                                <TableCell>{data.UploadSpeed}</TableCell>
                                <TableCell className="">{data.IPAddress}</TableCell>
                                <TableCell className="">{data.Bytes}</TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>

    )
}

export default DataTable;