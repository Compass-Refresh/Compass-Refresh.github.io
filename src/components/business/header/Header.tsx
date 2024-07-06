import { MenuIcon } from "@/components/ui/icons/MenuIcon";
import { cn } from "@/utils/cn";

export type HeaderProps = {
  className?: string;
};

export function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        "fixed top-0 z-10 h-12 w-screen drop-shadow-md",
        "bg-cyan-900 ",
        className,
      )}
    >
      <div className="relative h-full w-full">
        <div className="flex h-full w-full items-center justify-end px-4">
          <button>
            <MenuIcon className="size-8 text-white" />
          </button>
        </div>
        <div className="absolute top-0 flex h-full w-full items-center justify-center">
          <h1 className="font-sans text-4xl">
            <span className="text-white">C</span>
            <span className="text-[#1d7e9d]">R</span>
          </h1>
        </div>
      </div>
    </header>
  );
}
