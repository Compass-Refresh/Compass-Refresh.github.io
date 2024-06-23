"use client"

import { useEffect, useReducer, useState } from "react";

const COLORS = [
  { value: 'blue', name: 'Blue'},
  { value: 'red', name: 'Red'},
  { value: 'purple', name: 'Purple'},
  { value: 'orange', name: 'Orange'},
  { value: 'fuchsia', name: 'Fuchsia'},
  { value: 'rose', name: 'Rose'},
  { value: 'slate', name: 'Slate'},
  { value: 'gray', name: 'Gray'},
  { value: 'zinc', name: 'Zinc'},
  { value: 'amber', name: 'Amber'},
  { value: 'lime', name: 'Lime'},
  { value: 'green', name: 'Green'},
  { value: 'emerald', name: 'Emerald'},
  { value: 'teal', name: 'Teal'},
  { value: 'violet', name: 'Violet'},
]

// this only works because we're using the play CDN
// script tag for now. This will break if you use tailwind
// in a normal NextJS build process.
const getBg = (i: number, color: string): string => 
  i % 8 === 0 ? `bg-${color}-100` : 
  i % 8 === 1 ? `bg-${color}-200` : 
  i % 8 === 2 ? `bg-${color}-300` : 
  i % 8 === 3 ? `bg-${color}-400` : 
  i % 8 === 4 ? `bg-${color}-500` : 
  i % 8 === 5 ? `bg-${color}-600` : 
  i % 8 === 6 ? `bg-${color}-700` : 
  `bg-${color}-800`;

export default function HomePage() {
  const [color, setColor] = useState<string>("orange")
  const [rot, incr] = useReducer((n: number) => n + 0.1, 0)
  useEffect(() => { 
    const interval = setInterval(() => incr(), 300)
    return () => clearInterval(interval)
  }, [])
  return (
    <main className="w-screen flex flex-col gap-24 justify-between items-center h-4/6 py-12">
      <h1 className="text-3xl bg-slate-200 px-8 py-4 rounded-full font-medium">Compass Refresh</h1>
      <h2 className="-mt-20 text-xl">Coming Soon!</h2>
      <div className="-mt-20 bg-slate-200 text-xl px-y px-2">
          <select className="bg-slate-200" onChange={(e) => setColor(e.target.value)}>
            { COLORS.map(c => <option key={c.name} value={c.value}>{c.name}</option>)}
          </select>
        </div>
      <div className="z-10" style={{perspective: '400px'}}>
        <div id="dna" style={{animation: 'r-y 3s linear infinite'}}>
          {new Array(120).fill(0).map((_, i) => (
            <div 
              key={i} 
              style={{transform: `rotateY(${i * rot}deg)`}}
              className={`transition-all animate-pulse border-1 h-1 w-24 ${getBg(i, color)}`}
            />
          ))}
        </div>
      </div>

    </main> 
  );
}
