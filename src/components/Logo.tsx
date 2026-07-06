import { ImgHTMLAttributes } from "react";

export default function Logo({ className, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="/images/logo.svg"
      alt="Solid Solutions"
      width={120}
      height={48}
      decoding="async"
      fetchPriority="high"
      className={className}
      {...props}
    />
  );
}