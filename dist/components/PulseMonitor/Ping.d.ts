export interface PingResult {
    url: string;
    status: "UP" | "DOWN" | "LOADING";
    latency: number;
    timestamp: number;
    imgUrl: string;
}
export declare const checkSiteStatus: (url: string) => Promise<PingResult>;
