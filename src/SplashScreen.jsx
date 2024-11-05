import React, { useEffect, useState } from 'react';

function SplashScreen({ onFinish }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onFinish) onFinish();
    }, 3000); // Simulasi waktu loading selama 3 detik

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div 
      className="flex items-center justify-center" 
      style={{
        backgroundColor: '#000', // Warna abu-abu
        width: '100vw',             // Lebar layar penuh
        height: '100vh',            // Tinggi layar penuh
        overflow: 'hidden'          // Menghindari overflow
      }}
    >
      <div className="text-center px-4 flex flex-col items-center justify-center">
        {/* Logo */}
        <img 
          src="/logo tele.png" 
          alt="Logo" 
          className="max-w-full h-auto mb-6 w-32 sm:w-48 md:w-56" 
        />
        
        {/* Nama Aplikasi */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Compass Crpyto</h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 mt-2">Belajar Cyrpto Dari Telegram</p>

        {/* Loading Spinner */}
        {loading && (
          <div className="flex items-center justify-center mt-4">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-yellow-500"></div>
            <p className="ml-2 text-white-500">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SplashScreen;
