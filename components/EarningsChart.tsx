"use client"

// components/EarningsChart.tsx
import React from 'react';
import chartData from '@/data/chartData';

interface DataPoint {
    date: string;
    referralBonus: number;
    referralEarning: number;
    questsEarning: number;
    speedtestEarning: number;
}

type ChartData = DataPoint[];

const EarningsChart: React.FC = () => {

    const data = chartData as ChartData;

    const maxValue = Math.max(
        ...data.map((item) => item.questsEarning + item.speedtestEarning + item.referralBonus + item.referralEarning)
    );

    const chartHeight = 200; // Adjusted to match the visual height
    const barWidth = 16; // Adjusted to match the visual width
    const barSpacing = 20; // Adjusted for visual spacing
    const chartWidth = data.length * (barWidth + barSpacing);
    const yAxisValues = [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000];

    return (


        <div className="p-4 flex-1 border-2 border-red-500">
            <h2 className="text-2xl font-bold mb-4">Earnings Statistics</h2>
            <div className="relative overflow-x-auto">
                  <div style={{ width: chartWidth + 40, height: chartHeight + 30 }} className="relative">
                    {/* Vertical Axis Labels */}
                    {yAxisValues.map((value) => (
                        <div
                        key={value}
                        style={{ bottom: `${(value / 4000) * chartHeight}px` }}
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
                        <div key={index} style={{left: index * (barWidth+barSpacing)}} className='absolute bottom-0 '>
                    {/* Quest Earning Bar */}
                      {item.questsEarning > 0 && (
                         <div
                                 style={{
                                 height: `${(item.questsEarning / maxValue) * chartHeight}px`,
                                 bottom: 0,
                                 width: barWidth,
                                 backgroundColor: 'gray',
                                }}
                             className="absolute rounded-sm"
                         >
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
                                    className="absolute rounded-sm"
                                >
                              </div>
                         )}
                      </div>
                        ))}
                </div>
           </div>
            <div className="flex items-center mt-4">
                <div className="flex items-center mr-4">
                    <div className="w-3 h-3 rounded-full bg-sky-400 mr-2"></div>
                    <span>Referral Bonus</span>
                </div>
                <div className="flex items-center mr-4">
                    <div className="w-3 h-3 rounded-full bg-pink-400 mr-2"></div>
                    <span>Referral Earning</span>
                </div>
                <div className="flex items-center mr-4">
                    <div className="w-3 h-3 rounded-full bg-white mr-2"></div>
                    <span>Quests Earning</span>
                </div>
                <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                    <span>Speedtest Earning</span>
                </div>
            </div>
        </div>
    );
};

export default EarningsChart;