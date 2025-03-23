"use client";

import React from 'react';
import { Calendar1Icon, ChevronRight, TrafficConeIcon, XIcon } from "lucide-react";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { motion } from "framer-motion";

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

            <AlertDialogContent asChild className='border border-gray-600'>
                <motion.div
                    className=" color w-[95%] text-white md:w-[80%] lg:max-w-[45rem] p-0 pb-3 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-2xl z-50"
                    initial={{ y: "-100%", x: "-50%", opacity: 0 }}
                    animate={{ y: "-50%", x: "-50%", opacity: 1 }}
                    transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 300,
                        duration: 0.4
                    }}
                >
                    <AlertDialogHeader className='p-0'>
                        <section className='flex justify-between  items-center p-2 lg:p-5 border-b border-gray-900 lg:mb-3'>
                            <AlertDialogTitle className='text-xl lg:text-2xl font-bold'>Bytes Bonus Milestones</AlertDialogTitle>
                            <AlertDialogCancel className='border-none outline-none shadow-none bg-transparent'>
                                <XIcon />
                            </AlertDialogCancel>
                        </section>

                        <section className='h-full lg:pl-3 lg:pr-3'>
                            {
                                bonusMilestones.map((mileStone, index) => (
                                    <section
                                        key={index}
                                        className=' bg-[#0E0417] border border-gray-900 h-[18vh] md:h-[10vh] lg:h-[15vh] flex  flex-col md:flex-row lg:items-center justify-between lg:px-4 p-2 py-3 lg:py-0 mb-3 rounded-2xl'
                                    >
                                        <article className=' lg:h-[60%] flex justify-between items-center'>
                                            <section className='flex items-center gap-3 w-full'>
                                                <div className='h-[30%] p-3 bg-gradient-to-r from-[#3b3941] to-[#0d0624] rounded-2xl flex justify-center items-center'>
                                                    <Calendar1Icon size={30} className='text-purple-500' />
                                                </div>

                                                <h2 className='w-full text-base text-left lg:text-xl font-bold'>{mileStone.numberOfDays} days check-in bonus</h2>
                                            </section>
                                        </article>

                                        <article className='flex items-center lg:justify-center'>

                                            <button
                                                className={`bg-gradient-to-r from-[#392c47] to-[#0E0417] text-white py-1 px-4  lg:w-full font-bold text-[15px] flex justify-center items-center rounded-xl p-6 gap-2  border border-gray-300`}
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
                </motion.div>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DialogeBox
