"use client";

import { weirdCurve, useCoordinates, type Pair } from "@/hooks/useCoordinates";
import { useInterval } from "@/hooks/useInterval";
import { useRandomColor } from "@/hooks/useRandomColor";
import { v4 as uuid } from "uuid";
import { type ReactNode, useCallback, useRef, useState } from "react";

let t = 0;

export default function Page() {
  const [bawbs, setBawbs] = useState<{ key: string; component: ReactNode }[]>(
    [],
  );
  const [started, setStarted] = useState(false);
  const color = useRandomColor(100);
  const textColor = useRandomColor(100);
  const ref = useRef<HTMLAudioElement>(null);
  const coordinates = useCoordinates(weirdCurve(50), 50);
  const tilt = 15 * Math.cos(0.1 * t++);

  return (
    <main
      className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden"
      style={{
        background: started ? color : "black",
        transformStyle: "preserve-3d",
        perspective: 600,
      }}
    >
      <audio ref={ref} src="/conga.mp3" autoPlay loop />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        style={{
          transform: started
            ? `translateX(${coordinates.x}px) translateY(${coordinates.y}px) rotateZ(${tilt}deg)`
            : "",
        }}
        className="z-90 rounded-full transition-all"
        src="/images/bawb.png"
        alt="yes"
      />

      {bawbs.map((b) => b.component)}

      <h1
        style={{ color: started ? textColor : "white" }}
        className="font-sans text-5xl font-bold"
      >
        BAWB
      </h1>
      <button
        style={{ background: started ? textColor : "white" }}
        className="rounded-xl px-4 py-2 font-sans text-xl font-bold"
        type="button"
        onClick={() => {
          setStarted(true);
          ref.current?.play().catch(console.error);
        }}
      >
        CLICK IT BABY
      </button>
    </main>
  );
}
