"use client";


import React, { useEffect, useState } from 'react'
import { transactionHistory } from '@/data/tableData';
import TransactionHistoryTable from '@/components/Helper/TransactionHistoryTable';
import SelectDropDown from '@/components/Helper/SelectDropDown';
import DateRangePicker from '@/components/Helper/DateRangePicker';





const TransactionHistory = () => {



  const [selectedValue, setSelectedValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [tableDatas, setTableData] = useState<any[]>([]);
  const [selectedDateRange, setSelectedDateRange] = useState<any | undefined>(undefined);

  // Fetch data
  useEffect(() => {

    const fetchData = async () => {

      setIsLoading(true);

      try {

        await new Promise(resolve => {
          setTimeout(() => {

            if (selectedValue) {
              const filteredTableData = selectedValue === "All Campaign" ? transactionHistory : selectedValue ? transactionHistory.filter(item => item.cycle === selectedValue) : transactionHistory;

              setTableData(filteredTableData);

            } else {
              setTableData(transactionHistory)
            };


            
            if (!selectedDateRange?.from || !selectedDateRange.to) {
             
              // Return original array if no date range is selected

            } else {

              const { from, to } = selectedDateRange;

              // Convert dates to short format (M/D/YYYY)
              const formatDate = (date: Date) => {
                return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
              };

              const formattedFrom = formatDate(from);
              const formattedTo = formatDate(to);

              
              const parseDate = (dateStr :any) => {
                const [day, month, year] = dateStr.split("/").map(Number);
                return new Date(year, month - 1, day); // month - 1 because JS months are 0-based
              };
              
              const ParsedDateFrom = parseDate(formattedFrom);
              const ParsedDateTo = parseDate(formattedTo);



              const filteredTableData = transactionHistory.filter((data) => {
                const itemDate = parseDate(data.Time);
                return itemDate >= ParsedDateFrom && itemDate <= ParsedDateTo ;
              });

              setTableData(filteredTableData);
            }


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

  }, [selectedValue, selectedDateRange])





  const handleDateRangeChange = (dateRange: any) => {
    setSelectedDateRange(dateRange);

  };





  return (
    <section className=' border border-gray-300 p-4 rounded-lg '>
      <header className='flex justify-between items-center mb-3'>
        <h2 className='text-base lg:text-xl font-bold text-gray-800 mb-2 '>Transaction History</h2>

        <article className='flex gap-2 justify-center items-center'>
          <SelectDropDown
            setSelectedValue={setSelectedValue}
          />
          <DateRangePicker
            onDateRangeChange={handleDateRangeChange}
          />

        </article>
      </header>

      <section>
        <TransactionHistoryTable tableData={tableDatas} isLoading={isLoading} />
      </section>
    </section>
  )
}



export default TransactionHistory;





