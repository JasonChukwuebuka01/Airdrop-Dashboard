"use client";

// components/SpeedtestMeter.tsx
import React from 'react';

interface SpeedtestMeterProps {
    value: number; // The current speed value (0-100)
    label?: string; // The label to display for current value
}

const SpeedtestMeter: React.FC<SpeedtestMeterProps> = ({ value, label = 'Mb/s' }) => {
    const angle = (value / 100) * 180; // Calculate needle angle (180 degrees for full scale)
    const radius = 80; // Radius of the speedometer arc
    const centerX = 100; // Center X coordinate of the speedometer
    const centerY = 100; // Center Y coordinate of the speedometer

    // Function to calculate the X and Y coordinates of a point on a circle
    const getPointOnCircle = (angle: number, radius: number, centerX: number, centerY: number) => {
        const rad = (angle - 90) * Math.PI / 180; // Convert angle to radians (adjust for SVG coordinate system)
        const x = centerX + radius * Math.cos(rad);
        const y = centerY + radius * Math.sin(rad);
        return { x, y };
    };

    // Define the start and end points of the speedometer arc
    const startPoint = getPointOnCircle(0, radius, centerX, centerY);
    const endPoint = getPointOnCircle(180, radius, centerX, centerY);

    const renderNeedle = () => {
        const needleLength = 60;
        const needleX = centerX + needleLength * Math.cos(Math.PI / 180 * (angle - 90));
        const needleY = centerY + needleLength * Math.sin(Math.PI / 180 * (angle - 90));

        return (
            <line
                x1={centerX}
                y1={centerY}
                x2={needleX}
                y2={needleY}
                stroke="#4A5568" // Dark gray needle color
                strokeWidth="3"
                strokeLinecap="round"
            />
        );
    };


    return (
        <div className="flex flex-col items-center justify-center">
            <svg width="200" height="160" aria-label="Speedtest Meter">
                {/* Gradient Definition */}
                <defs>
                    <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#E91E63" }} /> {/* Pink */}
                        <stop offset="100%" style={{ stopColor: "#9C27B0" }} /> {/* Purple */}
                    </linearGradient>
                </defs>

                {/* Background Arc */}
                <path
                    d={`M ${startPoint.x} ${startPoint.y} A ${radius} ${radius} 0 1 1 ${endPoint.x} ${endPoint.y}`}
                    stroke="url(#speedGradient)"
                    strokeWidth="8"
                    fill="none"
                />

                {/* Radial Lines */}
                {Array.from({ length: 51 }).map((_, index) => {
                    const lineAngle = index * (180 / 50); // Divide semicircle into 50 segments
                    const innerRadius = radius - 8; // Slightly inside the arc
                    const outerRadius = radius; // Same as the arc
                    const innerPoint = getPointOnCircle(lineAngle, innerRadius, centerX, centerY);
                    const outerPoint = getPointOnCircle(lineAngle, outerRadius, centerX, centerY);

                    return (
                        <line
                            key={index}
                            x1={innerPoint.x}
                            y1={innerPoint.y}
                            x2={outerPoint.x}
                            y2={outerPoint.y}
                            stroke="url(#speedGradient)"
                            strokeWidth="1"
                        />
                    );
                })}


                {/* Needle */}
                {renderNeedle()}

                {/* Needle Center Circle */}
                <circle cx={centerX} cy={centerY} r="5" fill="#4A5568" />

                {/* Labels */}
                <text x={centerX} y={centerY + 25} textAnchor="middle" className="text-sm text-gray-400">
                    {value} {label}
                </text>
                <text x={startPoint.x - 10} y={startPoint.y} textAnchor="middle" className="text-xs text-gray-400">
                    0
                </text>
                <text x={endPoint.x + 10} y={endPoint.y} textAnchor="middle" className="text-xs text-gray-400">
                    100
                </text>
                <text x={centerX} y="20" textAnchor="middle" className="text-sm text-gray-400">
                    Speedtest Quality
                </text>
            </svg>
        </div>
    );
};

export default SpeedtestMeter;