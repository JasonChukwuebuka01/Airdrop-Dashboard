"use client";

import { CopyIcon, Gift, TimerIcon, TwitterIcon, UserPlus } from "lucide-react";
import Link from "next/link";
import { ReactNode, useEffect } from 'react';

interface StatItem {
  name: string;
  value: number;
  icon: ReactNode;
}

export default function ReferralPage() {


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
      <article className="border-2 border-red-500 mt-6 flex flex-col md:flex-row gap-4">
        <div className="w-[250px] h-[10vh] truncate flex items-center p-3 rounded-xl border-2 border-gray-300"><span className="w-[90%] overflow-hidden text-center">https://app.despeed.net/register?ref=mm6FQ0AmwxiX</span></div>

        <div className="  w-[120px] flex justify-center items-center gap-2 p-3  border-2 border-blue-500">
          <div><CopyIcon /></div>
          <button
            onClick={() => { copyText() }}
          >
            Copy Link
          </button>
        </div>

        <Link
          href="https://twitter.com/intent/tweet?text=Join%20Despeed%20and%20get%20free%20data%20when%20you%20sign%20up%20using%20my%20link%20https://app.despeed.net/register?ref=mm6FQ0AmwxiX"
          className="md:col-span-1 w-[120px]"
        >
          <div className="flex justify-center items-center gap-3 border-2 border-blue-500">
            <div><TwitterIcon /></div>
            <span>Tweet Referral</span>
          </div>
        </Link>

        <div className="md:col-span-5 flex justify-center items-center gap-3 border-2 border-blue-500">
          <span>Unlock additional 200 Bytes as a reward for every successful referral you make!</span>
          <div><TwitterIcon /></div>
        </div>
      </article>

      {/** End of Copy Link / Tweet referral Section */}
    </section>
  );
}