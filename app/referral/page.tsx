"use client";


import { DatePickerDemo } from "@/components/Helper/DatePicker";
import Info from "@/components/Helper/Info";
import ReferralTable from "@/components/Helper/ReferralTable";
import { CopyIcon, Gift, TimerIcon, TwitterIcon, UserPlus, XIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode, useEffect, useState } from 'react';
import { toast, Toaster } from "sonner";

interface StatItem {
  name: string;
  value: number;
  icon: ReactNode;
}




export default function ReferralPage() {


  const [HideIpAddress] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(true);


  const localStorageKey = 'questsRewardsCountdown'; // Key for storing countdown in localStorage


  const [countdown, setCountdown] = useState<number>(() => {
    const stored = localStorage.getItem(localStorageKey);
    return stored ? Number(stored) : 0;
  });



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
            setIsLoading(false);
            resolve(true)
          }, 100)
        });

      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    };

    fetchData();
  }, [])







  const stats: StatItem[] = [
    {
      name: "Successful Referral",
      value: 0,
      icon: <UserPlus size={30} fill="white" className="text-white"/>
    },
    {
      name: "Pending Referrals",
      value: 0,
      icon: <TimerIcon size={30}  className="text-purple-500"/>
    },
    {
      name: "Total Referral Bonus",
      value: 0,
      icon: <Gift size={30}   className="text-purple-500"/>
    }
  ];




  function copyText() {

    navigator.clipboard.writeText("https://app.despeed.net/register?ref=mm6FQ0AmwxiX")
      .then(() => toast("Copied!"))
      .catch((err) => console.error("Failed to copy text: ", err));
  }





  return (
    <section className='h-[85%] p-4 overflow-auto bg-[#06030f]'>

      {/**Referral Header */}
      <article className="border border-gray-900 p-4 pl-3 pr-3 rounded-lg bg-[#0E0417]">
        <h1 className="text-xl font-bold text-white mb-2 ">Referral Campaign</h1>

        <section className="grid grid-cols-1 md:grid-cols-9 gap-4">
          {
            stats.map((stat, index) => (
              <div
                key={index}
                className={`${index === 0 && "bg-gradient-to-r from-pink-200 to-[#6620d6]"}  w-full md:col-span-3 bg-white p-3 rounded-2xl border-none flex items-center gap-3 h-[15vh] lg:h-[18vh] bg-gradient-to-r from-[#392c47] to-[#23063b]`}
              >
                <div className={`${index === 0 && "bg-white/55"} h-[70%] p-6  bg-[#06030f] rounded-3xl flex justify-center items-center text-4xl`}>
                  {stat.icon}
                </div>

                <div className="text-white">
                  <div className='text-[15px] w-full font-bold'>{stat.name}</div>
                  <div className='text-3xl font-bold'>{stat.value}</div>
                </div>
              </div>
            ))}
        </section>
      </article>
      {/** End of Referral Header */}




      {/**Copy Link / Tweet referral Section */}
      <article className="border border-gray-900  bg-[#0E0417] mt-6 flex flex-col lg:flex-row gap-4 items-center p-4 rounded-xl">
        <div className="w-full h-[7vh]  lg:w-[280px] xl:w-[250px] lg:h-[7vh] truncate flex  justify-center items-center p-3 rounded-xl border border-gray-700 bg-gray-800/40 text-white"><span className="overflow-hidden text-center ">https://app.despeed.net/register?ref=mm6FQ0AmwxiX</span></div>

        <div className="w-full lg:w-[200px] xl:w-[150px] h-[7vh] flex justify-center items-center gap-2  rounded-xl cursor-pointer bg-gradient-to-r from-pink-200 to-[#6620d6] text-white"
          onClick={() => copyText()}
        >
          <div><CopyIcon fill="white"/></div>
          <button>
            Copy Link
          </button>
        </div>
        <Link
          href="https://twitter.com/intent/tweet?text=Join%20Despeed%20and%20get%20free%20data%20when%20you%20sign%20up%20using%20my%20link%20https://app.despeed.net/register?ref=mm6FQ0AmwxiX"
          className="w-full lg:w-[280px] xl:w-[200px] h-[7vh] block"
        >
          <div className="w-full flex h-full justify-center items-center gap-1 bg-[#0EA5E9]  rounded-xl p-1 text-white">
            <div><XIcon/></div>
            <span>Tweet Referral</span>
          </div>
        </Link>

        <div className="w-full lg:w-[400px] xl:w-[550px] h-[7vh] flex items-center justify-center gap-1 rounded-xl border border-gray-700 bg-gray-800/40 text-white ">
          <span className="text-sm pl-2 truncate">Unlock additional 200 Bytes as a reward for every successful referral you make!</span>
          <div className="pr-3"><Info /></div>
        </div>
      </article>

      {/** End of Copy Link / Tweet referral Section */}





      {/**  referral Table Section */}

      <article
        className="border border-gray-900 mt-6  gap-4 items-center  p-4 rounded-xl bg-[#0E0417]  text-white "
      >
        <header className='w-full h-full flex  flex-col lg:flex-row lg:justify-between lg:items-center mb-3 '>
          <h2 className='text-base lg:text-xl font-bold   h-full'>Referral Status</h2>

          <div className="rounded-xl overflow-hidden ">
            <DatePickerDemo />
          </div>
        </header>

        <section >
          <ReferralTable
            tableData={[]}
            isLoading={isLoading}
            HideIpAddress={HideIpAddress}
          />
        </section>

      </article>

      {/** End of referral Table Section */}


      <Toaster
        className="custom-toast"
        position="top-center"
        offset="16px"
        toastOptions={{
          style: {
            width: '150px',
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

    </section>
  );
}