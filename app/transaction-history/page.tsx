"use client";


import React, { useEffect, useState } from 'react'
import { transactionHistory } from '@/data/tableData';
import TransactionHistoryTable from '@/components/Tables/TransactionHistoryTable';
import SelectDropDown from '@/components/Helper/SelectDropDown';
import DateRangePicker from '@/components/Helper/DateRangePicker';





const TransactionHistory = () => {



  const [selectedValue, setSelectedValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [tableDatas, setTableData] = useState<any[]>([]);
  const [selectedDateRange, setSelectedDateRange] = useState<any | undefined>(undefined);




  const localStorageKey = 'questsRewardsCountdown'; // Key for storing countdown in localStorage


  const [countdown, setCountdown] = useState<number>(0);





   useEffect(() => {
      
        try {
            const stored = localStorage.getItem(localStorageKey);
            if (stored) {

                setCountdown(parseInt(stored));

            } else {

                setCountdown(0)
            }


        } catch (error) {
            console.log(error)

        };

     
    }, [countdown])


  useEffect(() => {

    let interval: NodeJS.Timeout;

    if (countdown > 0) {
      interval = setInterval(() => {

        setCountdown((prevCountdown) => {

          const newCountdown = prevCountdown - 1;

          try {

            localStorage.setItem(localStorageKey, newCountdown.toString());

          } catch (error) {

            console.error('Failed to update localStorage:', error);
          }
          return newCountdown;
        });
      }, 1000);

    } else {

      //setIsClaimable(true);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [countdown]);










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


            //Logic for sorting and filtering date range
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

              const parseDate = (dateStr: any) => {
                const [day, month, year] = dateStr.split("/").map(Number);
                return new Date(month - 1, day, year); // month - 1 because JS months are 0-based
              };

              const ParsedDateFrom = parseDate(formattedFrom);
              const ParsedDateTo = parseDate(formattedTo);



              const filteredTableData = transactionHistory.filter((data) => {
                const itemDate = parseDate(data.Time);
                return itemDate >= ParsedDateFrom && itemDate <= ParsedDateTo;
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

    <section className='h-[86%] p-4   overflow-auto bg-[#06030f] text-white'>
      <article className='p-2 px-4  pt-6 border border-gray-900  bg-[#0E0417] rounded-2xl'>
        <header className='flex flex-col lg:flex-row justify-between lg:items-center mb-3'>
          <h2 className='text-base lg:text-xl font-bold mb-2 '>Transaction History</h2>

          <article className='flex gap-2 justify-center lg:items-center flex-col lg:flex-row'>
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
      </article>
    </section>
  )
}



export default TransactionHistory;





