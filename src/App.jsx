import React, { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';
import logo from './assets/images/logo tele.png';
import AirdropPage from './AirdropPage';
import BelajarPage from './BelajarPage';

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleBoxClick = (page) => {
    setCurrentPage(page);
  };

  const handleBack = () => {
    setCurrentPage('home'); // Kembali ke halaman utama
  };

  return (
    <div 
      className="flex justify-center" 
      style={{
        backgroundColor: '#000000',
        width: '100vw',
        height: '100vh',
        overflowY: 'auto',
        position: 'relative',
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      {isSplashVisible ? (
        <SplashScreen />
      ) : currentPage === 'home' ? (
        <div className="w-full max-w-5xl p-4" style={{ position: 'relative' }}>
          {/* Header dengan logo dan teks di tengah */}
          <header className="absolute top-0 left-0 right-0 flex items-center justify-center" style={{ marginTop: '32px' }}>
            <img src={logo} alt="Logo" className="h-16 mr-2" />
            <h1 className="text-2xl font-semibold text-white">Compass Crypto</h1>
          </header>

          <div style={{ marginTop: '120px' }}>
            <div style={{ marginTop: '24px' }}>
              <img 
                src="https://blogs.airdropalert.com/wp-content/uploads/2019/01/crypto-airdrops.jpg" 
                alt="Gambar Utama" 
                className="w-full h-[192px] object-cover rounded-[12px]" 
              />
              <h2 className="text-lg font-bold text-white" style={{ marginTop: '24px', marginBottom: '12px' }}>
                Layanan
              </h2>
              
              <div 
                className="bg-[#564434] text-white p-4 rounded-[12px] flex items-center w-full mb-3" 
                style={{ height: '128px' }} 
                onClick={() => handleBoxClick('airdrop')}
              >
                <img src="https://cryptoharian.com/wp-content/uploads/2018/09/airdrops.png" alt="Kotak 1" className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h2 className="text-lg font-semibold">Airdrop Crypto</h2>
                  <p className="text-sm font-light">Kumpulan Airdrop Crypto, lengkap dengan penjelasan proyeknya.</p>
                </div>
              </div>

              <div 
                className="bg-[#FCFF61] text-black p-4 rounded-lg flex items-center w-full" 
                style={{ height: '128px', borderRadius: '12px' }} 
                onClick={() => handleBoxClick('belajar')}
              >
                <img src="https://cryptoharian.com/wp-content/uploads/2018/09/airdrops.png" alt="Kotak 2" className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h2 className="text-lg font-bold">Belajar Crypto</h2>
                  <p className="text-sm">Belajar Crypto Dari Nol Untuk Pemula</p>
                </div>
              </div>

              <div style={{ height: '300px' }} className="bg-black-800 text-white rounded-md p-4 mt-4"></div>
            </div>
          </div>
        </div>
      ) : currentPage === 'airdrop' ? (
        <AirdropPage onBack={handleBack} />
      ) : (
        <BelajarPage onBack={handleBack} />
      )}
    </div>
  );
}

export default App;
