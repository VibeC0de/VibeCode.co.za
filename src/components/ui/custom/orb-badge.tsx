import type React from "react";
import { cn } from "@/lib/utils";

interface OrbBadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "green" | "gray" | "orange" | "pink" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  rounded?: boolean;
}

export function OrbBadge({
  children,
  variant = "blue",
  size = "md",
  className,
  rounded = false,
}: OrbBadgeProps) {
  // Base classes
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-colors";

  // Size variations
  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-0.5 text-sm",
    lg: "px-3 py-1 text-base",
  };

  // Variant styles
  const variantClasses = {
    blue: "bg-orbBlue-100 text-orbBlue-800",
    green: "bg-orbGreen-100 text-orbGreen-800",
    gray: "bg-orbGray-100 text-orbGray-800",
    orange: "bg-amber-100 text-amber-800",
    pink: "bg-pink-100 text-pink-800",
    outline: "bg-transparent border border-current text-orbBlue-600",
  };

  // Rounded styles
  const roundedClasses = rounded ? "rounded-full" : "rounded";

  // Combine all classes
  const classes = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    roundedClasses,
    className,
  );

  return <span className={classes}>{children}</span>;
}
