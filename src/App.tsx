import { useState } from "react";
import PulseMonitor from "./components/PulseMonitor/PulseMonitor";

const URLS = ["https://google.com/", "https://youtube.com/"];

function App() {
  const [lastUpdated, setLastUpdated] = useState<number | null>(null);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-6">
        {lastUpdated && (
           <span className="text-sm text-gray-500">
             Last updated: {new Date(lastUpdated).toLocaleTimeString()}
           </span>
        )}
      </div>
      <PulseMonitor 
        urls={URLS} 
        interval={30000} 
        className="grid gap-4 w-100 mx-auto"
        onLastUpdated={setLastUpdated}
      />
      <div className="flex justify-center mt-6">
        <h2 className="text-sm text-gray-500">Currently using the default status card, but you can create your own by passing the customCard prop.</h2>
      </div>
    </div>
  );
}

export default App;
