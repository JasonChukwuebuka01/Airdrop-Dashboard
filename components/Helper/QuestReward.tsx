"use client";

import React, { useState, useEffect } from 'react';
import { Check, Lock, Globe, DollarSign, Clock, Calendar, LockIcon, TrafficConeIcon, UnlockIcon } from 'lucide-react';
import DialogeBox from './DialogeBox';
import ReferralQuest from '../Quests/ReferralQuest';
import SocialQuest from '../Quests/SocialQuest';
import { toast, Toaster } from 'sonner';

const QuestsRewards = () => {
    const localStorageKey = 'questsRewardsCountdown'; // Key for storing countdown in localStorage

    const initialCountdown = 10; // 10 seconds

    const [countdown, setCountdown] = useState<number>(() => {
        const stored = localStorage.getItem(localStorageKey);
        return stored ? Number(stored) : 0;
    });
    const [isClaimable, setIsClaimable] = useState<boolean>(false);
    const [isWeeklyClaimableButton, setIsWeeklyClaimableButton] = useState<string>(localStorage.getItem("claimableButton") || "false");
    const [weeklyButtonValue, setWeeklyButtonValue] = useState<number>(1000);
    const [streak, setStreak] = useState<number>(() => {
        const storedStreak = localStorage.getItem("streak");
        return storedStreak ? Number(storedStreak) : 0;
    });


    const [dailyEarned, setDailyEarned] = useState<number>(() => {
        const dailyPoint = localStorage.getItem("dailyPoint");
        return dailyPoint ? parseInt(dailyPoint) : 0;
    });


    const [claimed, setClaimed] = useState<boolean>(false);
    const [totalEarned, setTotalEarned] = useState<number>(0);

    const [questsCompleted, setQuestsCompleted] = useState<number>(0);
    const [streakSevenClicked, setStreakSevenClicked] = useState<string>(localStorage.getItem("seven") || "true");
    const [streakFourteenClicked, setStreakFourTeenClicked] = useState<string>(localStorage.getItem("fourteen") || "true");
    const [streakTwentyOneClicked, setStreakTwentyOneClicked] = useState<string>(localStorage.getItem("twentyOne") || "true");
    const [streakTwentyEightClicked, setStreakTwentyEightClicked] = useState<string>(localStorage.getItem("twentyEight") || "true");
    const [lastClaimTime, setLastClaimTime] = useState<number>(() => {
        const storedTime = localStorage.getItem("lastClaimTime");
        return storedTime ? Number(storedTime) : Date.now();
    });

    //resetting local storage by removing to start all over.
    useEffect(() => {
        if (streak === 28) {
            localStorage.removeItem("seven");
            localStorage.removeItem("fourteen");
            localStorage.removeItem("twentyOne");
            localStorage.removeItem("twentyEight");
            setStreakSevenClicked("true");
            setStreakFourTeenClicked("true");
            setStreakTwentyOneClicked("true");
            setStreakTwentyEightClicked("true");
        };
    }, [streak])

    useEffect(() => {
        if (streak <= 7) {
            setWeeklyButtonValue(1000);
        } else if (streak > 7 && streak <= 14) {
            setWeeklyButtonValue(1500);
        } else if (streak > 14 && streak <= 21) {
            setWeeklyButtonValue(3000);
        } else {
            setWeeklyButtonValue(5000);
        };

        /** block code below triggers when streak is 7,14,21 0r 28 */
        if (streak % 7 === 0) {
            const SevenClicked = localStorage.getItem("seven") || streakSevenClicked;
            const fourteenClicked = localStorage.getItem("fourteen") || streakFourteenClicked;
            const twentyOneClicked = localStorage.getItem("twentyOne") || streakTwentyOneClicked;
            const twentyEightClicked = localStorage.getItem("twentyEight") || streakTwentyEightClicked;

            /**For streak  7 */
            if (streak === 7) {
                if (SevenClicked === "true") {
                    setIsWeeklyClaimableButton("true");
                } else {
                    setIsWeeklyClaimableButton("false");
                };
            }

            /**For streak 14 */
            if (streak === 14) {
                if (fourteenClicked === "true") {
                    setIsWeeklyClaimableButton("true");
                } else {
                    setIsWeeklyClaimableButton("false");
                };
            }

            /**For streak 21 */
            if (streak === 21) {
                if (twentyOneClicked === "true") {
                    setIsWeeklyClaimableButton("true");
                } else {
                    setIsWeeklyClaimableButton("false");
                };
            }

            /**For streak 28 */
            if (streak === 28) {
                if (twentyEightClicked === "true") {
                    setIsWeeklyClaimableButton("true");
                } else {
                    setIsWeeklyClaimableButton("false");
                };
            };
        } else {
            setIsWeeklyClaimableButton("false");
        }
    }, [streak])

    useEffect(() => {
        try {
            const totalEarned = localStorage.getItem("TotalEarned");
            if (totalEarned) {
                setTotalEarned(parseInt(totalEarned));
            } else {
                setTotalEarned(0);
            }
        } catch (error) {
            console.log(error);
        }
    }, [totalEarned])

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
            // setCountdown(initialCountdown);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [countdown]);




    const handleClaim = async () => {
        if (isClaimable) {
            try {
                const now = Date.now();
                const timeDiff = now - lastClaimTime;
                const hoursDiff = timeDiff / (1000 * 60 * 60);


                // Reset streak if more than 24 hours have passed
                if (hoursDiff > 24) {
                    setStreak(1);
                    localStorage.setItem("streak", "1");
                    localStorage.removeItem("dailyPoint");
                }

                setClaimed(true);
                setIsClaimable(false);
                setLastClaimTime(now);
                localStorage.setItem("lastClaimTime", now.toString());

                await Promise.all([
                    setTotalEarned((prevTotal) => {
                        const totalEarned = prevTotal + 100;
                        localStorage.setItem("TotalEarned", totalEarned.toString());
                        return totalEarned;
                    }),

                    setStreak(prevStreak => {
                        const newStreak = hoursDiff > 24 ? 1 : Math.min(prevStreak + 1, 28);

                        if (newStreak === 28) {
                            const freshStreak = 1
                            localStorage.setItem("streak", freshStreak.toString())
                            return freshStreak;
                        }
                        localStorage.setItem("streak", newStreak.toString());
                        return newStreak;
                    }),

                    setDailyEarned(prevDailyEarned => {
                        const daily = prevDailyEarned + 100;
                        localStorage.setItem("dailyPoint", daily.toString());
                        return daily;
                    })


                ]).then(() => {
                    toast.success("Daily Claim successfully")
                })


                localStorage.removeItem(localStorageKey);
                setCountdown(initialCountdown);
                setTimeout(() => setClaimed(false), 1000);
            } catch (error) {
                console.error('Failed to process claim:', error);
                toast.error("Failed to process claim")
                setClaimed(false);
                setIsClaimable(true);
            }
        }
    };

    const handleWeeklyClaim = () => {
        if (streak % 7 === 0) {
            if (streak === 7) {
                if (streakSevenClicked === "true") {
                    setTotalEarned(prev => {
                        const totalEarned = prev + 1000
                        localStorage.setItem("TotalEarned", totalEarned.toString());
                        return totalEarned;
                    });

                    setDailyEarned(prev => {
                        const dailyEarn = prev + 1000;
                        localStorage.setItem("dailyPoint", dailyEarn.toString());
                        return dailyEarn;
                    });

                    setStreakSevenClicked("false");
                    localStorage.setItem("seven", "false");
                    toast.success("Weekly Claim successful");
                    setTimeout(() => {
                        setIsWeeklyClaimableButton("false");
                        localStorage.setItem("claimableButton", "false");
                    }, 1000);
                };
            } else if (streak === 14) {
                if (streakFourteenClicked === "true") {
                    setTotalEarned(prev => {
                        const totalEarned = prev + 1500
                        localStorage.setItem("TotalEarned", totalEarned.toString());
                        return totalEarned;
                    });
                    setDailyEarned(prev => {
                        const dailyEarn = prev + 1500;
                        localStorage.setItem("dailyPoint",dailyEarn.toString());
                        return dailyEarn;
                    });

                    setStreakFourTeenClicked("false");
                    localStorage.setItem("fourteen", "false");
                    toast.success("Weekly Claim successful")
                    setTimeout(() => {
                        setIsWeeklyClaimableButton("false")
                        localStorage.setItem("claimableButton", "false")
                    }, 1000);
                }
            } else if (streak === 21) {
                if (streakTwentyOneClicked === "true") {
                    setTotalEarned(prev => {
                        const totalEarned = prev + 3000
                        localStorage.setItem("TotalEarned", totalEarned.toString());
                        localStorage.setItem("dailyPoint", totalEarned.toString());
                        return totalEarned;
                    });

                    setDailyEarned(prev => {
                        const dailyEarn = prev + 1000;
                        localStorage.setItem("dailyPoint", totalEarned.toString());
                        return dailyEarn;
                    });

                    setStreakTwentyOneClicked("false");
                    localStorage.setItem("twentyOne", "false");
                    toast.success("Weekly Claim successful")
                    setTimeout(() => {
                        setIsWeeklyClaimableButton("false");
                        localStorage.setItem("claimableButton", "false")
                    }, 1000);
                };
            } else if (streak === 28) {
                if (streakTwentyEightClicked === "true") {
                    setTotalEarned(prev => {
                        const totalEarned = prev + 5000
                        localStorage.setItem("TotalEarned", totalEarned.toString());
                        localStorage.setItem("dailyPoint", totalEarned.toString());
                        return totalEarned;
                    });

                    setDailyEarned(prev => {
                        const dailyEarn = prev + 1000;
                        localStorage.setItem("dailyPoint", totalEarned.toString());
                        return dailyEarn;
                    });

                    setStreakTwentyEightClicked("false");
                    localStorage.setItem("twentyEight", "false");
                    toast.success("Weekly Claim successful")
                    setTimeout(() => {
                        setIsWeeklyClaimableButton("false")
                        localStorage.setItem("claimableButton", "false")
                    }, 1000);
                };
            };
        };
    };

    const formatTime = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };

    const progressWidth = Math.min((streak / 28) * 100, 100); // Calculate progress width



    return (
        <section className=" text-white p-1 lg:p-3 rounded-3xl w-full  bg-[#0E0417] border border-gray-900">
            <header>
                <h1 className="text-2xl font-semibold mb-1 mt-4 lg:mt-0 px-5 lg:px-0">Quests & Rewards</h1>
            </header>

            <article className='grid grid-cols-1 lg:grid-cols-7 lg:gap-4 '>
                <section className=' lg:col-span-5'>
                    <article className=" bg-[#06030f] rounded-2xl p-5 mb-5 border border-gray-900">
                        <div className="flex justify-between md:items-center md:flex-row flex-col ">
                            <header className="flex items-center mb-3 md:mb-0 ">
                                <div className="bg-gradient-to-r from-pink-200 to-[#6620d6] rounded-2xl w-12 h-12  flex items-center justify-center mr-3">
                                    <Check size={20} aria-hidden="true" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-medium">Daily Claim</h2>
                                    <time className="text-gray-400 text-sm">
                                        {
                                            isClaimable ?
                                                (
                                                    <span>Unlocked</span>
                                                ) :
                                                (
                                                    <span>Unlock in {formatTime(countdown)}</span>
                                                )
                                        }
                                    </time>
                                </div>
                            </header>
                            <nav>
                                <button
                                    onClick={handleClaim}
                                    disabled={!isClaimable || claimed}
                                    aria-label={claimed ? "Already claimed" : "Claim daily reward"}
                                    className={`bg-purple-700 text-white py-2 px-4 rounded-md disabled:bg-white/25
                ${isClaimable && 'hover:bg-purple-600'} w-full font-bold text-[15px] flex justify-center items-center rounded-xl p-6 gap-2  border border-gray-500`}
                                >
                                    {
                                        isClaimable ? <UnlockIcon size={18} /> : <LockIcon size={18} />
                                    }
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

                    <article className="bg-[#06030f] rounded-2xl mb-5 pb-2 border border-gray-900 w-[100%]">
                        <section className="bg-[#06030f] rounded-2xl p-5  flex items-center border border-gray-900">
                            <div className="bg-gradient-to-r from-pink-200 to-[#6620d6] rounded-2xl w-12 h-12  flex items-center justify-center mr-3">
                                <Calendar size={20} aria-hidden="true" />
                            </div>

                            <div>
                                <h2 className="text-lg font-medium flex items-center">Daily Streak</h2>
                                <p className="text-gray-400 text-sm">Complete each streak milestone to unlock bonus rewards</p>
                            </div>
                        </section>

                        <section className='p-4 '>
                            <h4 className="text-md font-bold">Current Streak: {streak} {streak === 1 ? "day" : "days"}</h4>
                            <p className="text-gray-400 text-sm mb-5">Check in daily to keep your streak alive and avoid it resetting</p>

                            {/* Progress Bar */}
                            <div className="bg-gray-700 rounded-full h-4 mt-2 relative ">
                                <div
                                    className="bg-purple-500 rounded-full h-4"
                                    style={{ width: `${progressWidth}%` }}
                                >
                                </div>

                                <div className="absolute top-[200%] left-0 transform -translate-y-1/2 w-full flex justify-between">
                                    <span className="text-white text-xs relative -top-6 left-[23%] bg-gray-800 rounded-md p-1 flex  justify-center items-center">7<Calendar size={20} className="inline-block ml-1 text-purple-500" /></span>
                                    <span className="text-white text-xs relative -top-6 left-[15%] bg-gray-800 rounded-md p-1  flex  justify-center items-center">14<Calendar size={18} className="inline-block ml-1 text-purple-500" /></span>
                                    <span className="text-white text-xs relative -top-6 left-[10%] bg-gray-800 rounded-md p-1  flex  justify-center items-center">21<Calendar size={18} className="inline-block ml-1 text-purple-500" /></span>
                                    <span className="text-white text-xs relative -top-6 left-[0%] bg-gray-800 rounded-md p-1  flex  justify-center items-center">28<Calendar size={18} className="inline-block ml-1 text-purple-500" /></span>
                                </div>
                            </div>
                            {/* End Progress Bar */}
                        </section>

                        <article className="bg-[#06030f] rounded-lg mb-5 mt-5 w-[97%] mx-auto border border-gray-900 overflow-hidden">
                            <div className="flex  flex-col md:flex-row justify-between md:items-center  border-b border-b-gray-900 p-2 bg-white/15">
                                <div className='mb-2 md:mb-0'>
                                    <h3 className=" text-base md:text-lg font-medium flex items-center gap-2">
                                        <div className="w-8 h-8 flex items-center justify-center font-bold">🎁</div>
                                        Weekly check-in Bytes bonus
                                    </h3>
                                </div>
                                <button
                                    onClick={handleWeeklyClaim}
                                    aria-label={claimed ? "Already claimed" : "Claim daily reward"}
                                    className={` w-[40%] md:w-[18%] text-white py-2 px-4 rounded-md 
         ${isWeeklyClaimableButton === "true" && 'bg-gradient-to-r from-[#743dce] to-[#6620d6]'} bg-white/25 font-bold text-[15px] flex justify-center items-center rounded-xl p-3 gap-2  border border-gray-500`}
                                >
                                    <Lock size={16} className="mr-1" />
                                    {weeklyButtonValue}
                                    <Globe size={16} className="ml-1" />
                                </button>
                            </div>
                            <div className="flex justify-between items-center mt-3 p-2 pl-4 pr-4 pb-4">
                                <p className="text-gray-400 text-base">Bytes bonus for next milestones</p>
                                <DialogeBox />
                            </div>
                        </article>
                    </article>
                </section>

                <aside className=" col-span-2 grid grid-cols-1 gap-5 h-[5vh] w-full ">
                    <article className="bg-gradient-to-r from-pink-200 to-[#6620d6] p-4 pt-5 pb-5 w-full rounded-2xl mx-auto flex  items-center gap-4">
                        <div className="bg-white/20 rounded-3xl w-16 h-16 flex items-center justify-center ">
                            <DollarSign size={24} aria-hidden="true" />
                        </div>
                        <div>
                            <h2 className="text-lg font-medium">Total Earned</h2>
                            <data value={totalEarned} className="text-3xl font-bold">{totalEarned}</data>
                        </div>
                    </article>

                    <article className="bg-[#06030f] p-4 pt-5 pb-5 w-full rounded-2xl mx-auto flex  items-center gap-4 border border-gray-900">
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

            <ReferralQuest />

            <SocialQuest />

            <Toaster
                className="custom-toast"
                position="top-center"
                offset="16px"
                toastOptions={{
                    style: {
                        width: 'auto',
                        padding: 'auto',
                        margin: '4px',
                        background: "black",
                        fontSize: '18px',
                        color: 'white',
                        textAlign: 'center',
                        borderRadius: '8px',
                        borderWidth: '0px'

                    }
                }}
            />

        </section>
    );
};

export default QuestsRewards;