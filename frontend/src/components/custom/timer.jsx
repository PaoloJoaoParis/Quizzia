import { useEffect, useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(10 * 60); // 10 minutes

  useEffect(() => {
    if (seconds <= 0) return;
    const interval = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <p>
      {String(minutes).padStart(2, "0")}:{String(secs).padStart(2, "0")}
    </p>
  );
}