"use client";

import { Cancel } from "@/components/ui/icons/Cancel";
import { CRLogo } from "@/components/ui/icons/CRLogo";
import { MenuIcon } from "@/components/ui/icons/MenuIcon";
import { cn } from "@/utils/cn";
import { useReducer } from "react";
import { MobileNav } from "./nav/MobileNav";
import { DesktopNav } from "./nav/DesktopNav";

export type HeaderProps = {
  className?: string;
};

export function Header({ className }: HeaderProps) {
  const [open, toggle] = useReducer((v) => !v, false);
  return (
    <header
      className={cn(
        "sticky top-0 z-10 h-12 drop-shadow-md",
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
          {/* For Mobile */}
          <button
            className="rounded-xl bg-cyan-950 p-1 shadow hover:bg-cyan-800 md:hidden"
            type="button"
            onClick={() => toggle()}
          >
            {!open && <MenuIcon className="size-8 text-white" />}
            {open && (
              <div className="flex size-8 items-center justify-center text-white">
                <Cancel />
              </div>
            )}
          </button>
          {/* End For Mobile */}
          <DesktopNav />
        </div>
      </div>
      <MobileNav open={open} />
    </header>
  );
}
