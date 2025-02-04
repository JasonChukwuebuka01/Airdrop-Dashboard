"use client";

// components/EarningsChart.tsx
import React, { useEffect, useRef, useState } from 'react';
import DemochartData from '@/data/demoChatData';
import { RepeatIcon } from 'lucide-react';

interface DataPoint {
    date: string;
    referralBonus: number;
    referralEarning: number;
    questsEarning: number;
    speedtestEarning: number;
}

type ChartData = DataPoint[];


interface DemoEarningsChartProps {
    handleShowDemo: () => void;
}

const DemoEarningsChart: React.FC<DemoEarningsChartProps> = ({ handleShowDemo }) => {

    const data = DemochartData as ChartData;

    const maxValue = Math.max(
        ...data.map((item) => item.questsEarning + item.speedtestEarning + item.referralBonus + item.referralEarning)
    );

    const chartHeight = 220;
    const barWidth = 20;
    const barSpacing = 15;
    const chartWidth = data.length * (barWidth + barSpacing);
    const yAxisValues = ['0', '500', '1,000', '1,500', '2,000', '2,500', '3,000', '3,500', '4,000'];



    const [hoveredTooltip, setHoveredTooltip] = useState<{
        type: 'quests' | 'speedtest' | 'referral';
        x: number;
        y: number;
        value: number;
        date: string;
    } | null>(null);

    const [ShowDemoIcon, setShowDemoIcon] = useState<boolean>(true);

    const chartRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            setHoveredTooltip(null);
        };

        if (chartRef.current) {
            chartRef.current.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (chartRef.current) {
                chartRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);




    const executeAndShowRalChartData = () => {

        setShowDemoIcon(false);
        handleShowDemo();
    }


    return (
        <div className="p-4 pt-0 pb-0 flex-1 relative">
            {/* Glass overlay */}
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-[5] rounded-lg flex items-center justify-center">
                <div className="bg-white/80 p-4 rounded-full shadow-lg">
                    {ShowDemoIcon ? (
                        <RepeatIcon
                            className="w-8 h-8 text-gray-600"
                            onClick={() => executeAndShowRalChartData()}
                        />
                    ) : (
                        <RepeatIcon
                            className="w-8 h-8 text-gray-600 animate-spin"
                        />
                    )}
                </div>
            </div>

            <h2 className="text-2xl font-bold relative z-[5]">Earnings Statistics</h2>
            <div ref={chartRef} className="relative overflow-x-auto -mt-7 h-[48vh]">
                <div style={{ width: chartWidth + 40, height: chartHeight + 45 }} className="relative">
                    {/* Vertical Axis Labels */}
                    {yAxisValues.map((value) => (
                        <div
                            key={value}
                            style={{ bottom: `${(parseFloat(value.replace(/,/g, '')) / 4000) * chartHeight}px` }}
                            className="absolute left-0 text-sm text-gray-400 transform translate-y-1/2"
                        >
                            {value}
                        </div>
                    ))}
                    {/* Horizontal Axis Labels */}
                    {data.map((item, index) => (
                        <div
                            key={index}
                            style={{ left: index * (barWidth + barSpacing) + 10, bottom: -20 }}
                            className="absolute text-xs text-gray-400 "
                        >
                            {item.date}
                        </div>
                    ))}
                    {data.map((item, index) => (
                        <div
                            key={index}
                            style={{ left: index * (barWidth + barSpacing) }}
                            className="absolute bottom-0"
                        >
                            {/* Quest Earning Bar */}
                            {item.questsEarning > 0 && (
                                <div
                                    style={{
                                        height: `${(item.questsEarning / maxValue) * chartHeight}px`,
                                        bottom: 0,
                                        width: barWidth,
                                        backgroundColor: 'white',
                                    }}
                                    className="absolute rounded-sm "
                                    onMouseEnter={(e) => {
                                        const rect = (e.target as Element).getBoundingClientRect();
                                        setHoveredTooltip({ type: 'quests', x: rect.left, y: rect.top, value: item.questsEarning, date: item.date });
                                    }}
                                    onMouseLeave={() => setHoveredTooltip(null)}
                                >
                                    {/* Tooltip */}
                                    {hoveredTooltip?.type === 'quests' && hoveredTooltip.date === item.date && (
                                        <div
                                            style={{
                                                left: '50%',
                                                bottom: '50%',
                                                transform: 'translateX(-50%)',
                                            }}
                                            className="absolute z-10 bg-black border rounded-md p-2 text-sm w-[140px] text-white"
                                        >
                                            <p className="font-medium mb-1">{hoveredTooltip.date}</p>
                                            <div className='flex items-center'>
                                                <div className='w-[10px] h-[10px] bg-white border-[1.5px] border-gray-200 mr-[2px]'></div> <span className="font-medium">Quests:</span>{hoveredTooltip.value}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                            {/* Speedtest Earning Bar */}
                            {item.speedtestEarning > 0 && (
                                <div
                                    style={{
                                        height: `${(item.speedtestEarning / maxValue) * chartHeight}px`,
                                        bottom: (item.questsEarning / maxValue) * chartHeight,
                                        width: barWidth,
                                        backgroundColor: 'purple',
                                    }}
                                    className="absolute rounded-sm "
                                    onMouseEnter={(e) => {
                                        const rect = (e.target as Element).getBoundingClientRect();
                                        setHoveredTooltip({ type: 'speedtest', x: rect.left, y: rect.top, value: item.speedtestEarning, date: item.date });
                                    }}
                                    onMouseLeave={() => setHoveredTooltip(null)}
                                >
                                    {/* Tooltip */}
                                    {hoveredTooltip?.type === 'speedtest' && hoveredTooltip.date === item.date && (
                                        <div
                                            style={{
                                                left: '50%',
                                                bottom: '100%',
                                                transform: 'translateX(-50%)',
                                            }}
                                            className="absolute z-10 bg-black border rounded-md p-2 text-sm w-[140px] text-white"
                                        >
                                            <p className="font-medium mb-1">{hoveredTooltip.date}</p>
                                            <div className='flex items-center'>
                                                <div className='w-[10px] h-[10px] bg-purple-500 border-[1.5px] border-gray-200 mr-[2px]'></div> <span className="font-medium">Speedtest:</span>{hoveredTooltip.value}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                            {/* Referral Earning Bar */}
                            {item.referralEarning > 0 && (
                                <div
                                    style={{
                                        height: `${(item.referralEarning / maxValue) * chartHeight}px`,
                                        bottom: 0,
                                        width: barWidth,
                                        backgroundColor: 'pink',
                                    }}
                                    className="absolute rounded-sm "
                                    onMouseEnter={(e) => {
                                        const rect = (e.target as Element).getBoundingClientRect();
                                        setHoveredTooltip({ type: 'quests', x: rect.left, y: rect.top, value: item.referralEarning, date: item.date });
                                    }}
                                    onMouseLeave={() => setHoveredTooltip(null)}
                                >
                                    {/* Tooltip */}
                                    {hoveredTooltip?.type === 'quests' && hoveredTooltip.date === item.date && (
                                        <div
                                            style={{
                                                left: '50%',
                                                bottom: '50%',
                                                transform: 'translateX(-50%)',
                                            }}
                                            className="absolute z-10 bg-black border rounded-md p-2 text-sm w-[140px] text-white"
                                        >
                                            <p className="font-medium mb-1">{hoveredTooltip.date}</p>
                                            <div className='flex items-center'>
                                                <div className='w-[10px] h-[10px] bg-pink-500 border-[1.5px] border-gray-200 mr-[2px]'></div> <span className="font-medium">Quests:</span>{hoveredTooltip.value}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                            {/* Referral bOnus Bar */}
                            {item.referralBonus > 0 && (
                                <div
                                    style={{
                                        height: `${(item.referralBonus / maxValue) * chartHeight}px`,
                                        bottom: 0,
                                        width: barWidth,
                                        backgroundColor: 'blue',
                                    }}
                                    className="absolute rounded-sm "
                                    onMouseEnter={(e) => {
                                        const rect = (e.target as Element).getBoundingClientRect();
                                        setHoveredTooltip({ type: 'quests', x: rect.left, y: rect.top, value: item.referralBonus, date: item.date });
                                    }}
                                    onMouseLeave={() => setHoveredTooltip(null)}
                                >
                                    {/* Tooltip */}
                                    {hoveredTooltip?.type === 'quests' && hoveredTooltip.date === item.date && (
                                        <div
                                            style={{
                                                left: '50%',
                                                bottom: '50%',
                                                transform: 'translateX(-50%)',
                                            }}
                                            className="absolute z-10 bg-black border rounded-md p-2 text-sm w-[140px] text-white"
                                        >
                                            <p className="font-medium mb-1">{hoveredTooltip.date}</p>
                                            <div className='flex items-center'>
                                                <div className='w-[10px] h-[10px] bg-blue-500 border-[1.5px] border-gray-200 mr-[2px]'></div> <span className="font-medium">Quests:</span>{hoveredTooltip.value}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center mt-2 ">
                <div className="flex items-center mr-2">
                    <div className="w-4 h-4 rounded-full bg-sky-400 mr-2"></div>
                    <span className='text-xs'>Referral Bonus</span>
                </div>
                <div className="flex items-center mr-2">
                    <div className="w-4 h-4 rounded-full bg-pink-400 mr-2"></div>
                    <span className='text-xs'>Referral Earning</span>
                </div>
                <div className="flex items-center mr-2">
                    <div className="w-4 h-4 rounded-full bg-white mr-2"></div>
                    <span className='text-xs' >Quests Earning</span>
                </div>
                <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-purple-700 mr-2"></div>
                    <span className='text-xs'>Speedtest Earning</span>
                </div>
            </div>
        </div>
    );
};

export default DemoEarningsChart;