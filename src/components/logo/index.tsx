import Link from "next/link";
import { LogoProps } from "./logo.types";
import { cn } from "@/lib/utils";

export const Logo = ({ className, ...restProps }: LogoProps) => (
  <Link
    href="/"
    className={cn(
      className,
      "flex text-emerald-600 items-center text-2xl font-bold"
    )}
    {...restProps}
  >
    Organizeei!
  </Link>
);
