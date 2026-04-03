import type { CSSProperties } from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "overlay" | "hero" | "page-header" | "tight" | "content";
  as?: "section" | "div" | "article";
}

const variantClasses: Record<string, string> = {
  default: "section",
  overlay: "section section--overlay",
  hero: "section section--hero",
  "page-header": "section section--page-header",
  tight: "section section--tight",
  content: "section section--content",
};

export function Section({
  children,
  className,
  id,
  variant = "default",
  as: Tag = "section",
}: SectionProps) {
  const base = variantClasses[variant] || "section";
  const cls = className ? `${base} ${className}` : base;

  return (
    <Tag id={id} className={cls}>
      {children}
    </Tag>
  );
}
