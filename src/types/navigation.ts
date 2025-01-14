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

export interface NavigationProps {
  className?: string;
}