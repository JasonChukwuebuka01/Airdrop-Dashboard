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
        icon: "📊"
    },
    {
        name: "Referral",
        href: "/referral",
        icon: "👥"
    },
    {
        name: "Quests",
        href: "/quests",
        icon: "🎯"
    },
    {
        name: "Transaction History",
        href: "/transaction-history",
        icon: "📝"
    },
    {
        name: "Earnings",
        href: "/earnings",
        icon: "💰"
    }
];




const NavBar = () => {

    const path = usePathname();





    return (
        <section className="hidden xl:block w-[13%] bg-gray-800 text-white relative h-full  overflow-hidden  border-r-[1px] border-r-gray-700/30">
            <h1 className="text-2xl font-bold text-center sticky top-0 p-6">DeSpeed</h1>
            <nav className="h-full w-full flex flex-col justify-start ">
                {
                    menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="flex flex-col items-center justify-center py-4 rounded-md transition-all duration-300 hover:bg-gray-700 group w-full border-b border-b-gray-700/30 relative"
                        >
                            <span className="text-3xl group-hover:scale-110 transition-transform">
                                {item.icon}
                            </span>
                            <span className="text-sm text-gray-300 font-medium group-hover:text-white mt-2">
                                {item.name}
                            </span>

                            {
                                path === item.href && (
                                    <div className='absolute top-0 left-0 h-full w-1 flex  justify-center items-center  '>

                                        <motion.div
                                            className="absolute h-[10%] w-2 bg-purple-500 top-5 left-0 rounded-xl"
                                            initial={{ height: 0, bottom: 5}}
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
        </section>
    )
}

export default NavBar;