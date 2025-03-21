'use client';


import React, { useEffect, useState } from 'react';
import EarningsChart from '@/components/Dashboard/EarningsChart';
import CustomSpeedometer from '@/components/Helper/Meter';
import { Button } from '@/components/ui/button';
import { Calendar1Icon, CheckCircle2Icon, CheckIcon, CopyIcon, LockIcon, LucideTwitter, Share2Icon, TicketCheckIcon, TicketPercent, TimerIcon, TrafficConeIcon, UnlockIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import DemoEarningsChart from '@/components/Dashboard/DemoEarningChart';
import ShowTable from '@/components/Dashboard/ShowTable';
import { toast, Toaster } from 'sonner';











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
      .then(() => toast("Copied!"))
      .catch((err) => console.error("Failed to copy text: ", err));
  }




  return (

    <>
      <article className='h-[86%] p-4 overflow-auto bg-[#06030f]'>

        {/**Kilo Cycle section */}

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">

          <article className="bg-[#0E0417] p-3 pb-10 rounded-lg border-[1px] border-gray-900 flex flex-col  justify-center lg:h-[25vh]">
            <h2 className="text-xl font-bold text-white mb-2 pt-4">Current Stage: Kilo Cycle</h2>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
              <aside className="flex rounded-2xl justify-center p-1 px-2 h-[15vh] md:h-[13vh] lg:h-[15vh] border-[1px] border-gray-900 bg-gradient-to-r from-[#392c47] to-[#0E0417]">
                <article className='w-full h-full rounded-lg flex justify-between gap-4 '>

                  <div className='flex gap-2 w-[80%] h-full items-center'>
                    <div className='h-[70%] p-5 rounded-3xl flex justify-center items-center bg-[#06030f]'>
                      <Calendar1Icon className='text-purple-500' />
                    </div>
                    <div className=' w-[70%] flex flex-col '>
                      <div className='text-sm w-full  font-bold'>Today’s Earnings</div>
                      <div className='text-3xl font-bold'>{dailyEarned}</div>
                    </div>
                  </div>

                  <div className='w-[15%] h-full flex items-end justify-end'>
                    <div><TrafficConeIcon size={40} className='text-purple-500'/></div>
                  </div>
                </article>

              </aside>
              <aside className="flex rounded-2xl justify-center p-1 h-[15vh] md:h-[13vh] lg:h-[15vh] border-none px-4 bg-gradient-to-r from-pink-200 to-[#7734E1]">
                <article className='w-full h-full rounded-lg flex justify-between gap-4 '>

                  <div className='flex gap-2 w-[80%] h-full items-center '>
                    <div className='h-[70%] p-5  rounded-3xl flex justify-center items-center bg-gradient-to-r from-pink-100 to-pink-300'>
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

          <article className=" bg-[#0E0417] text-white pl-2 pr-2 pt-0  pb-3 flex rounded-lg h-[50vh] sm:h-auto md:h-auto  lg:pb-0 lg:h-[25vh] border border-gray-900">
            <aside className="grid grid-cols-1 sm:grid-cols-6 w-full h-full lg:overflow-hidden ">

              <div className="h-full col-span-3">
                <h2 className='text-center font-bold pt-2'>Speedtest Quality</h2>
                <CustomSpeedometer  />
              </div>

              <div className="col-span-3 flex  sm:border-l-[1px] lg:border-l-gray-900 h-full mt-2 sm:mt-0 lg:mt-0 gap-3 ">
                <div className="w-1/2 flex flex-col justify-center items-end h-full ">
                  <div className="text-sm font-bold mb-2">Download Speed</div>
                  <h2 className="text-3xl p-4 rounded-xl text-center font-bold border border-gray-900 bg-gray-800">0.00 <span className="text-sm -mt-2 block" >MB/s</span></h2>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-start lg:items-center h-full">
                  <div className="text-sm font-bold mb-2">Upload Speed</div>
                  <h2 className="text-3xl  p-4 rounded-xl text-center font-bold border border-gray-900 bg-gray-800 ">0.00<span className="text-sm -mt-2 block" >MB/s</span></h2>
                </div>
              </div>

            </aside>

          </article>
        </section>
        {/** End Kilo Cycle section */}





        {/**referral section */}
        <section className="flex flex-col sm:flex-row  justify-center items-center sm:justify-between gap-6 p-4 mt-6 border-[1px] border-gray-900 rounded-2xl bg-[#0E0417] text-white">

          <article className="flex items-center gap-3">
            <div className="text-sm font-bold  bg-gray-800 p-2 rounded-xl">
              <Share2Icon size={30} className='text-purple-500' />
            </div>
            <div className="text-lg font-bold">Refer Your Friends</div>
          </article>

          <article className="grid grid-cols-1 sm:grid-cols-2 w-full sm:w-[50%] lg:w-[30%] rounded-lg gap-2">
            <div className=" text-sm font-bold flex justify-end">
              <Button
                className='flex gap-2 pr-2 pl-2 pt-6 pb-6 rounded-lg w-full sm:w-[80%] bg-gradient-to-r from-purple-300 to-purple-500'
                onClick={copyText}
              >
                <CopyIcon size={25} />
                <span className='font-bold'>Copy Link</span>
              </Button>
            </div>
            <div className="text-2xl font-bold">
              <Button className='flex gap-1 p-6 rounded-lg w-full bg-[#0EA5E9] '
                onMouseDown={(e) => e.preventDefault()}>
                <XIcon size={35} />
                <span className='font-bold'>Tweet Referral</span>
              </Button>
            </div>
          </article>

        </section>
        {/**End referral section */}




        {/** Quest and Earning Statistics section */}
        <section className="grid grid-cols-1 lg:grid-cols-6 gap-4 mt-6 pb-8 ">
          <article className="w-full lg:col-span-2 p-2 rounded-xl border-[1px] border-gray-900  pb-4 bg-[#0E0417] text-white">
            <h2 className='text-xl font-bold mb-2 '>Quests</h2>

            <section className='grid grid-cols-1 gap-4 '>
              <div className="flex flex-col gap-2 border-[1px] border-gray-900 p-2 rounded-xl pb-4 bg-[#06030f]">
                <div className="flex gap-3 rounded-lg p-2 ">
                  <section className='h-[90%] p-4 bg-gray-800 rounded-2xl flex justify-center items-center border-[1px] border-gray-900 '>
                    <CheckCircle2Icon className='text-purple-500' />
                  </section>
                  <section className='flex flex-col justify-center items-start '>
                    <h2 className='text-base font-bold text-center'>Daily Claim</h2>
                    <h3 className='text-sm text-center'>Claim your daily reward.</h3>
                  </section>
                </div>

                <div >
                  <Button
                    className={`w-full font-bold text-[15px] flex justify-center items-center rounded-xl p-6 
                      ${isClaimable ? 'bg-purple-700 hover:bg-purple-600' : 'bg-gray-900  cursor-not-allowed border border-gray-700 '} `}
                    onClick={handleClaim}
                  >
                    {
                      isClaimable ? <UnlockIcon /> : <LockIcon />
                    }
                    Claim 100
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-[1px] border-gray-900 p-2 rounded-xl pb-4 bg-[#06030f] ">
                <div className="flex gap-3 rounded-lg p-2 bg-[#06030f]">
                  <section className='h-[90%] p-4 rounded-2xl bg-gray-800  flex justify-center items-center border-[1px] border-gray-900 '>
                    <TimerIcon  className='text-purple-500'/>
                  </section>
                  <section className='flex flex-col justify-center items-start '>
                    <h2 className='text-base font-bold text-center'>Quests Completed</h2>
                    <h3 className='text-sm text-center'>0/19</h3>
                  </section>
                </div>

                <div className=''>
                  <Link href="/quests">
                    <Button className='w-full font-bold text-[15px] flex justify-center items-center rounded-xl p-6 bg-gray-900 border border-gray-700 '> View all Quests</Button>
                  </Link>
                </div>
              </div>

            </section>

          </article>


          <article className="lg:col-span-4 bg-[#0E0417]  p-4 rounded-xl border-[1px] border-gray-900 w-full  text-white ">
            <h2 className="text-2xl font-bold ">Earnings Statistics</h2>
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



        <Toaster
          className="custom-toast"
          position="top-center"
          offset="16px"
          toastOptions={{
            style: {
              width: '80px',
              padding: '8px',
              margin: '4px',
              background: "black",
              fontSize: '18px',
              color: 'white',
              textAlign: 'center',
              borderRadius: '8px',
              borderWidth: '0px'

            }
          }}
        />
      </article>
    </>
  );
}
{/*  */ }

