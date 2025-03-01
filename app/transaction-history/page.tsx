

// // app/components/TransactionTable.tsx
"use client";

import React, { useState, useMemo } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
//import { CalendarIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { CalendarIcon, Dot } from "lucide-react"; // Using lucide-react icon
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define the transaction data type
export type Transaction = {
  transactionId: string;
  transactionType: string;
  time: string;
  campaign: "Mega Cycle" | "Other Campaign"; // Example campaign types
  bytesEarned: number;
  details: string;
};

// Dummy Data Generation Function (Replace with actual data fetching)
const generateDummyData = (count: number): Transaction[] => {
  const transactionTypes = ["Speedtest Earning", "Daily Claim Quest", "Referral Bonus"];
  const campaigns = ["Mega Cycle", "Other Campaign"];

  return Array.from({ length: count }, (_, i) => ({
    transactionId: `TRANS-${Math.floor(Math.random() * 10000000000000)}-${i}`,
    transactionType: transactionTypes[Math.floor(Math.random() * transactionTypes.length)],
    time: `01/0${i % 9 + 1}/2025`,
    campaign: campaigns[Math.floor(Math.random() * campaigns.length)] as "Mega Cycle",
    bytesEarned: Math.floor(Math.random() * 3) * 100 + 100, // Bytes earned between 100 and 300 in steps of 100
    details: `Earned Bytes from ${transactionTypes[Math.floor(Math.random() * transactionTypes.length)]}`,
  }));
};

const initialData = generateDummyData(34); // Generate 34 dummy transactions

const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "transactionId",
    header: "Transaction Id",
  },
  {
    accessorKey: "transactionType",
    header: "Transaction Type",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    accessorKey: "campaign",
    header: "Campaign",
    cell: ({ row }) => (
        <div className="px-3 py-1 rounded-full text-xs font-semibold bg-green-600 text-white">
            {row.getValue("campaign")}
        </div>
    ),
  },
  {
    accessorKey: "bytesEarned",
    header: "Bytes Earned",
    cell: ({ row }) => (
      <div className="flex items-center">
        {row.getValue("bytesEarned")}
        <span className="ml-1">
          <Dot size={16} />
        </span>
      </div>
    ),
  },
  {
    accessorKey: "details",
    header: "Details",
  },
];

interface DataTableProps {
  columns: ColumnDef<Transaction>[];
  data: Transaction[];
}

const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const pageCount = Math.ceil(data.length / table.getState().pagination.pageSize);

    const visiblePageButtons = useMemo(() => {
        const range = (start: number, end: number) => {
            let length = end - start + 1;
            return Array.from({ length }, (_, idx) => idx + start);
        };

        const totalPages = pageCount;
        const currentPage = table.getState().pagination.pageIndex + 1;
        const maxVisibleButtons = 5; // Adjust as needed

        if (totalPages <= maxVisibleButtons) {
            return range(1, totalPages);
        }

        const sideButtons = Math.floor((maxVisibleButtons - 1) / 2); // Calculate side buttons

        let startPage = Math.max(currentPage - sideButtons, 1);
        let endPage = Math.min(currentPage + sideButtons, totalPages);

        if (startPage === 1) {
            endPage = Math.min(maxVisibleButtons, totalPages);
        } else if (endPage === totalPages) {
            startPage = Math.max(totalPages - maxVisibleButtons + 1, 1);
        }

        const visibleButtons = range(startPage, endPage);

        return visibleButtons;
    }, [pageCount, table.getState().pagination.pageIndex]);

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="text-left">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
         {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-2">
            <div className="text-sm text-gray-500">
                Showing {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} to
                {Math.min(
                    (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
                    data.length
                )} of {data.length} results
            </div>
            <div className="flex items-center space-x-2">
              <Button
                  variant="outline"
                  size="icon"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                  className="h-8 w-8 rounded-full"
              >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous</span>
              </Button>

                {visiblePageButtons.map((page) => (
                    <Button
                        key={page}
                        variant={table.getState().pagination.pageIndex + 1 === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => table.setPageIndex(page - 1)}
                        className="rounded-full h-8 w-8"
                    >
                        {page}
                    </Button>
                ))}

                  {visiblePageButtons.indexOf(pageCount) < 0 && pageCount > 5 ? <span className="px-2">...</span> : null}

                {pageCount > 5 && visiblePageButtons.indexOf(pageCount) < 0 ? (
                  <Button
                      variant={table.getState().pagination.pageIndex + 1 === pageCount ? "default" : "outline"}
                      size="sm"
                      onClick={() => table.setPageIndex(pageCount - 1)}
                      className="rounded-full h-8 w-8"
                  >
                      {pageCount}
                  </Button>
                ) : null}

              <Button
                  variant="outline"
                  size="icon"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                  className="h-8 w-8 rounded-full"
              >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next</span>
              </Button>
            </div>
        </div>
    </div>
  );
};

const TransactionHistory: React.FC = () => {
  const [data, setData] = useState(initialData);
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2025, 0, 1),
    to: new Date(2025, 0, 31),
  });

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      if (date?.from && date?.to) {
        const itemDate = new Date(item.time);
        return itemDate >= date.from && itemDate <= date.to;
      }
      return true;
    });
  }, [data, date]);

    const [campaignFilter, setCampaignFilter] = useState<string>('');

    const filteredCampaignData = useMemo(() => {
        if (!campaignFilter) {
            return filteredData;
        }

        return filteredData.filter(item =>
            item.campaign.toLowerCase().includes(campaignFilter.toLowerCase())
        );
    }, [filteredData, campaignFilter]);

  return (
    <div className="container mx-auto py-10 px-4 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-5">Transaction History</h1>

      {/* Filters */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center space-x-2">
            <label htmlFor="allCampaign" className="mr-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">All Campaign</label>
            <Input
                type="text"
                id="allCampaign"
                placeholder="Search..."
                className="max-w-xs bg-gray-700 text-white border-gray-600"
                value={campaignFilter}
                onChange={(e) => setCampaignFilter(e.target.value)}
            />
        </div>
        <div className="flex items-center space-x-2">
          {/* Date Range Picker */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[300px] justify-start text-left font-normal bg-gray-700 text-white border-gray-600 hover:bg-gray-600",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date?.from ? (
                  date.to ? (
                    `${format(date.from, "PPP")} - ${format(date.to, "PPP")}`
                  ) : (
                    format(date.from, "PPP")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700">
              <Calendar
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
                pagedNavigation
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Table */}
      <DataTable columns={columns} data={filteredCampaignData} />
    </div>
  );
};

export default TransactionHistory;