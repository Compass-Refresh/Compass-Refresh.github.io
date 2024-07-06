"use client";

import "@/components/ui/carousel/carousel.css";
import React from "react";

type CarouselThumbButtonProps = {
  selected: boolean;
  index: number;
  onClick: () => void;
};

export function CarouselThumbButton({
  selected,
  index,
  onClick,
}: CarouselThumbButtonProps) {
  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : "",
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        {index + 1}
      </button>
    </div>
  );
}
