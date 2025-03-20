"use client";

import { MenuItem } from '@/Typing/types';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
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

const NavBar = () => {

    const path = usePathname();




    return (
        <motion.section 
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ 
                duration: 0.5,
                ease: "easeOut",
                type: "spring",
                stiffness: 100
            }}
            className="hidden xl:block w-[11%] bg-[#0E0417] text-white relative h-full overflow-hidden border-r-[1px] border-r-gray-700/30"
        >
            <h1 className="text-2xl font-bold text-center sticky top-0 p-6">DeSpeed</h1>
            <nav className="h-full w-full flex flex-col justify-start ">
                {
                    menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="py-6 flex flex-col items-center justify-center  rounded-md transition-all duration-300 hover:bg-black/25 group w-full border-b border-b-gray-700/30 relative"
                        >
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
                            (   <span className={`text-sm  font-medium group-hover:text-white mt-2 text-white}`} >{item.name}</span>)
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

                        </Link>
                    ))}
            </nav>
        </motion.section>
    )
}

export default NavBar;