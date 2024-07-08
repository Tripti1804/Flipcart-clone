// app/components/LandingPage.tsx
"use client";
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const LandingPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const user = searchParams.get('user') || 'User';

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 p-4 flex justify-between items-center">
        <h1 className="text-white text-xl">Flipkart</h1>
        <div className="text-white">{user}</div>
      </header>
      <main className="p-4">
        <h2 className="text-2xl">Welcome to Flipkart, {user}!</h2>
        {/* Add more content here */}
      </main>
    </div>
  );
};

export default LandingPage;
