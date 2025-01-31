'use client';


import CustomSpeedometer from '@/components/Helper/Meter';
import { Button } from '@/components/ui/button';
import { Calendar1Icon, Copy, CopyIcon, LucideTwitter, Share2Icon, TicketPercent, TrafficConeIcon } from 'lucide-react';
import React from 'react';




export default function DashboardPage() {


  return (

    <>
      <main className='h-[85vh] p-4'>
        {/**Kilo Cycle section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">

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
                      <div className='text-3xl font-bold'>200</div>
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
                      <div className='text-3xl font-bold'>11100</div>
                    </div>
                  </div>

                  <div className='w-[15%] h-full flex items-end justify-end'>
                    <div><TrafficConeIcon size={40} /></div>
                  </div>
                </article>
              </aside>
            </section>
          </article>

          <article className="bg-white pl-2 pr-2 pt-0 rounded-lg border-[1px] border-gray-300 lg:h-[25vh]">
            <aside className="grid grid-cols-1 md:grid-cols-6 w-full h-full">

              <div className="h-full col-span-3">
                <h2 className='text-center font-bold pt-2'>Speedtest Quality</h2>
                <CustomSpeedometer />
              </div>

              <div className="col-span-3 flex border-l-[1px] border-gray-300 h-full">
                <div className="w-1/2 flex flex-col justify-center items-center h-full">
                  <div className="text-sm font-bold mb-2">Download Speed</div>
                  <h2 className="text-3xl  p-4 rounded-xl text-center font-bold border-2 border-gray-300">0.77 <span className="text-sm -mt-2 block" >MB/s</span></h2>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center h-full">
                  <div className="text-sm font-bold mb-2">Upload Speed</div>
                  <h2 className="text-3xl  p-4 rounded-xl text-center font-bold border-2 border-gray-300 ">2.44<span className="text-sm -mt-2 block" >MB/s</span></h2>
                </div>
              </div>
            </aside>
          </article>
        </section>

        {/**referral section */}
        <section className="flex flex-col lg:flex-row  justify-center items-center lg:justify-between gap-6 p-4 mt-6 border-[1px] border-gray-300 rounded-lg">

          <article className="flex items-center gap-3">
            <div className="text-sm font-bold border-[1px] border-gray-300 p-2 rounded-lg">
              <Share2Icon size={30} />
            </div>
            <div className="text-lg font-bold">Refer Your Friends</div>
          </article>

          <article className="grid grid-cols-1 lg:grid-cols-2  ">
            <div className=" text-sm font-bold">
              <Button className='flex gap-3 p-6 rounded-lg '>
                <CopyIcon size={20} />
                <span>Copy</span>
              </Button>
            </div>
            <div className="text-2xl font-bold border-2">
              <Button className='flex gap-3 p-6 rounded-lg w-full' onMouseDown={(e) => e.preventDefault()}>
                <LucideTwitter size={20} />
                <span>Tweet Referral</span>
              </Button>
            </div>
          </article>

        </section>


      </main>
    </>
  );
}
{/*  */ }