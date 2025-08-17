// src/components/Countdown.tsx
import { useEffect, useState } from "react";

export const Countdown = () => {
  const targetDate = new Date("2025-09-08T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((timeLeft / (1000 * 60)) % 60);
  const secs = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="bg-[#BCFF40] text-black py-16 text-center">
      <h2 className="text-3xl font-bold">⏳ Next Challenge Starts Soon!</h2>
      <div className="mt-6 flex justify-center space-x-6 text-4xl font-extrabold">
        <div>{days}d</div>
        <div>{hours}h</div>
        <div>{mins}m</div>
        <div>{secs}s</div>
      </div>
    </div>
  );
};
