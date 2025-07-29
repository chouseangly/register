'use client';
import React from 'react';

const DownloadPage = () => {
  const handleDownload = async () => {
    const response = await fetch('/api/export');

    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'registrations.xlsx';
      document.body.appendChild(a);
      a.click();
      a.remove();
    } else {
      alert('❌ Failed to download file.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-gray-100">
      <h1 className="text-2xl font-bold">Download Registration Data</h1>
      <button
        onClick={handleDownload}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        Download Excel
      </button>
    </div>
  );
};

export default DownloadPage;
