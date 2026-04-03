interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  link?: boolean;
  as?: "div" | "article" | "li";
}

export function Card({
  children,
  className,
  hover = true,
  link = false,
  as: Tag = "div",
}: CardProps) {
  const cls = [
    "card",
    hover && "card--hover",
    link && "card--link",
    className,
  ].filter(Boolean).join(" ");

  return (
    <Tag className={cls}>
      {children}
    </Tag>
  );
}
