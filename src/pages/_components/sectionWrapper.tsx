import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface SectionWrapperProps extends PropsWithChildren {
  className?: string;
}

const SectionWrapper = ({ children, className }: SectionWrapperProps) => {
  return (
    <section className={cn(["w-full h-full", className])}>{children}</section>
  );
};

export default SectionWrapper;
