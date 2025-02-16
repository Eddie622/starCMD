type ServerStatsProps = {
    cpu: number;
    memory: number;
};

export default function ServerStats({ cpu, memory }: ServerStatsProps) {
    return (
        <div>
            <h2>Server Statistics</h2>
            <p>CPU Usage: {cpu}</p>
            <p>Memory Usage: {memory}</p>
        </div>
    );
}