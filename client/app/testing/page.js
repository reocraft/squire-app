'use client';

import { useState } from 'react';

export default function Home() {
  const [responseText, setResponseText] = useState('');

  const handlePostRequest = () => {
    const payload = { a: 1, b: 2 };

    fetch('https://squire-app.onrender.com/api/suggest-meal')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setResponseText(JSON.stringify(data));
      })
      .catch((error) => {
        setResponseText('Error: ' + error.message);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans dark:bg-black">
      <main className="flex flex-col space-y-6 items-center">
        <h1 className="text-2xl font-semibold text-white">POST Request Demo</h1>

        <button
          onClick={handlePostRequest}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          Send POST Request
        </button>

        <p className="text-gray-300 mt-4">{responseText}</p>
      </main>
    </div>
  );
}

