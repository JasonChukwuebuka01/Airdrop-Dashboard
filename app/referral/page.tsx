"use client";

import { Gift, TimerIcon, UserPlus } from "lucide-react";
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
      icon: <UserPlus />
    },
    {
      name: "Pending Referral",
      value: 0,
      icon: <TimerIcon />
    },
    {
      name: "Total Referral Bonus",
      value: 0,
      icon: <Gift />
    }
  ];

  return (
    <section className='h-[85%] p-4 overflow-auto'>
      <article className="border-2 border-black">
        <h1 className="text-xl font-bold text-gray-800 mb-6">Referral Campaign</h1>

        <section className="grid grid-cols-1 md:grid-cols-9 p-3 gap-4 border-2 border-red-500">
          {
            stats.map((stat, index) => (
              <div
                key={index}
                className="w-full md:col-span-3 bg-white p-3 rounded-lg border-[1px] border-gray-300 flex items-center gap-3 h-[15vh] lg:h-[25vh]"
              >
                <div className='h-[70%] p-4 bg-gray-200 rounded-2xl flex justify-center items-center'>
                  {stat.icon}
                </div>

                <div>
                  <div className='text-sm w-full font-bold'>{stat.name}</div>
                  <div className='text-lg font-bold'>{stat.value}</div>
                </div>
              </div>
            ))}
        </section>
      </article>
    </section>
  );
}