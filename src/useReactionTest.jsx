import { useState, useRef, useEffect, useCallback } from "react";

const PHASES = {
  WAITING: "waiting",
  READY: "ready",
  GO: "go",
  RESULT: "result",
};

export default function useReactionTest(initialMaxDelay = 3000) {
  const [phase, setPhase] = useState(PHASES.WAITING);
  const [reactionTimes, setReactionTimes] = useState([]);
  const [reactionTime, setReactionTime] = useState(null);
  const [message, setMessage] = useState("Click to start");
  const [maxDelay, setMaxDelay] = useState(initialMaxDelay);

  const timeoutRef = useRef(null);
  const startTimeRef = useRef(null);

  const clearTimer = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  };

  const startTest = useCallback(() => {
    setReactionTime(null);
    setPhase(PHASES.READY);
    setMessage("Get ready...");

    const delay = 1000 + Math.random() * maxDelay;

    timeoutRef.current = setTimeout(() => {
      setPhase(PHASES.GO);
      setMessage("Click NOW!");
      startTimeRef.current = performance.now();
    }, delay);
  }, [maxDelay]);

  const handleClick = useCallback(() => {
    switch (phase) {
      case PHASES.WAITING:
      case PHASES.RESULT:
        startTest();
        break;

      case PHASES.GO: {
        const endTime = performance.now();
        const rt = endTime - startTimeRef.current;
        const rtRounded = Math.round(rt);

        setReactionTime(rtRounded);
        setReactionTimes((prev) => [rtRounded, ...prev.slice(0, 9)]);
        setMessage(`Your reaction time: ${rtRounded} ms. Click to try again.`);
        setPhase(PHASES.RESULT);
        clearTimer();
        break;
      }

      case PHASES.READY:
        clearTimer();
        setMessage("Too soon! Click to try again.");
        setPhase(PHASES.WAITING);
        break;

      default:
        break;
    }
  }, [phase, startTest]);

  useEffect(() => {
    // Auto-adjust difficulty
    if (reactionTimes.length < 5) return;

    const avg =
      reactionTimes.reduce((sum, val) => sum + val, 0) / reactionTimes.length;

    if (avg < 250 && maxDelay > 1000) {
      setMaxDelay((d) => Math.max(1000, d - 200));
    } else if (avg > 350 && maxDelay < 5000) {
      setMaxDelay((d) => Math.min(5000, d + 200));
    }
  }, [reactionTimes, maxDelay]);

  useEffect(() => {
    return () => clearTimer(); // Cleanup on unmount
  }, []);

  return { phase, reactionTimes, reactionTime, message, handleClick };
}
