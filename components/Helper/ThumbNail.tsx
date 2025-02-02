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




export default function ThumbNail() {




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
                className=" w-[35%] bg-gray-800 text-white p-0"
            >
                <section className="w-full h-full">

                    <SheetHeader className="p-0 sticky top-0">
                        <SheetTitle className="p-2 text-center mt-8">
                            <span className="text-2xl font-bold">DeSpeed</span>
                        </SheetTitle>
                    </SheetHeader>


                    <nav className="h-[100vh] w-full flex flex-col justify-start ">
                        {
                            menuItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="flex flex-col items-center justify-center py-4 rounded-md transition-all duration-300 hover:bg-gray-700 group w-full border-b border-b-gray-700/30"
                                >
                                    <span className="text-3xl group-hover:scale-110 transition-transform">
                                        <SheetClose>  {item.icon}</SheetClose>
                                    </span>
                                    <span className="text-sm text-gray-300 font-medium group-hover:text-white mt-2">
                                        <SheetClose> {item.name}</SheetClose>
                                    </span>

                                </Link>
                            ))}
                    </nav>
                </section>
            </SheetContent>
        </Sheet>
    )
}
