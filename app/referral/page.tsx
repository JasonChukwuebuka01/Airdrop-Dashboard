"use client";


import { DatePickerDemo } from "@/components/Helper/DatePicker";
import Info from "@/components/Helper/Info";
import ReferralTable from "@/components/Helper/ReferralTable";
import { CopyIcon, Gift, TimerIcon, TwitterIcon, UserPlus } from "lucide-react";
import Link from "next/link";
import { ReactNode, useEffect, useState } from 'react';

interface StatItem {
  name: string;
  value: number;
  icon: ReactNode;
}

export default function ReferralPage() {


  const [HideIpAddress] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(true);


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
      icon: <UserPlus size={30} />
    },
    {
      name: "Pending Referrals",
      value: 0,
      icon: <TimerIcon size={30} />
    },
    {
      name: "Total Referral Bonus",
      value: 0,
      icon: <Gift size={30} />
    }
  ];

  function copyText() {

    navigator.clipboard.writeText("https://app.despeed.net/register?ref=mm6FQ0AmwxiX")
      .then(() => alert("Link copied to clipboard!"))
      .catch((err) => console.error("Failed to copy text: ", err));
  }





  return (
    <section className='h-[85%] p-4 overflow-auto'>

      {/**Referral Header */}
      <article className="border border-gray-300 p-4 pl-3 pr-3 rounded-lg">
        <h1 className="text-xl font-bold text-gray-800 mb-2">Referral Campaign</h1>

        <section className="grid grid-cols-1 md:grid-cols-9 gap-4">
          {
            stats.map((stat, index) => (
              <div
                key={index}
                className="w-full md:col-span-3 bg-white p-3 rounded-2xl border border-gray-300 flex items-center gap-3 h-[15vh] lg:h-[20vh]"
              >
                <div className='h-[70%] p-6 bg-gray-200 rounded-2xl flex justify-center items-center text-4xl'>
                  {stat.icon}
                </div>

                <div>
                  <div className='text-[15px] w-full font-bold'>{stat.name}</div>
                  <div className='text-3xl font-bold'>{stat.value}</div>
                </div>
              </div>
            ))}
        </section>
      </article>
      {/** End of Referral Header */}




      {/**Copy Link / Tweet referral Section */}
      <article className="border border-gray-300 mt-6 flex flex-col lg:flex-row gap-4 items-center p-4 rounded-xl">
        <div className="w-full h-[7vh]  lg:w-[280px] xl:w-[250px] lg:h-[7vh] truncate flex  justify-center items-center p-3 rounded-xl border-2 border-gray-300"><span className="overflow-hidden text-center ">https://app.despeed.net/register?ref=mm6FQ0AmwxiX</span></div>

        <div className="w-full lg:w-[200px] xl:w-[150px] h-[7vh] flex justify-center items-center gap-2  rounded-xl border-2 border-gray-300 cursor-pointer"
          onClick={() => copyText()}
        >
          <div><CopyIcon /></div>
          <button>
            Copy Link
          </button>
        </div>
        <Link
          href="https://twitter.com/intent/tweet?text=Join%20Despeed%20and%20get%20free%20data%20when%20you%20sign%20up%20using%20my%20link%20https://app.despeed.net/register?ref=mm6FQ0AmwxiX"
          className="w-full lg:w-[280px] xl:w-[200px] h-[7vh] block"
        >
          <div className="w-full flex h-full justify-center items-center gap-3 border-2 border-gray-300 rounded-xl p-1">
            <div><TwitterIcon /></div>
            <span>Tweet Referral</span>
          </div>
        </Link>

        <div className="w-full lg:w-[400px] xl:w-[550px] h-[7vh] flex items-center justify-center gap-1 border border-gray-300 rounded-xl">
          <span className="text-sm pl-2 truncate">Unlock additional 200 Bytes as a reward for every successful referral you make!</span>
          <div className=""><Info /></div>
        </div>
      </article>

      {/** End of Copy Link / Tweet referral Section */}





      {/**  referral Table Section */}

      <article
        className="border border-gray-300 mt-6  gap-4 items-center  p-4 rounded-xl "
      >
        <header className='w-full h-full flex  flex-col lg:flex-row lg:justify-between lg:items-center mb-3 '>
          <h2 className='text-base lg:text-xl font-bold text-gray-800  h-full'>Referral Status</h2>

          <div className="border border-gray-500 rounded-xl overflow-hidden">
            <DatePickerDemo />
          </div>
        </header>

        <section>
          <ReferralTable
            tableData={[]}
            isLoading={isLoading}
            HideIpAddress={HideIpAddress}
          />
        </section>

      </article>

      {/** End of referral Table Section */}





    </section>
  );
}