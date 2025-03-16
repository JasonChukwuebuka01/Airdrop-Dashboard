"use client";

import React from 'react';
import { Calendar1Icon, ChevronRight, LockIcon, TrafficConeIcon, XIcon } from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"





type BonusMilestone = {
    numberOfDays: number;
    bonusAmount: number;
};



const bonusMilestones: BonusMilestone[] = [
    { numberOfDays: 7, bonusAmount: 1000 },
    { numberOfDays: 14, bonusAmount: 1500 },
    { numberOfDays: 21, bonusAmount: 3000 },
    { numberOfDays: 28, bonusAmount: 5000 },
];




const DialogeBox = () => {



    return (

        <AlertDialog>
            <AlertDialogTrigger>
                <ChevronRight />
            </AlertDialogTrigger>

            <AlertDialogContent className="lg:max-w-[45rem] p-0 pb-3">
                <AlertDialogHeader className='p-0 '>
                    <section className='flex justify-between items-center p-5 border-b border-gray-300 mb-3'>
                        <AlertDialogTitle className='text-2xl font-bold'>Bytes Bonus Milestones</AlertDialogTitle>
                        <AlertDialogCancel className='border-none outline-none shadow-none'>
                            <XIcon />
                        </AlertDialogCancel>
                    </section>


                    <section className='h-full pl-3 pr-3'>
                        {
                            bonusMilestones.map((mileStone, index) => (
                                <section
                                    key={index}
                                    className='border border-gray-300 h-[15vh] flex items-center justify-between pl-4 pr-4 mb-3 rounded-2xl'
                                >
                                    <article className='w-[50%] h-[60%] flex justify-between items-center'>
                                        <section className='flex items-center gap-3 w-full'>
                                            <div className='h-[30%] p-3 bg-gray-200 rounded-2xl flex justify-center items-center'>
                                                <Calendar1Icon size={30} />
                                            </div>

                                            <h2 className='w-full text-xl font-bold'>{mileStone.numberOfDays} days check-in bonus</h2>
                                        </section>
                                    </article>

                                    <article className='flex items-center justify-center'>

                                        <button
                                            className={`bg-purple-700 text-white py-2 px-4  w-full font-bold text-[15px] flex justify-center items-center rounded-xl p-6 gap-2  border border-gray-300`}
                                        >
                                            <span className='flex gap-2 justify-center items-center font-bold text-base'>
                                                {mileStone.bonusAmount}
                                                <TrafficConeIcon size={20} />
                                            </span>
                                        </button>
                                    </article>
                                </section>
                            ))
                        }

                    </section>


                </AlertDialogHeader>






            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DialogeBox
