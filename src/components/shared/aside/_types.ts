/* eslint-disable @typescript-eslint/no-explicit-any */
import { LucideIcon } from "lucide-react";

export interface IAction {
  primary: boolean;
  label: string;
  icon: LucideIcon;
  tooltip: string;

  onClick?: (...args: any) => any | Promise<any>;
}

export type TActions = IAction[];
