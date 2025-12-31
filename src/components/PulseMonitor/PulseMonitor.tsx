import { useEffect, useState } from "react";
import { checkSiteStatus, type PingResult } from "./Ping";
import DefaultStatusCard from "./DefaultStatusCard";

interface PulseMonitorProps {
    urls: string[];
    interval: number;
    customCard?: React.FC<{ data: PingResult }>;
    className?: string;
    onLastUpdated?: (timestamp: number) => void;
}

export default function PulseMonitor({ urls, interval, customCard, className, onLastUpdated }: PulseMonitorProps) {
    const [monitorData, setMonitorData] = useState<PingResult[]>([]);

    // Ensure interval is at least 1s
    const safeInterval = interval < 1000 ? 1000 : interval;

    useEffect(() => {
        const fetchStatuses = async () => {
            const results = await Promise.all(
                urls.map((url) => checkSiteStatus(url))
            );
            setMonitorData(results);
            if (onLastUpdated) {
                onLastUpdated(Date.now());
            }
        };

        fetchStatuses();
        const timer = setInterval(fetchStatuses, safeInterval);
        return () => clearInterval(timer);
    }, [urls, safeInterval, onLastUpdated]);
    const StatusComponent = customCard || DefaultStatusCard;

    return (
        <div className={className}>
            {monitorData.map((item) => (
                <StatusComponent key={item.url} data={item} />
            ))}
        </div>
    );
}