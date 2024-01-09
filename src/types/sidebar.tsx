import { ReactNode } from "react";

export type SidebarMenuItem = {
    label: string;
    icon: ReactNode;
    route: string;
    onClick?: () => void;
}