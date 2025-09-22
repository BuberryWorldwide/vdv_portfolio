import React from 'react';

const TokenFlowAnimation = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg border border-gray-200">
      <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
        How Tokens Flow Through the Network
      </h3>
      
      <div className="relative">
        {/* Main Flow Container */}
        <div className="flex justify-between items-center relative">
          
          {/* Customer */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-sky-600 rounded-full flex items-center justify-center mb-2 relative overflow-hidden shadow-md">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              
              {/* Tokens leaving customer */}
              <div className="absolute w-3 h-3 bg-amber-400 rounded-full shadow-sm" style={{
                animation: 'tokenToVenue 3s infinite',
                animationDelay: '0s'
              }}></div>
            </div>
            <span className="text-sm font-semibold text-gray-800">Customer</span>
            <span className="text-xs text-gray-600">Inserts Cash</span>
          </div>

          {/* Venue */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mb-2 relative overflow-hidden shadow-md">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              
              {/* Tokens moving through venue */}
              <div className="absolute w-3 h-3 bg-amber-400 rounded-full shadow-sm" style={{
                animation: 'tokenToVdv 3s infinite',
                animationDelay: '0.8s'
              }}></div>
            </div>
            <span className="text-sm font-semibold text-gray-800">Venue</span>
            <span className="text-xs text-gray-600">Processes</span>
          </div>

          {/* VDV */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center mb-2 relative overflow-hidden shadow-md">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              
              {/* Tokens being processed */}
              <div className="absolute w-3 h-3 bg-amber-400 rounded-full shadow-sm" style={{
                animation: 'tokenProcessing 2s infinite',
                animationDelay: '1.2s'
              }}></div>
            </div>
            <span className="text-sm font-semibold text-gray-800">VDV</span>
            <span className="text-xs text-gray-600">Converts & Distributes</span>
          </div>

          {/* Network */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-2 relative overflow-hidden shadow-md">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              
              {/* Tokens returning to network */}
              <div className="absolute w-3 h-3 bg-amber-400 rounded-full shadow-sm" style={{
                animation: 'tokenToNetwork 3s infinite',
                animationDelay: '2s'
              }}></div>
            </div>
            <span className="text-sm font-semibold text-gray-800">Network</span>
            <span className="text-xs text-gray-600">Token Distribution</span>
          </div>
        </div>

        {/* Connecting Lines */}
        <div className="absolute top-10 left-0 right-0 h-px bg-gray-300 -z-10"></div>
        
        {/* Flow Labels */}
        <div className="absolute top-6 left-1/4 transform -translate-x-1/2">
          <span className="text-xs bg-white px-2 py-1 rounded-md text-gray-700 border border-gray-200 shadow-sm">Cash → USDC</span>
        </div>
        <div className="absolute top-6 left-2/4 transform -translate-x-1/2">
          <span className="text-xs bg-white px-2 py-1 rounded-md text-gray-700 border border-gray-200 shadow-sm">Processing</span>
        </div>
        <div className="absolute top-6 left-3/4 transform -translate-x-1/2">
          <span className="text-xs bg-white px-2 py-1 rounded-md text-gray-700 border border-gray-200 shadow-sm">Tokens</span>
        </div>
      </div>

      {/* Activity Indicator */}
      <div className="mt-8 flex justify-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-sm"></div>
          <span className="text-sm text-gray-600">Live Network Activity</span>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-lg font-bold text-gray-800">$1,247</div>
          <div className="text-xs text-gray-600">Today&apos;s Volume</div>
        </div>
        <div>
          <div className="text-lg font-bold text-gray-800">156</div>
          <div className="text-xs text-gray-600">Active Sessions</div>
        </div>
        <div>
          <div className="text-lg font-bold text-gray-800">23</div>
          <div className="text-xs text-gray-600">Venues Online</div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes tokenToVenue {
          0% { transform: translate(-40px, 0); opacity: 0; }
          25% { transform: translate(-20px, -10px); opacity: 1; }
          50% { transform: translate(0, 0); opacity: 1; }
          75% { transform: translate(20px, -5px); opacity: 0.8; }
          100% { transform: translate(40px, 0); opacity: 0; }
        }
        
        @keyframes tokenToVdv {
          0% { transform: translate(-40px, 0); opacity: 0; }
          25% { transform: translate(-20px, 5px); opacity: 1; }
          50% { transform: translate(0, 0); opacity: 1; }
          75% { transform: translate(20px, -5px); opacity: 0.8; }
          100% { transform: translate(40px, 0); opacity: 0; }
        }
        
        @keyframes tokenProcessing {
          0% { transform: translate(-20px, -20px) scale(0.5); opacity: 0; }
          25% { transform: translate(0, -10px) scale(1); opacity: 1; }
          50% { transform: translate(20px, 0) scale(1.2); opacity: 1; }
          75% { transform: translate(0, 10px) scale(1); opacity: 0.8; }
          100% { transform: translate(-20px, 20px) scale(0.5); opacity: 0; }
        }
        
        @keyframes tokenToNetwork {
          0% { transform: translate(-40px, 0); opacity: 0; }
          25% { transform: translate(-20px, -5px); opacity: 1; }
          50% { transform: translate(0, 0); opacity: 1; }
          75% { transform: translate(20px, 5px); opacity: 0.8; }
          100% { transform: translate(40px, 0); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default TokenFlowAnimation;