import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface PageWrapperProps extends PropsWithChildren {
  className?: string;
}

const PageWrapper = ({ children, className }: PageWrapperProps) => {
  return (
    <section className={cn(["w-full h-full grid grid-cols-4", className])}>
      {children}
    </section>
  );
};

export default PageWrapper;
