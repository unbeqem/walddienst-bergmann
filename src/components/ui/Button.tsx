"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

const MotionLink = motion.create(Link);

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-forest-600 text-linen-50 hover:bg-forest-700 shadow-sm hover:shadow-md",
  secondary:
    "bg-linen-50 text-forest-700 hover:bg-linen-100 border border-forest-600/20",
  ghost: "bg-transparent text-linen-50 border border-linen-50/40 hover:bg-linen-50/10",
};

type ButtonProps = {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  withArrow?: boolean;
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  withArrow = true,
}: ButtonProps) {
  const isAnchorOrExternal = href.startsWith("#") || href.startsWith("http") || href.includes("#");

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <motion.span
          className="inline-flex"
          variants={{ rest: { x: 0 }, hover: { x: 4 } }}
        >
          <ArrowRight size={18} />
        </motion.span>
      )}
    </>
  );

  const sharedClassName = cn(
    "inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium tracking-wide transition-colors",
    variantClasses[variant],
    className,
  );

  if (isAnchorOrExternal) {
    return (
      <motion.a
        href={href}
        className={sharedClassName}
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.97 }}
        animate="rest"
      >
        {content}
      </motion.a>
    );
  }

  return (
    <MotionLink
      href={href}
      className={sharedClassName}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      animate="rest"
    >
      {content}
    </MotionLink>
  );
}
