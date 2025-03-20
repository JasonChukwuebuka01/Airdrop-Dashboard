"use client";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button"
import Link from "next/link";
import { MenuItem } from "@/Typing/types";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";



const menuItems: MenuItem[] = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: "/Images/DarkDashboard.svg",
        active: "/Images/active-dashboard.svg"
    },
    {
        name: "Referral",
        href: "/referral",
        icon: "/Images/referral.svg",
        active: "/Images/active-referral.svg"
    },
    {
        name: "Quests",
        href: "/quests",
        icon: "/Images/quests.svg",
        active: "/Images/active-quests.svg"
    },
    {
        name: "Transaction History",
        href: "/transaction-history",
        icon: "/Images/transaction-history.svg",
        active: "/Images/active-transaction-history.svg"
    },
    {
        name: "Earnings",
        href: "/earnings",
        icon: "/Images/earnings.svg",
        active: "/Images/active-earnings.svg"
    }
];




export default function ThumbNail() {

    const path = usePathname();


    return (
        <Sheet>
            <SheetTrigger asChild >
                <Button variant="outline">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </Button>
            </SheetTrigger>

            <SheetContent
                side={"left"}
                className=" w-[30%] sm:w-[23%] md:w-[20%] lg:w-[15%] bg-[#0E0417] text-white p-0 border-none "
            >
                <section className="w-full h-full">

                    <SheetHeader className="p-0 sticky top-0 -z-20">
                        <SheetTitle className="p-2 text-center mt-8">
                            <span className="text-2xl font-bold text-white">DeSpeed</span>
                        </SheetTitle>
                    </SheetHeader>


                    <nav className="h-[100vh] w-full flex flex-col justify-start ">
                        {
                            menuItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}                                   
                                >
                                    <SheetClose className="py-6 flex flex-col items-center justify-center  rounded-md transition-all duration-300 hover:bg-black/25 group w-full border-b border-b-gray-700/30 relative">
                                        <span className="text-3xl group-hover:scale-110 transition-transform">
                                            {
                                                path === item.href ? (
                                                    <img
                                                        src={item.active}
                                                        alt={item.name}
                                                        className="w-7 h-7"
                                                    />
                                                ) :
                                                    (
                                                        <img
                                                            src={item.icon}
                                                            alt={item.name}
                                                            className="w-7 h-7"
                                                        />
                                                    )
                                            }
                                        </span>
                                        {
                                            path === item.href ? (
                                                <span className={`text-sm font-medium group-hover:text-white mt-2 text-purple-500`} >{item.name}</span>
                                            ) :
                                                (<span className={`text-sm  font-medium group-hover:text-white mt-2 text-white}`} >{item.name}</span>)
                                        }

                                        {
                                            path === item.href && (

                                                <div className='absolute top-0 left-0 h-full w-1 flex  justify-center items-center  '>
                                                    <motion.div
                                                        className="absolute h-[10%] w-[6px] bg-gradient-to-r from-pink-200 to-[#7734E1] top-5 left-0 rounded-xl"
                                                        initial={{ height: 0, bottom: 5 }}
                                                        animate={{ height: "50%", bottom: 0 }}
                                                        transition={{
                                                            duration: 0.4,
                                                            ease: "easeOut"
                                                        }}
                                                        style={{
                                                            transformOrigin: "bottom"
                                                        }}
                                                    />
                                                </div>
                                            )
                                        }
                                    </SheetClose>

                                </Link>
                            ))}
                    </nav>
                </section>
            </SheetContent>
        </Sheet>
    )
}


