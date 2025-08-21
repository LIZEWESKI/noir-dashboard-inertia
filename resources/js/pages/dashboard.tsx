import { SectionCards } from '@/components/section-card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { Bookings, Metrics, Reservations, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { DataTable } from '@/components/data-table';
import { ChartAreaInteractive } from '@/components/chart-area-interactive';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];
interface DashboardProps {
    metrics: Metrics[];
    reservations: Reservations[];
    bookings: Bookings[];
    breadcrumbs?: BreadcrumbItem[];
}

export default function Dashboard({metrics,reservations,bookings}:DashboardProps) {
    console.log(bookings);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {metrics.length === 0 ? [1,2,3].map(card => 
                        (<div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern key={card} className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        </div>)) 
                        : <SectionCards metrics={metrics}/>
                    }
                </div>
                <DataTable data={reservations}/>
                <div className="px-4 lg:px-6">
                    <ChartAreaInteractive chartData={bookings} />
                </div>
            </div>
        </AppLayout>
    );
}
