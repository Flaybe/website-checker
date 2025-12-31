import { useState } from "react";
import PulseMonitor from "./components/PulseMonitor/PulseMonitor";

const URLS = ["https://google.com/", "https://youtube.com/", "https://github.com/", "https://discord.com/"];

function App() {
  const [lastUpdated, setLastUpdated] = useState<number | null>(null);
  const [pingTrigger, setPingTrigger] = useState(0);

  return (
    <div className="w-screen h-screen bg-gray-900 overflow-auto">
      <div className="container mx-auto p-8">
        <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
          <div className="flex flex-col">
             <h1 className="text-3xl font-bold text-white tracking-tight">System Status</h1>
             {lastUpdated && (
                <span className="text-sm text-gray-400 mt-1 font-mono">
                  Last updated: {new Date(lastUpdated).toLocaleTimeString()}
                </span>
             )}
          </div>
          
          <button 
             onClick={() => setPingTrigger(Date.now())}
             className="px-6 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-mono text-sm tracking-wider rounded-md transition-all shadow-lg hover:shadow-slate-500/20 flex items-center gap-3 group"
          >
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 group-hover:bg-green-400 transition-colors"></span>
            </span>
            PING NOW
          </button>
        </div>

      <PulseMonitor 
        urls={URLS} 
        interval={30000} 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        onLastUpdated={setLastUpdated}
        refreshTrigger={pingTrigger}
      />
      <div className="flex flex-col items-center mt-6">
        <h2 className="text-sm text-gray-500 font-mono">Currently using the default status card, but you can create your own by passing the customCard prop.</h2>
        <p className="text-xs text-gray-400 mt-1 font-mono"> The status is determined by fetching the favicon.ico from the site which can lead to false positives.</p>
      </div>
    </div>
  </div>
  );
}

export default App;
