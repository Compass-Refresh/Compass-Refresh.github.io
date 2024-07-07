import { type SVGProps } from "react";

export function CRLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 250 100">
      <path
        fill="currentColor"
        stroke="currentColor"
        d="M 180,60 L 220,90 L 190,90 L 150,60 z"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        d="M 100,90 L 50,90 A 25,25 0,0,1 50,10 L 180,10 A 15,15 0,0,1 180,70 L 130,70 L 130,90 L 110,90 L 110,50 L 180,50 A 5,5 0,0,0 180,30 L 50,30 A 5,5 0,0,0 50,70 L 100,70 z"
      />
    </svg>
  );
}
