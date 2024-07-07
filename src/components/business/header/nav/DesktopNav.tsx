"use client";

export function DesktopNav() {
  return (
    <div className="hidden md:block">
      <nav className="font-primary flex list-none text-xl">
        <li className="px-4 py-3 tracking-wider text-white">Home</li>
        <li className="px-4 py-3 tracking-wider text-white">About</li>
        <li className="px-4 py-3 tracking-wider text-white">Contact Us</li>
        <li className="px-4 py-3 tracking-wider text-white">More</li>
      </nav>
    </div>
  );
}
