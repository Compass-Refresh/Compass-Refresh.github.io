import { useEffect } from "react";

export function useInterval(interval = 1000, callback: () => unknown) {
  useEffect(() => {
    const intervalId = setInterval(callback, interval);
    return () => clearInterval(intervalId);
  }, [callback, interval]);
}
