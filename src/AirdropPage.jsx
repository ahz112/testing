import React from 'react';

function AirdropPage({ onBack }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl text-white">Halaman Airdrop</h1>
      {/* Konten Airdrop bisa ditambahkan di sini */}
      
      {/* Tombol Kembali */}
      <button 
        onClick={onBack} 
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Kembali
      </button>
    </div>
  );
}

export default AirdropPage;
