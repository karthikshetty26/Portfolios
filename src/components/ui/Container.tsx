interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={className ? `container ${className}` : "container"}>
      {children}
    </div>
  );
}
