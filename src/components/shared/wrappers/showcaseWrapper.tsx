import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

interface ShowcaseWrapperProps extends PropsWithChildren {
  className?: string;
}

const ShowcaseWrapper = ({ className, children }: ShowcaseWrapperProps) => {
  return (
    <main className={cn(["col-span-3 overflow-auto", className])}>
      {children}
    </main>
  );
};

export default ShowcaseWrapper;
