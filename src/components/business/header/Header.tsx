"use client";

import { CRLogo } from "@/components/ui/icons/CRLogo";
import { MenuIcon } from "@/components/ui/icons/MenuIcon";
import { cn } from "@/utils/cn";
import { useReducer } from "react";

export type HeaderProps = {
  className?: string;
};

export function Header({ className }: HeaderProps) {
  const [open, toggle] = useReducer((v) => !v, false);
  return (
    <header
      className={cn(
        "fixed top-0 z-10 h-12 w-screen drop-shadow-md",
        "overflow-visible bg-cyan-900",
        className,
      )}
    >
      <div className="z-90 relative h-full w-full">
        <div className="absolute top-0 flex h-full w-full items-center justify-center">
          <div className="rounded-full bg-cyan-950 px-2 py-1 pr-1">
            <CRLogo className="w-16 text-cyan-600" />
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-end px-4">
          <button
            className="rounded-xl bg-cyan-950 p-1 shadow hover:bg-cyan-800"
            type="button"
            onClick={() => toggle()}
          >
            {!open && <MenuIcon className="size-8 text-white" />}
            {open && (
              <div className="flex size-8 items-center justify-center text-white">
                X
              </div>
            )}
          </button>
        </div>
      </div>
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
    </header>
  );
}
