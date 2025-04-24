import CryptoTable from "@/components/crypto-table";
import { store } from "@/store";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the time every 2 seconds to match the price update interval
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Cryptocurrency Prices
              </h1>
              <p className="text-gray-500 mt-1">
                Real-time price updates across top assets
              </p>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
              <span className="text-sm text-gray-500">Last updated: </span>
              <span className="text-sm font-medium">
                {currentTime.toLocaleTimeString()}
              </span>
            </div>
          </div>
          <CryptoTable />
        </div>
      </div>
    </Provider>
  );
};

export default Index;
