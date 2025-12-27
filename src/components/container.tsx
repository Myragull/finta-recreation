import React from "react";
import { cn } from "@/lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("w-full max-w-4xl mx-auto px-4 py-8 md:py-8 bg-blue-400  border-amber-300 border-4", className)}>
      {children}
    </div>
  );
};
