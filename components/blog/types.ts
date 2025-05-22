import { ReactNode } from 'react';

export interface BlogItemInfo {
  id: string;
  title: string;
  description: string;
  date: string;
  icon?: ReactNode; // Optional custom icon
  isMilestone?: boolean; // Flag to highlight key milestones
  iconBgColor?: string; // Tailwind background color class for the icon (e.g., 'bg-blue-500')
  iconColor?: string; // Tailwind text color class for the icon (e.g., 'text-white')
}
