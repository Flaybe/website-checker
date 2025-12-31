import { type PingResult } from "./Ping";
interface PulseMonitorProps {
    urls: string[];
    interval: number;
    customCard?: React.FC<{
        data: PingResult;
    }>;
    className?: string;
    onLastUpdated?: (timestamp: number) => void;
    refreshTrigger?: number;
}
export default function PulseMonitor({ urls, interval, customCard, className, onLastUpdated, refreshTrigger }: PulseMonitorProps): import("react/jsx-runtime").JSX.Element;
export {};
