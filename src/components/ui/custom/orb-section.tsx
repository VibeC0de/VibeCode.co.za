import type React from "react";
import { cn } from "@/lib/utils";

interface OrbSectionProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  background?: "white" | "light" | "blue" | "gradient" | "none";
  container?: boolean;
  id?: string;
}

export function OrbSection({
  children,
  className,
  size = "md",
  background = "white",
  container = true,
  id,
}: OrbSectionProps) {
  // Size variations
  const sizeClasses = {
    sm: "py-8 md:py-12",
    md: "py-16 md:py-24",
    lg: "py-24 md:py-32",
  };

  // Background variations
  const backgroundClasses = {
    white: "bg-white",
    light: "bg-orbGray-100",
    blue: "bg-orbBlue-600 text-white",
    gradient: "orb-gradient-blue text-white",
    none: "",
  };

  // Section classes
  const sectionClasses = cn(
    "relative overflow-hidden",
    sizeClasses[size],
    backgroundClasses[background],
    className,
  );

  return (
    <section className={sectionClasses} id={id}>
      {container ? <div className="orb-container">{children}</div> : children}
    </section>
  );
}

interface OrbSectionHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  label?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  labelClassName?: string;
}

export function OrbSectionHeader({
  title,
  subtitle,
  label,
  align = "center",
  className,
  titleClassName,
  subtitleClassName,
  labelClassName,
}: OrbSectionHeaderProps) {
  // Alignment classes
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={cn("mb-12 max-w-3xl", alignClasses[align], className)}>
      {label && (
        <p
          className={cn(
            "text-sm font-mono uppercase text-orbGray-500 mb-2",
            labelClassName,
          )}
        >
          {label}
        </p>
      )}

      <h2
        className={cn("text-3xl md:text-4xl font-medium mb-4", titleClassName)}
      >
        {title}
      </h2>

      {subtitle && (
        <p className={cn("text-lg text-orbGray-600", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
