import { cn } from "@/utils/cn";
import Image from "next/image";

export type HeroProps = {
  className?: string;
};

export function Hero({ className }: HeroProps) {
  return (
    <section
      className={cn(
        "relative h-[500px] w-screen",
        "flex flex-col pt-12 font-sans",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="absolute left-0 top-0 h-full w-full object-cover"
        alt="Compass Refresh truck and trailer outside of client business"
        src="/images/compass-refresh-truck.webp"
      />

      <div className="flex flex-col bg-black bg-opacity-50 p-2 pt-12 text-center text-white">
        <h1 className="self-center rounded-xl bg-cyan-900 px-4 py-2 text-2xl">
          Elevated Commercial Space
        </h1>
        <h2 className="pt-2">Power. Precision. All by professionals.</h2>
      </div>

      <div className="flex-1" />

      <div className="flex flex-col justify-end gap-2 bg-black bg-opacity-50 p-2 text-white">
        <p className="text-center text-xl">
          Find out why your wife is planning on leaving you for Dylan Crowl
        </p>
        <div className="flex gap-2">
          <button className="flex-1 text-nowrap rounded-xl bg-cyan-900 px-4 py-2 text-sm">
            Get a Quote
          </button>
          <button className="flex-1 text-nowrap rounded-xl border border-cyan-900 px-4 py-2 text-sm font-bold text-cyan-900">
            ...Or Find Out?
          </button>
        </div>
      </div>
    </section>
  );
}
