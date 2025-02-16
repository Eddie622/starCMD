interface DashboardProps {
    stats: {
    cpu: string;
    memory: string;
    uptime: string;
    };
}

export default function Dashboard({ stats }: DashboardProps) {
    return (
    <div>
        <h1>Server Stats</h1>
        <ul>
        <li>CPU Usage: {stats.cpu}</li>
        <li>Memory Usage: {stats.memory}</li>
        <li>Uptime: {stats.uptime}</li>
        </ul>
    </div>
    );
}