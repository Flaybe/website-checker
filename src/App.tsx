import { useEffect, useState } from "react";
import { checkSiteStatus, type PingResult } from "./utils/Ping";
import StatusCard from "./components/StatusCard";

const URLS = ["https://donluisvinoteca.com/", "https://google.com/", "https://youtube.com/"];

function App() {
  const [monitorData, setMonitorData] = useState<PingResult[]>([]);
  const [lastUpdated, setLastUpdated] = useState<number>(Date.now());

  const fetchStatuses = async () => {
    // Set to LOADING state first if needed, or just update
    const results = await Promise.all(
      URLS.map((url) => checkSiteStatus(url))
    );
    setMonitorData(results);
    setLastUpdated(Date.now());
  };

  useEffect(() => {
    fetchStatuses();
    const interval = setInterval(fetchStatuses, 30000); // Check every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 tracking-tight">API Checker</h1>
            <p className="text-gray-500 mt-1">Real-time status monitoring</p>
          </div>
          <button 
            onClick={() => fetchStatuses()}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-sm transition-colors text-sm font-medium"
          >
            Refresh Now
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {monitorData.length > 0 ? (
            monitorData.map((data) => (
              <StatusCard key={data.url} data={data} />
            ))
          ) : (
             // Loading skeleton or initial state
             Array.from({ length: URLS.length }).map((_, i) => (
               <div key={i} className="animate-pulse bg-white border border-gray-200 h-24 rounded-md shadow-sm p-4">
                 <div className="flex gap-4 items-center">
                    <div className="rounded-full bg-slate-200 h-8 w-8"></div>
                    <div className="flex-1 space-y-2 py-1">
                      <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                    </div>
                 </div>
               </div>
             ))
          )}
        </div>
        
        <footer className="mt-12 text-center text-xs text-gray-400">
           Last updated: {new Date(lastUpdated).toLocaleTimeString()}
        </footer>
      </div>
    </div>
  );
}

export default App;
