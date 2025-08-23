import React, { useEffect, useState } from 'react';

const CounterCard = ({ number, label, delay = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000; // 1 second
    const startTime = performance.now() + delay;

    const updateCounter = (timestamp) => {
      const elapsed = timestamp - startTime;
      if (elapsed < 0) {
        requestAnimationFrame(updateCounter);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * number);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [number, delay]);

  return (
    <div className="bg-[#1e293b] rounded-xl text-center py-8 px-6 shadow-md hover:scale-105 transition-all duration-300">
      <h3 className="text-4xl font-bold text-white mb-2">{count}+</h3>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
};

export default CounterCard;