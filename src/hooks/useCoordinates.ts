import { useReducer } from "react";
import { useInterval } from "./useInterval";

export type Pair = { x: number; y: number };

export const weirdCurve =
  (radius = 1) =>
  (t: number): Pair => {
    const x = radius * Math.cos(t * 2); // Example curve function, replace with your own
    const y = radius * 4 * Math.sin(t * 0.5); // Example y-coordinate
    return { x, y };
  };

export const useCoordinates = (
  curveFunction: (t: number) => Pair,
  interval = 1000,
) => {
  const [tick, increment] = useReducer((v: number) => v + 1, 0);
  const coordinates = curveFunction(tick);
  useInterval(interval, () => increment());
  return coordinates;
};
