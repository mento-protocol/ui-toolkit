import { cn } from "@/lib/hooks/stylesHooks";

export const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("animate-pulse rounded-sm bg-gray-300", className)}
      {...props}
    />
  );
};
