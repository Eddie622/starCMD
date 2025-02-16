import AppLayout from '@/Layouts/AppLayout';
import ServerStats from '@/Components/ServerStats';

type Stats = {
    cpu: number;
    memory: number;
    uptime: string;
};

type DashboardProps = {
    stats: Stats;
};

export default function Dashboard({ stats }: DashboardProps) {
    return (
        <AppLayout>
            <h1>Dashboard</h1>
            <ServerStats cpu={stats.cpu} memory={stats.memory} />
        </AppLayout>
    );
}