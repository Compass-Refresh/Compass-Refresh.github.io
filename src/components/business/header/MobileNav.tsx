"use client";

import { cn } from "@/utils/cn";

type MobileNavProps = {
  open: boolean;
};

export function MobileNav({ open }: MobileNavProps) {
  return (
    <div
      className={cn(
        "w-full -translate-x-full bg-white transition-all",
        open && "h-auto translate-x-0",
      )}
    >
      <nav className="flex list-none flex-col divide-y divide-cyan-900 border-b border-cyan-700 bg-cyan-950">
        <li className="px-4 py-3 text-white">Home</li>
        <li className="px-4 py-3 text-white">About</li>
        <li className="px-4 py-3 text-white">Contact Us</li>
        <li className="px-4 py-3 text-white">More</li>
      </nav>
    </div>
  );
}
