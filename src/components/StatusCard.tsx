import React from 'react';
import type { PingResult } from '../utils/Ping';

interface StatusCardProps {
  data: PingResult;
}

const StatusCard: React.FC<StatusCardProps> = ({ data }) => {
  const { url, status, latency, imgUrl } = data;
  
  let borderColor = 'border-gray-200';
  let bgColor = 'bg-white';
  let statusColor = 'text-gray-500';

  if (status === 'UP') {
    if (latency < 500) {
      borderColor = 'border-green-500';
      statusColor = 'text-green-600';
    } else {
      borderColor = 'border-orange-400';
      statusColor = 'text-orange-500';
    }
  } else if (status === 'DOWN') {
    borderColor = 'border-red-500';
    statusColor = 'text-red-600';
    bgColor = 'bg-red-50';
  } else {
    // LOADING
    borderColor = 'border-blue-300';
    statusColor = 'text-blue-500';
    bgColor = 'bg-blue-50';
  }

  return (
    <div className={`border-l-4 ${borderColor} ${bgColor} shadow-md rounded-md p-4 flex items-center justify-between transition-all hover:shadow-lg`}>
      <div className="flex items-center gap-4">
        <img src={imgUrl} alt="Favicon" className="w-8 h-8 rounded-full border border-gray-100" />
        <div className="flex flex-col">
           <a href={url} target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-800 hover:text-blue-600 truncate max-w-[200px]">
             {new URL(url).hostname}
           </a>
           <span className="text-xs text-gray-400">{url}</span>
        </div>
      </div>
      <div className="text-right">
        <div className={`font-bold ${statusColor}`}>{status}</div>
        <div className="text-sm text-gray-500">{latency > 0 ? `${latency}ms` : '-'}</div>
      </div>
    </div>
  );
};

export default StatusCard;
