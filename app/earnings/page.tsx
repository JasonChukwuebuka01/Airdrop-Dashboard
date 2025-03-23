

"use client";


import React, { useEffect, useState } from 'react'
import { cycleData } from '@/data/tableData';
import EarningsTable from '@/components/Tables/EarningsTable';



const EarningsPage = () => {

  const initialCountdown = 10; // 10 seconds


  const [isLoading, setIsLoading] = useState(true);
  const [tableDatas, setTableData] = useState<any[]>([]);




  const localStorageKey = 'questsRewardsCountdown'; // Key for storing countdown in localStorage


  const [countdown, setCountdown] = useState<number>(initialCountdown); // Countdown state

 

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

     
    }, [])


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
            setTableData(cycleData)
            resolve(true)
          }, 2000)
        });

      } catch (error) {

        console.error(error);

      } finally {
        setIsLoading(false)
      }
    };

    fetchData();

  }, [])




 


  return (
    <section className='h-[86%] p-4 overflow-auto bg-[#06030f] text-white'>
      <article className='border border-gray-900 p-4 rounded-2xl bg-[#0E0417] '>
        <header className='flex flex-col lg:flex-row justify-between lg:items-center mb-3'>
          <h2 className='text-base lg:text-xl font-bold mb-2 '>Earnings</h2>
        </header>

        <section>
          <EarningsTable tableData={tableDatas} isLoading={isLoading} />
        </section>
      </article>
    </section>
  )
}



export default EarningsPage;





