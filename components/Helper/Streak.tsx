import { useState, useEffect } from 'react';
import { Gift, GiftIcon } from 'lucide-react'; // Using Lucide React Icons for the gift icon

const StreakCounter = () => {
  const [streak, setStreak] = useState(0);
  const [sliderProgress, setSliderProgress] = useState(0);

  // Slider length and icon intervals
  const sliderLength = 600; // Longer slider (600px)
  const iconInterval = 7; // Add an icon every 7 days
  const maxStreak = 28; // Maximum streak for demo purposes

  useEffect(() => {
    // Load streak from localStorage
    const savedStreak = localStorage.getItem('streak');
    if (savedStreak) {
      const parsedStreak = parseInt(savedStreak, 10);
      setStreak(parsedStreak);
      setSliderProgress((parsedStreak / maxStreak) * sliderLength);
    }
  }, []);

  const checkIn = () => {
    if (streak < maxStreak) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setSliderProgress((newStreak / maxStreak) * sliderLength);
      localStorage.setItem('streak', newStreak.toString());
    }
  };

  // Generate icons for 7-day intervals
  const renderIcons = () => {
    const icons = [];
    for (let i = 1; i <= maxStreak / iconInterval; i++) {
      const position = (i * iconInterval * sliderLength) / maxStreak;
      icons.push(
        <div
          key={i}
          className="absolute flex items-center justify-center"
          style={{ left: `${position}px` }}
        >
          <GiftIcon className="text-purple-500 w-6 h-6" /> {/* Lucide gift icon */}
        </div>
      );
    }
    return icons;
  };

  return (
    <div className="flex flex-col items-center justify-center h-[20vh] bg-gray-50 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Current Streak: {streak} days</h1>
      <div className="relative w-full max-w-2xl">
        {/* Slider Track */}
        <div className="w-[90%] h-3 bg-gray-200 rounded-full overflow-hidden relative">
          {/* Colored Progress */}
          <div
            className="h-full bg-green-500 rounded-full"
            style={{ width: `${sliderProgress}px` }}
          ></div>
          {/* Icons */}
          {renderIcons()}
        </div>
      </div>
      <button
        className="mt-6 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors"
        onClick={checkIn}
        disabled={streak >= maxStreak}
      >
        {streak >= maxStreak ? 'Max Streak Reached' : 'Check In'}
      </button>
      <p className="mt-4 text-sm text-gray-600">
        Check in daily to keep your streak alive and avoid it resetting
      </p>
    </div>
  );
};

export default StreakCounter;