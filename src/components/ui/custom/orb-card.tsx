import type React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface OrbCardProps {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "bordered" | "elevated" | "flat";
  padding?: "none" | "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  hoverEffect?: "none" | "lift" | "scale" | "border";
}

export function OrbCard({
  className,
  children,
  variant = "default",
  padding = "md",
  href,
  onClick,
  hoverEffect = "none",
}: OrbCardProps) {
  // Base classes
  const baseClasses = "rounded-xl overflow-hidden transition-all duration-200";

  // Variant classes
  const variantClasses = {
    default: "bg-white shadow-sm",
    bordered: "bg-white border border-orbGray-200",
    elevated: "bg-white shadow-md",
    flat: "bg-orbGray-50",
  };

  // Padding classes
  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  // Hover effect classes
  const hoverClasses = {
    none: "",
    lift: "hover:-translate-y-1 hover:shadow-md",
    scale: "hover:scale-[1.02] hover:shadow-md",
    border: "hover:border-orbBlue-600",
  };

  // Combine all classes
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
    hoverClasses[hoverEffect],
    className,
  );

  // Render as link, button, or div
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={cn(classes, "text-left w-full")}>
        {children}
      </button>
    );
  }

  return <div className={classes}>{children}</div>;
}

// Card header component
interface OrbCardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export function OrbCardHeader({ className, children }: OrbCardHeaderProps) {
  return <div className={cn("mb-4", className)}>{children}</div>;
}

// Card title component
interface OrbCardTitleProps {
  className?: string;
  children: React.ReactNode;
}

export function OrbCardTitle({ className, children }: OrbCardTitleProps) {
  return <h3 className={cn("text-xl font-semibold", className)}>{children}</h3>;
}

// Card description component
interface OrbCardDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

export function OrbCardDescription({
  className,
  children,
}: OrbCardDescriptionProps) {
  return <p className={cn("text-orbGray-600", className)}>{children}</p>;
}

// Card content component
interface OrbCardContentProps {
  className?: string;
  children: React.ReactNode;
}

export function OrbCardContent({ className, children }: OrbCardContentProps) {
  return <div className={cn("", className)}>{children}</div>;
}

// Card footer component
interface OrbCardFooterProps {
  className?: string;
  children: React.ReactNode;
}

export function OrbCardFooter({ className, children }: OrbCardFooterProps) {
  return (
    <div className={cn("mt-4 pt-4 border-t border-orbGray-200", className)}>
      {children}
    </div>
  );
}

// Card image component
interface OrbCardImageProps {
  className?: string;
  src: string;
  alt: string;
  aspectRatio?: "auto" | "square" | "video" | "wide";
}

export function OrbCardImage({
  className,
  src,
  alt,
  aspectRatio = "auto",
}: OrbCardImageProps) {
  // Aspect ratio classes
  const aspectRatioClasses = {
    auto: "",
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
  };

  return (
    <div
      className={cn(
        "overflow-hidden",
        aspectRatioClasses[aspectRatio],
        className,
      )}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}
