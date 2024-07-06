"use client";

import "@/components/ui/carousel/carousel.css";
import React, { type ReactNode } from "react";
import { type EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { CarouselNextButton } from "./CarouselNextButton";
import { CarouselPrevButton } from "./CarouselPrevButton";
import { usePrevNextButtons } from "./usePrevNextButtons";
import { useDotButton } from "./useDotButton";
import { DotButton } from "./CarouselDotButton";
import { cn } from "@/utils/cn";

type CarouselProps = {
  slides: { key: string; component: ReactNode }[];
  options?: EmblaOptionsType;
  className?: string;
};

export function Carousel({ slides, options, className }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className={cn("embla", className)}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <div key={slide.key} className="embla__slide">
              {slide.component}
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full items-center justify-between px-4 pt-2">
        <div>
          <CarouselPrevButton
            className="size-12 text-white"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <CarouselNextButton
            className="size-12 text-white"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>

        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn(
                "size-2 rounded-full bg-white",
                index === selectedIndex && "animate-pulse bg-cyan-950",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
