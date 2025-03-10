'use client';


import React, { useEffect, useState } from 'react';
import EarningsChart from '@/components/Dashboard/EarningsChart';
import CustomSpeedometer from '@/components/Helper/Meter';
import { Button } from '@/components/ui/button';
import { Calendar1Icon, CopyIcon, LockIcon, LucideTwitter, Share2Icon, TicketCheckIcon, TicketPercent, TimerIcon, TrafficConeIcon, UnlockIcon } from 'lucide-react';
import Link from 'next/link';
import DemoEarningsChart from '@/components/Dashboard/DemoEarningChart';
import ShowTable from '@/components/Dashboard/ShowTable';











export default function DashboardPage() {

  const [ShowDemo, setShowDemo] = useState<boolean>(true);

  const [totalEarned, setTotalEarned] = useState<number>(0);


  const localStorageKey = 'questsRewardsCountdown'; // Key for storing countdown in localStorage

  const initialCountdown = 5 * 60; // 5 minutes in seconds


  const [countdown, setCountdown] = useState<number>(() => {
    const stored = localStorage.getItem(localStorageKey);
    return stored ? Number(stored) : 0;
  });


  const [streak, setStreak] = useState<number>(() => {
    const streak = localStorage.getItem("streak");
    return streak ? parseInt(streak) : 0;
  });


  const [dailyEarned, setDailyEarned] = useState<number>(() => {
    const dailyPoint = localStorage.getItem("dailyPoint");
    return dailyPoint ? parseInt(dailyPoint) : 0;
  });

  const [lastClaimTime, setLastClaimTime] = useState<number>(() => {
    const storedTime = localStorage.getItem("lastClaimTime");
    return storedTime ? Number(storedTime) : Date.now();
  });


  const [isClaimable, setIsClaimable] = useState<boolean>(false);

  const [claimed, setClaimed] = useState<boolean>(false);







  const handleShowDemo = () => {
    setTimeout(() => {

      setShowDemo(!ShowDemo);

    }, 1000);

  };



  useEffect(() => {

    try {
      const totalEarned = localStorage.getItem("TotalEarned");

      if (totalEarned) {

        setTotalEarned(parseInt(totalEarned));

      } else {

        setTotalEarned(0)
      }


    } catch (error) {
      console.log(error)

    }

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

      setIsClaimable(true);


    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [countdown]);




  const handleClaim = async () => {
    if (isClaimable) {
      try {
        const now = Date.now();
        const timeDiff = now - lastClaimTime;
        const hoursDiff = timeDiff / (1000 * 60 * 60);

        // Reset streak if more than 24 hours have passed
        if (hoursDiff > 24) {
          setStreak(1);
          localStorage.setItem("streak", "1");
        }

        setClaimed(true);
        setIsClaimable(false);
        setLastClaimTime(now);
        localStorage.setItem("lastClaimTime", now.toString());

        await Promise.all([
          setTotalEarned((prevTotal) => {
            const totalEarned = prevTotal + 100;
            localStorage.setItem("TotalEarned", totalEarned.toString());
            return totalEarned;
          }),

          setStreak(prevStreak => {
            const newStreak = hoursDiff > 24 ? 1 : Math.min(prevStreak + 1, 28);
            localStorage.setItem("streak", newStreak.toString());
            return newStreak;
          }),
          // ...rest of your existing Promise.all code
        ]);

        localStorage.removeItem(localStorageKey);
        setCountdown(initialCountdown);
        setTimeout(() => setClaimed(false), 1000);
      } catch (error) {
        console.error('Failed to process claim:', error);
        setClaimed(false);
        setIsClaimable(true);
      }
    }
  };



  function copyText() {

    navigator.clipboard.writeText("https://app.despeed.net/register?ref=mm6FQ0AmwxiX")
      .then(() => alert("Link copied to clipboard!"))
      .catch((err) => console.error("Failed to copy text: ", err));
  }




  return (

    <>
      <article className='h-[85%] p-4 overflow-auto'>

        {/**Kilo Cycle section */}

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">

          <article className="bg-white p-3 pb-10 rounded-lg border-[1px] border-gray-300 flex flex-col  justify-center lg:h-[25vh]">
            <h2 className="text-xl font-bold text-gray-800 mb-2 pt-4">Current Stage: Kilo Cycle</h2>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <aside className="flex rounded-lg justify-center p-1 h-[15vh] border-[1px] border-gray-300 ">
                <article className='w-full h-full rounded-lg flex justify-between gap-4 '>

                  <div className='flex gap-2 w-[80%] h-full items-center'>
                    <div className='h-[70%] p-4 bg-gray-200 rounded-2xl flex justify-center items-center'>
                      <Calendar1Icon />
                    </div>
                    <div className=' w-[70%] flex flex-col '>
                      <div className='text-sm w-full  font-bold'>Today’s Earnings</div>
                      <div className='text-3xl font-bold'>{dailyEarned}</div>
                    </div>
                  </div>

                  <div className='w-[15%] h-full flex items-end justify-end'>
                    <div><TrafficConeIcon size={40} /></div>
                  </div>
                </article>

              </aside>
              <aside className="flex rounded-lg justify-center p-1 h-[15vh] border-[1px] border-gray-300">
                <article className='w-full h-full rounded-lg flex justify-between gap-4 '>

                  <div className='flex gap-2 w-[80%] h-full items-center'>
                    <div className='h-[70%] p-4 bg-gray-200 rounded-2xl flex justify-center items-center '>
                      <TicketPercent />
                    </div>
                    <div className=' w-[70%] flex flex-col'>
                      <div className='text-sm w-full  font-bold'>Cycle Earnings</div>
                      <div className='text-3xl font-bold min-w-[100px] max-w-[200px] w-[100px] '>{totalEarned}</div>
                    </div>
                  </div>

                  <div className='w-[15%] h-full flex items-end justify-end'>
                    <div><TrafficConeIcon size={40} /></div>
                  </div>
                </article>
              </aside>
            </section>
          </article>

          <article className="bg-white pl-2 pr-2 pt-0  pb-3 flex rounded-lg border-[1px] border-gray-300 h-[50vh] sm:h-[30vh]  lg:pb-0 lg:h-[25vh]">
            <aside className="grid grid-cols-1 sm:grid-cols-6 w-full h-full lg:overflow-hidden  ">

              <div className="h-full col-span-3">
                <h2 className='text-center font-bold pt-2'>Speedtest Quality</h2>
                <CustomSpeedometer />
              </div>

              <div className="col-span-3 flex  sm:border-l-[1px] lg:border-gray-300 h-full mt-2 sm:mt-0 lg:mt-0 gap-3 ">
                <div className="w-1/2 flex flex-col justify-center items-end h-full">
                  <div className="text-sm font-bold mb-2">Download Speed</div>
                  <h2 className="text-3xl p-4 rounded-xl text-center font-bold border-2 border-gray-300">0.77 <span className="text-sm -mt-2 block" >MB/s</span></h2>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-start lg:items-center h-full">
                  <div className="text-sm font-bold mb-2">Upload Speed</div>
                  <h2 className="text-3xl  p-4 rounded-xl text-center font-bold border-2 border-gray-300 ">2.44<span className="text-sm -mt-2 block" >MB/s</span></h2>
                </div>
              </div>

            </aside>
          </article>
        </section>
        {/** End Kilo Cycle section */}





        {/**referral section */}
        <section className="flex flex-col sm:flex-row  justify-center items-center sm:justify-between gap-6 p-4 mt-6 border-[1px] border-gray-300 rounded-2xl">

          <article className="flex items-center gap-3">
            <div className="text-sm font-bold border-[1px] border-gray-300 p-2 rounded-xl">
              <Share2Icon size={30} />
            </div>
            <div className="text-lg font-bold">Refer Your Friends</div>
          </article>

          <article className="grid grid-cols-1 sm:grid-cols-2 w-full sm:w-[50%] lg:w-[30%] rounded-lg gap-2">
            <div className=" text-sm font-bold flex justify-end">
              <Button
                className='flex gap-2  pr-2 pl-2 pt-6 pb-6 rounded-lg  w-full sm:w-[80%] '
                onClick={copyText}
              >
                <CopyIcon size={20} />
                <span>Copy Link</span>
              </Button>
            </div>
            <div className="text-2xl font-bold">
              <Button className='flex gap-3 p-6 rounded-lg w-full '
                onMouseDown={(e) => e.preventDefault()}>
                <LucideTwitter size={20} />
                <span>Tweet Referral</span>
              </Button>
            </div>
          </article>

        </section>
        {/**End referral section */}




        {/** Quest and Earning Statistics section */}
        <section className="grid grid-cols-1 lg:grid-cols-6 gap-4 mt-6 pb-8">
          <article className="w-full lg:col-span-2 bg-white p-2 rounded-xl border-[1px] border-gray-300  pb-4">
            <h2 className='text-xl font-bold text-gray-800 mb-2 '>Quests</h2>

            <section className='grid grid-cols-1 gap-4'>
              <div className="flex flex-col gap-2 border-[1px] border-gray-300 p-2 rounded-xl pb-4">
                <div className="flex gap-3 bg-gray-100 rounded-lg p-2 ">
                  <section className='h-[90%] p-4 bg-gray-200 rounded-2xl flex justify-center items-center border-[1px] border-gray-300 '>
                    <TicketCheckIcon />
                  </section>
                  <section className='flex flex-col justify-center items-start '>
                    <h2 className='text-base font-bold text-center'>Daily Claim</h2>
                    <h3 className='text-sm text-center'>Claim your daily reward.</h3>
                  </section>
                </div>

                <div className=''>
                  <Button
                    className={`w-full font-bold text-[15px] flex justify-center items-center rounded-xl p-6 
                      ${isClaimable ? 'bg-purple-700 hover:bg-purple-600' : 'bg-gray-700  cursor-not-allowed '}`}
                    onClick={handleClaim}
                  //disabled={!isClaimable}
                  >
                    {
                      isClaimable ? <UnlockIcon /> : <LockIcon />
                    }
                    Claim 100
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-[1px] border-gray-300 p-2 rounded-xl pb-4">
                <div className="flex gap-3 bg-gray-100 rounded-lg p-2 ">
                  <section className='h-[90%] p-4 bg-gray-200 rounded-2xl flex justify-center items-center border-[1px] border-gray-300 '>
                    <TimerIcon />
                  </section>
                  <section className='flex flex-col justify-center items-start '>
                    <h2 className='text-base font-bold text-center'>Quests Completed</h2>
                    <h3 className='text-sm text-center'>0/19</h3>
                  </section>
                </div>

                <div className=''>
                  <Link href="/quests">
                    <Button className='w-full font-bold text-[15px] flex justify-center items-center rounded-xl p-6'> View all Quests</Button>
                  </Link>
                </div>
              </div>

            </section>

          </article>


          <article className="lg:col-span-4 bg-white p-4 rounded-xl border-[1px] border-gray-300 w-full ">

            {
              ShowDemo ?
                (
                  <DemoEarningsChart
                    handleShowDemo={handleShowDemo}
                  />
                ) :
                (
                  <EarningsChart />
                )
            }

          </article>
        </section>
        {/**End Quest and Earning Statistics section section */}




        {/**Table Data section */}
        <ShowTable />
        {/** End of Table Data section */}


      </article>
    </>
  );
}
{/*  */ }