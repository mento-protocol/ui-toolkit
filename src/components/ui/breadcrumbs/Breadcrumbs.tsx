"use client";

import * as React from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { cn } from "@/utils/common/cn";

interface CrumbProps {
  path: string;
  index: number;
  last: boolean;
  routingMap: Map<string, string>;
}

const Crumb = ({ path, index, last, routingMap }: CrumbProps) => {
  const crumbName = routingMap.get(path);
  const params = useParams();
  const isIdCrumb = params.id && path === params.id;

  return (
    <li className="flex items-center gap-2">
      {index > 0 && crumbName && (
        <span className="text-muted-foreground">&gt;</span>
      )}
      {last ? (
        <span className="text-foreground">
          {isIdCrumb ? params.id : crumbName}
        </span>
      ) : (
        <Link
          href={path || "/"}
          className="text-primary hover:text-primary/80 transition-colors"
        >
          {index === 0 ? "Home" : crumbName}
        </Link>
      )}
    </li>
  );
};

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  routingMap?: Map<string, string>;
}

const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ className, routingMap = new Map(), ...props }, ref) => {
    const path = usePathname();
    const homePage = path === "/";
    const paths = path.split("/").filter(Boolean);
    const crumbsPath = React.useMemo(
      () => paths.filter((path) => routingMap.has(path) || useParams().id === path),
      [paths, routingMap]
    );

    if (homePage) return null;

    return (
      <nav
        ref={ref}
        className={cn(
          "mt-10 w-full font-inter text-[18px]/[20px] font-medium",
          className
        )}
        aria-label="Breadcrumb"
        {...props}
      >
        <ol className="flex items-center gap-2">
          {crumbsPath.map((path, index) => (
            <Crumb
              key={path}
              path={path}
              index={index}
              last={index === crumbsPath.length - 1}
              routingMap={routingMap}
            />
          ))}
        </ol>
      </nav>
    );
  }
);

export { Breadcrumbs }; 