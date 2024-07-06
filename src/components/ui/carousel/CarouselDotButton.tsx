"use client";

import "@/components/ui/carousel/carousel.css";
import React, { type ComponentPropsWithRef } from "react";

type DotButtonProps = ComponentPropsWithRef<"button">;

export function DotButton({ children, ...props }: DotButtonProps) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}
