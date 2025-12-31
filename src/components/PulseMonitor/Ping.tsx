export interface PingResult {
  url: string;
  status: "UP" | "DOWN" | "LOADING";
  latency: number;
  timestamp: number;
  imgUrl: string;
}

export const checkSiteStatus = (url: string): Promise<PingResult> => {
  return new Promise((resolve) => {
    const startTime = Date.now();

    const cleanUrl = url.replace(/\/+$/, ""); // Remove trailing slashes
    const faviconUrl = `${cleanUrl}/favicon.ico?cache-buster=${Date.now()}`;

    const img = new Image();

    const timeout = setTimeout(() => {
      img.onload = null;
      img.onerror = null;
      resolve({
        url,
        status: "DOWN",
        latency: 0,
        timestamp: Date.now(),
        imgUrl: "./assets/react.svg",
      });
    }, 5000); // 5 seconds timeout

    img.onload = () => {
      clearTimeout(timeout);
      const latency = Date.now() - startTime;
      resolve({
        url,
        status: "UP",
        latency,
        timestamp: Date.now(),
        imgUrl: faviconUrl,
      });
    };

    img.onerror = () => {
      clearTimeout(timeout);
      resolve({
        url,
        status: "DOWN",
        latency: Date.now() - startTime,
        timestamp: Date.now(),
        imgUrl: "./assets/react.svg",
      });
    };
    img.src = faviconUrl;
  });
};
