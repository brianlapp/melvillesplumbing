import { type HTMLAttributes } from "react";

export interface ServiceItem {
  name: string;
  path: string;
  icon?: React.ComponentType;
  description: string;
}

export interface ServiceCategory {
  category: string;
  items: ServiceItem[];
}

export type NavigationProps = HTMLAttributes<HTMLDivElement>;