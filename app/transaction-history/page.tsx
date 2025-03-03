"use client";


import React, { useEffect, useState } from 'react'
import DataTable from '@/components/Helper/dataTable'
import SwitchDemo from '@/components/Helper/SwitchDemo'
import { tableData } from '@/data/tableData';





const TransactionHistory = () => {



    const [HideIpAddress, setHideIpAddress] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState(true);
    const [tableDatas, setTableData] = useState<any[]>([]);

    // Fetch data
    useEffect(() => {

        const fetchData = async () => {

            setIsLoading(true);

            try {

                await new Promise(resolve => {
                    setTimeout(() => {
                        setTableData(tableData);
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
    }, [])

    





    return (
        <section className=' border border-gray-300 p-4 rounded-lg '>
            <header className='flex justify-between items-center mb-3'>
                <h2 className='text-base lg:text-xl font-bold text-gray-800 mb-2 '>Transaction History</h2>

                <article className='flex gap-2 justify-center items-center'>
                    <div>
                        <SwitchDemo
                            setHideIpAddress={setHideIpAddress}
                            HideIpAddress={HideIpAddress}
                        />
                    </div>
                    <h2 className='text-base lg:text-lg font-bold text-gray-800 text-center'>Hide IP Address</h2>
                </article>
            </header>

            <section>
                <DataTable tableData={tableDatas} HideIpAddress={HideIpAddress} isLoading={isLoading} />
            </section>
        </section>
    )
}



export default TransactionHistory;





  {/* Filters */}
  {/* <div className="flex items-center justify-between mb-5">
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
  </div> */}


   // const filteredData = useMemo(() => {
   //   return data.filter((item) => {
   //     if (date?.from && date?.to) {
   //       const itemDate = new Date(item.time);
   //       return itemDate >= date.from && itemDate <= date.to;
   //     }
   //     return true;
   //   });
   // }, [data, date]);

   //   const [campaignFilter, setCampaignFilter] = useState<string>('');

   //   const filteredCampaignData = useMemo(() => {
   //       if (!campaignFilter) {
   //           return filteredData;
   //       }

   //       return filteredData.filter(item =>
   //           item.campaign.toLowerCase().includes(campaignFilter.toLowerCase())
   //       );
   //   }, [filteredData, campaignFilter]);
