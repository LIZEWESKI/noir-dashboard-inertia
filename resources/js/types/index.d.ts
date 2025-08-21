import { LucideIcon } from 'lucide-react';
import { Interface } from 'readline';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    flash: {message: string};
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    profile_picture_url?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Reservations {
    id: number;
    user_id: number;
    room_id: number;
    check_in: string;
    total_price: string;
    status: string;
    room : {
        id: number;
        room_number: string;
    }
    user: {
        id: number;
        name: string;
    }
}
export interface Metrics {
    name: string;
    description: string;
    value: number;
    type: string;
};
export interface Bookings {
    date: string;
    completed: number;
    cancelled: number;
}