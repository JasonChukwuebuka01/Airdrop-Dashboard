import React from 'react';

const CustomSpeedometer = ({ value = 0, maxValue = 100 }) => {
  const radius = 100;
  const strokeWidth = 20;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / maxValue) * circumference;

  return (
    <div className="flex items-center justify-center ">
    <svg width="250" height="125" viewBox="0 0 250 150">
        {/* Background Circle */}
        <circle
          cx="125"
          cy="125"
          r={radius}
          fill="none"
          stroke="rgb(168,83,241)"
          strokeWidth={strokeWidth}
        />
        {/* Progress Circle */}
        <circle
          cx="125"
          cy="125"
          r={radius}
          fill="none"
          stroke="rgb(168,83,241)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          transform="rotate(-90, 125, 125)"
        />
        {/* Needle */}
        <line
          x1="125"
          y1="125"
          x2="125"
          y2="50"
          stroke="#ff5722"
          strokeWidth="4"
          transform={`rotate(${(value / maxValue) * 180 - 90}, 125, 125)`}
        />
        {/* Center Circle */}
        <circle cx="125" cy="125" r="8" fill="#ff5722" />
      </svg>
    </div>
  );
};

export default CustomSpeedometer;