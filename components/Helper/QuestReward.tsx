"use client";

import React, { useState, useEffect } from 'react';
import { Check, Lock, Globe, DollarSign, Clock, Calendar, LockIcon, TrafficConeIcon } from 'lucide-react';




const QuestsRewards = () => {





    const localStorageKey = 'questsRewardsCountdown'; // Key for storing countdown in localStorage
    const initialCountdown = 16 * 60 * 60; // 16 hours in seconds
    const [countdown, setCountdown] = useState<number>(initialCountdown);
    const [isClaimable, setIsClaimable] = useState<boolean>(false);
    const [streak, setStreak] = useState<number>(3);
    const [claimed, setClaimed] = useState<boolean>(false);
    const [totalEarned, setTotalEarned] = useState<number>(21200);
    const [questsCompleted, setQuestsCompleted] = useState<number>(9);






    useEffect(() => {
        // Load countdown from localStorage on component mount
        const storedCountdown = localStorage.getItem(localStorageKey);
        if (storedCountdown) {
            setCountdown(parseInt(storedCountdown, 10));
        } else {
            setCountdown(initialCountdown); // Initialize if no value in localStorage
        }
    }, []);
    




    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (countdown > 0) {
            interval = setInterval(() => {
                setCountdown((prevCountdown) => {
                    const newCountdown = prevCountdown - 1;
                    try {
                        localStorage.setItem(localStorageKey, newCountdown.toString());
                    } catch (error) {
                        console.error('Failed to update localStorage:', error);
                    }
                    return newCountdown;
                });
            }, 1000);
        } else {
            setIsClaimable(true);
            try {
                localStorage.removeItem(localStorageKey);
            } catch (error) {
                console.error('Failed to clear localStorage:', error);
            }
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [countdown]);



    const handleClaim = async () => {
        if (isClaimable) {
            try {
                setClaimed(true);
                setIsClaimable(false);
                await Promise.all([
                    setTotalEarned(prevTotal => prevTotal + 100),
                    setQuestsCompleted(prevQuests => prevQuests + 1),
                    setStreak(prevStreak => Math.min(prevStreak + 1, 28))
                ]);
                localStorage.removeItem(localStorageKey);
                setCountdown(initialCountdown);
                setTimeout(() => setClaimed(false), 1000);
            } catch (error) {
                console.error('Failed to process claim:', error);
                setClaimed(false);
                setIsClaimable(true);
            }
        }
    };

    const formatTime = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };

    const progressWidth = Math.min((streak / 28) * 100, 100); // Calculate progress width



    return (

        <section className="bg-gray-900 text-white p-5 rounded-lg w-full h-[300vh]">
            <header>
                <h1 className="text-2xl font-semibold mb-5">Quests & Rewards</h1>
            </header>

            <article className='grid grid-cols-1 lg:grid-cols-7 gap-4'>
                <div className=' lg:col-span-5'>
                    <article className="bg-gray-800 rounded-lg p-5 mb-5">
                        <div className="flex justify-between items-center md:flex-row flex-col">
                            <header className="flex items-center mb-3 md:mb-0">
                                <div className="bg-purple-700 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                                    <Check size={20} aria-hidden="true" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-medium">Daily Claim</h2>
                                    <time className="text-gray-400 text-sm">Unlock in {formatTime(countdown)}</time>
                                </div>
                            </header>
                            <nav>
                                <button
                                    onClick={handleClaim}
                                    disabled={!isClaimable || claimed}
                                    aria-label={claimed ? "Already claimed" : "Claim daily reward"}
                                    className={`bg-purple-700 text-white py-2 px-4 rounded-md disabled:bg-gray-700 
                ${isClaimable && 'hover:bg-purple-600'} w-full font-bold text-[15px] flex justify-center items-center rounded-xl p-6 gap-2  border border-gray-300`}
                                >
                                    <LockIcon size={18}/>
                                    {
                                        claimed ?
                                            "Claimed"
                                            :
                                            (
                                                <span className='flex gap-2 justify-center items-center'>
                                                    100
                                                    <TrafficConeIcon size={18} />
                                                </span>

                                            )}
                                </button>



                            </nav>
                        </div>
                    </article>

                    <article className="bg-gray-800 rounded-lg p-5 mb-5">
                        <header className="mb-4">
                            <h2 className="text-lg font-medium flex items-center">
                                <div className="bg-purple-700 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                                    <Calendar size={20} aria-hidden="true" />
                                </div>
                                Daily Streak
                            </h2>
                            <p className="text-gray-400 text-sm">Complete each streak milestone to unlock bonus rewards</p>
                        </header>

                        <div>
                            <h4 className="text-md font-medium">Current Streak: {streak} days</h4>
                            <p className="text-gray-400 text-sm">Check in daily to keep your streak alive and avoid it resetting</p>

                            {/* Progress Bar */}
                            <div className="bg-gray-700 rounded-full h-2 mt-2 relative">
                                <div
                                    className="bg-purple-500 rounded-full h-2"
                                    style={{ width: `${progressWidth}%` }}
                                ></div>
                                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full flex justify-between">
                                    <span className="text-gray-500 text-xs relative -top-4"></span>
                                    <span className="text-gray-500 text-xs relative -top-4"></span>
                                    <span className="text-gray-500 text-xs relative -top-4"></span>
                                    <span className="text-gray-500 text-xs relative -top-4"></span>
                                </div>
                                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full flex justify-between">
                                    <span className="text-white text-xs relative -top-6 left-[6%] bg-gray-800 rounded-md p-1">7 <Calendar size={12} className="inline-block ml-1" /></span>
                                    <span className="text-white text-xs relative -top-6 left-[30%] bg-gray-800 rounded-md p-1">14 <Calendar size={12} className="inline-block ml-1" /></span>
                                    <span className="text-white text-xs relative -top-6 left-[55%] bg-gray-800 rounded-md p-1">21 <Calendar size={12} className="inline-block ml-1" /></span>
                                    <span className="text-white text-xs relative -top-6 left-[80%] bg-gray-800 rounded-md p-1">28 <Calendar size={12} className="inline-block ml-1" /></span>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="bg-gray-800 rounded-lg p-5 mb-5">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-medium flex items-center">
                                    <div className="w-8 h-8 flex items-center justify-center mr-3">
                                        🎁
                                    </div>
                                    Weekly check-in Bytes bonus
                                </h3>
                            </div>
                            <div className="flex items-center text-gray-400">
                                <Lock size={16} className="mr-1" />
                                1000
                                <Globe size={16} className="ml-1" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-3">
                            <p className="text-gray-400 text-sm">Bytes bonus for next milestones</p>
                            <Check />
                        </div>
                    </article>

                </div>


                <aside className=" col-span-2 grid grid-cols-1 gap-5 h-[5vh] w-full ">
                    <article className="bg-gradient-to-r from-pink-400 to-purple-700  p-4 pt-5 pb-5 w-full rounded-2xl mx-auto flex  items-center gap-4">
                        <div className="bg-white/20 rounded-3xl w-16 h-16 flex items-center justify-center ">
                            <DollarSign size={24} aria-hidden="true" />
                        </div>
                        <div>
                            <h2 className="text-lg font-medium">Total Earned</h2>
                            <data value={totalEarned} className="text-3xl font-bold">{totalEarned}</data>
                        </div>
                    </article>

                    <article className="bg-gray-800  p-4 pt-5 pb-5 w-full rounded-2xl mx-auto flex  items-center gap-4">
                        <div className="bg-white/20 rounded-3xl w-16 h-16 flex items-center justify-center">
                            <Clock size={24} aria-hidden="true" />
                        </div>
                        <div>
                            <h2 className="text-lg font-medium">Quest Completed</h2>
                            <data value={questsCompleted} className="text-2xl font-bold">{questsCompleted}/19</data>
                        </div>
                    </article>
                </aside>
            </article>

        </section>
    );
};

export default QuestsRewards;