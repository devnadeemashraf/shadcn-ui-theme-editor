import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buttonVariants } from "@/components/ui/button";

import { useAppSelector } from "@/hooks/useTypedRTK";
import { selectTheme } from "@/store/selectors/themeSelector";

import { cn } from "@/lib/utils";

import { IAction } from "./_types";
import { useToast } from "@/components/ui/use-toast";

const ActionItem = React.memo(
  ({ primary, icon: Icon, tooltip, onClick }: IAction) => {
    const { toast } = useToast();
    const theme = useAppSelector(selectTheme);

    const handleOnClick = async () => {
      if (onClick) {
        const copySuccess = await onClick(theme);
        if (copySuccess) {
          toast({
            title: "📋✅",
            description: "Copied theme to clipboard!",
          });
        } else {
          toast({
            title: "📋❌",
            description: "Something went wrong while copying!",
          });
        }
      }
    };

    return (
      <Tooltip delayDuration={200}>
        <TooltipTrigger
          onClick={handleOnClick}
          className={cn(
            buttonVariants({
              variant: primary ? "default" : "outline",
              size: "icon",
            })
          )}
        >
          <Icon size={16} />
        </TooltipTrigger>
        <TooltipContent>{tooltip}</TooltipContent>
      </Tooltip>
    );
  }
);

export default ActionItem;
