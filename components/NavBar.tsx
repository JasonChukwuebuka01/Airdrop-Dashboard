import { MenuItem } from '@/Typing/types';
import Link from 'next/link'
import React from 'react'



const menuItems: MenuItem[] = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: "📊"
    },
    {
        name: "Referral",
        href: "/dashboard/referral",
        icon: "👥"
    },
    {
        name: "Quest",
        href: "/dashboard/quest",
        icon: "🎯"
    },
    {
        name: "Transaction History",
        href: "/dashboard/transaction-history",
        icon: "📝"
    },
    {
        name: "Earnings",
        href: "/dashboard/earnings",
        icon: "💰"
    }
];




const NavBar = () => {





    return (
        <section className="hidden lg:block w-[13%] bg-gray-800 text-white relative h-full  overflow-hidden  border-r border-b-gray-700/30">
            <h1 className="text-2xl font-bold text-center sticky top-0 p-6">DeSpeed</h1>
            <nav className="h-full w-full flex flex-col justify-start ">
                {
                    menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="flex flex-col items-center justify-center py-4 rounded-md transition-all duration-300 hover:bg-gray-700 group w-full border-b border-b-gray-700/30"
                        >
                            <span className="text-3xl group-hover:scale-110 transition-transform">
                                {item.icon}
                            </span>
                            <span className="text-sm text-gray-300 font-medium group-hover:text-white mt-2">
                                {item.name}
                            </span>

                        </Link>
                    ))}
            </nav>
        </section>
    )
}

export default NavBar;