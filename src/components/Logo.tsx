import { SVGAttributes } from "react";

type LogoProps = SVGAttributes<SVGSVGElement> & {
  size?: number;
};

export default function Logo({ className, size = 48, width, height, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={width ?? size}
      height={height ?? size}
      role="img"
      aria-label="Solid Solutions"
      className={className}
      {...props}
    >
      <rect width="48" height="48" rx="10" fill="#1A1A1A" />
      <text
        x="24"
        y="31"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
        fontSize="17"
        fontWeight="900"
        letterSpacing="-0.5"
      >
        SS
      </text>
    </svg>
  );
}