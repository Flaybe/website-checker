import React from 'react';
import type { PingResult } from './Ping';

interface StatusCardProps {
  data: PingResult;
}

const DefaultStatusCard: React.FC<StatusCardProps> = ({ data }) => {
  const { url, status, latency } = data;
  
  let statusColor = 'bg-gray-500';
  let statusText = 'Unknown';
  
  if (status === 'UP') {
    if (latency < 500) {
      statusColor = 'bg-green-500';
      statusText = 'ONLINE';
    } else {
      statusColor = 'bg-orange-500';
      statusText = 'DEGRADED';
    }
  } else if (status === 'DOWN') {
    statusColor = 'bg-red-500';
    statusText = 'OFFLINE';
  } else {
    // LOADING
    statusColor = 'bg-blue-400';
    statusText = 'CHECKING';
  }

  const hostname = new URL(url).hostname;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 flex items-center justify-between shadow-xl relative overflow-hidden group">
      {/* Decorative "Rack" details */}
      <div className="absolute top-0 left-0 w-1 h-full bg-slate-800"></div>
      <div className="absolute top-0 right-0 w-1 h-full bg-slate-800"></div>
      
      <div className="flex items-center gap-4 pl-3">
        {/* Status LED */}
        <div className="relative flex items-center justify-center w-4 h-4">
             {/* Glow Layer */}
             <div className={`absolute w-full h-full rounded-full ${statusColor} ${status !== 'DOWN' ? 'animate-pulse' : ''} opacity-50 blur-[2px]`}></div>
             {/* Solid Core */}
             <div className={`relative w-2.5 h-2.5 rounded-full ${statusColor} shadow-sm`}></div>
        </div>
        
        <div className="flex flex-col">
           <span className="text-gray-200 font-mono text-sm tracking-wide font-medium">
             {hostname}
           </span>
           <span className="text-xs text-slate-500 font-mono uppercase tracking-wider">
             {statusText}
           </span>
        </div>
      </div>

      <div className="flex flex-col items-end pr-2">
        <span className={`font-mono text-sm ${latency > 0 ? 'text-slate-400' : 'text-slate-600'}`}>
          {latency > 0 ? `${latency}ms` : '--'}
        </span>
      </div>
    </div>
  );
};

export default DefaultStatusCard;
