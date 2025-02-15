"use client";

import React from 'react';
import { ChevronRight, XIcon } from "lucide-react";
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
    { numberOfDays: 30, bonusAmount: 100 },
    { numberOfDays: 60, bonusAmount: 200 },
    { numberOfDays: 90, bonusAmount: 300 },
    { numberOfDays: 120, bonusAmount: 400 },
];




const DialogeBox = () => {



    return (

        <AlertDialog>
            <AlertDialogTrigger>
                <ChevronRight />
            </AlertDialogTrigger>

            <AlertDialogContent className="max-w-[50rem] p-0">
                <AlertDialogHeader className='p-0 '>
                    <section className='flex justify-between items-center p-5 border-b border-gray-300'>
                        <AlertDialogTitle className='text-xl font-bold'>Bytes Bonus Milestones</AlertDialogTitle>
                        <AlertDialogCancel className='border-none outline-none shadow-none'>
                            <XIcon  />
                        </AlertDialogCancel>
                    </section>


                    <section className='h-full pl-3 pr-3'>
                        {
                            bonusMilestones.map((mileStone, index) => (
                                <section
                                    key={index}
                                    className='border border-gray-500 h-[15vh] flex items-center justify-between pl-3 pr-3 mb-3 rounded-2xl'
                                >
                                    <article className='border-2 border-black w-[50%] h-[60%]'>

                                    </article>

                                    <article className='border-2 border-black w-[30%] h-[60%]'>


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
