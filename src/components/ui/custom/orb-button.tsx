import type React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface OrbButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "green" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export function OrbButton({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  icon,
  iconPosition = "right",
  ...props
}: OrbButtonProps) {
  // Base classes for all buttons
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 whitespace-nowrap focus-ring";

  // Size variations
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // Variant styles
  const variantClasses = {
    primary: "bg-orbBlue-600 text-white hover:bg-orbBlue-700 shadow-sm hover:shadow",
    secondary: "bg-white text-orbBlue-600 border border-orbBlue-600 hover:bg-gray-50 hover:text-orbBlue-700 hover:border-orbBlue-700",
    green: "bg-orbGreen-300 text-black hover:bg-orbGreen-400 shadow-sm hover:shadow",
    outline: "bg-transparent text-orbBlue-600 border border-gray-300 hover:border-orbBlue-600 hover:text-orbBlue-700",
    text: "bg-transparent text-orbBlue-600 hover:text-orbBlue-700 hover:bg-orbBlue-50 px-3",
  };

  // Combine all classes
  const classes = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  // Content with optional icon
  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  );

  // Render as link or button
  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
