import { LockIcon, TrafficConeIcon } from 'lucide-react';
import React from 'react'



type ReferralData = {
    totalRefNumber: number;
    refValuePoint: number;
    refTitleName: string;
}

const referralDataFirstHalf: ReferralData[] = [
    { totalRefNumber: 1, refValuePoint: 100, refTitleName: "Referral Rookie: 1 Invite" },
    { totalRefNumber: 10, refValuePoint: 5000, refTitleName: "Referral Worrier: 10 Invites" },
    { totalRefNumber: 20, refValuePoint: 10000, refTitleName: "Referral Champion: 20 Invites" },
];

const referralDataSecondHalf: ReferralData[] = [
    { totalRefNumber: 30, refValuePoint: 20000, refTitleName: "Referral Hero: 30 Invites" },
    { totalRefNumber: 50, refValuePoint: 40000, refTitleName: "Referral Legend: 50 Invites" },
    { totalRefNumber: 99, refValuePoint: 75000, refTitleName: "Referral God: 99 Invites" }
];





const ReferralQuest = () => {




    return (


        <section className='mt-[18rem] lg:mt-2'>
            <h1 className='text-2xl font-semibold mb-1'>Referral Quests</h1>

            <article className='grid grid-cols-1 gap-2 md:grid-cols-6 h-[90%]'>

                <section className='md:col-span-3'>
                    {
                        referralDataFirstHalf.map((referralData, index) => (
                            <article
                                key={index}
                                className='border border-gray-700 pl-2  pr-2 pb-5 pt-5 h-[30%] mb-3 rounded-xl'
                            >

                                <div className='flex items-center gap-3 mb-2'>
                                    <div className=' w-[15%] lg:w-[9%] p-3 bg-gray-200 rounded-2xl flex justify-center items-center text-black'>
                                        <span className='border border-black rounded-full w-[100%] h-[100%] pl-3 pr-3 pt-1 pb-1 flex justify-center items-center text-xs font-bold'>{referralData.totalRefNumber}</span>
                                    </div>

                                    <div className='w-[90%] flex flex-col justify-center items-start'>
                                        <h2 className='text-base mb-1'>{referralData.refTitleName}</h2>
                                        <p className='border border-gray-700 w-[90%] h-5 flex justify-center items-center rounded-2xl'> <span className='text-xs font-bold'>0/{referralData.totalRefNumber} {referralData.totalRefNumber === 1 ? "Invite" : "Invites"}</span></p>
                                    </div>

                                </div>
                                <button
                                    disabled={true}
                                    className={` text-white py-1 px-4 disabled:bg-gray-700  font-bold text-[15px] flex justify-center items-center rounded-xl gap-2  border border-gray-300 mt-1`}
                                >
                                    <LockIcon size={18} />
                                    <span className='flex gap-2 justify-center items-center'>
                                        {referralData.refValuePoint}
                                        <TrafficConeIcon size={18} />
                                    </span>
                                </button>
                            </article>
                        ))

                    }

                </section>




                <section className='md:col-span-3'>

                    {
                       referralDataSecondHalf.map((referralData, index) => (
                            <article
                                key={index}
                                className='border border-gray-700 pl-2  pr-2 pb-5 pt-5 h-[30%] mb-3 rounded-xl'
                            >

                                <div className='flex items-center gap-3 mb-2'>
                                    <div className=' w-[15%] lg:w-[9%] p-3 bg-gray-200 rounded-2xl flex justify-center items-center text-black'>
                                        <span className='border border-black rounded-full w-[100%] h-[100%] pl-3 pr-3 pt-1 pb-1 flex justify-center items-center text-xs font-bold'>{referralData.totalRefNumber}</span>
                                    </div>

                                    <div className='w-[90%] flex flex-col justify-center items-start'>
                                        <h2 className='text-base mb-1'>{referralData.refTitleName}</h2>
                                        <p className='border border-gray-700 w-[90%] h-5 flex justify-center items-center rounded-2xl'> <span className='text-xs font-bold'>0/{referralData.totalRefNumber} {referralData.totalRefNumber === 1 ? "Invite" : "Invites"}</span></p>
                                    </div>

                                </div>
                                <button
                                    disabled={true}
                                    className={` text-white py-1 px-4 disabled:bg-gray-700  font-bold text-[15px] flex justify-center items-center rounded-xl gap-2  border border-gray-300 mt-1`}
                                >
                                    <LockIcon size={18} />
                                    <span className='flex gap-2 justify-center items-center'>
                                        {referralData.refValuePoint}
                                        <TrafficConeIcon size={18} />
                                    </span>
                                </button>
                            </article>
                        ))

                    }


                </section>

            </article>



        </section>
    )
}

export default ReferralQuest;