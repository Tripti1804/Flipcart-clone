// app/components/OtpVerification.tsx
"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const OtpVerification: React.FC = () => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate OTP verification
    setTimeout(() => {
      setLoading(false);
      router.push(`/landing`);
    }, 2000); // Simulate a delay for the loading effect
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg w-full lg:w-3/4 overflow-hidden">
        <div className="lg:w-1/2 bg-blue-500 flex flex-col justify-center items-center p-8">
          <h1 className="text-white text-2xl mb-4">Login</h1>
          <p className="text-white text-base mb-8">Get access to your Orders, Wishlist, and Recommendations</p>
          <img src="/login_image.png" alt="OTP Verification" className="w-3/4 lg:w-1/2" />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center items-center p-8 overflow-hidden">
          <form onSubmit={handleVerify} className="w-full max-w-xs">
            <p className="text-gray-700 mb-4">Please enter the OTP sent to 6204008791. <span className="text-blue-500 cursor-pointer">Change</span></p>
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              value={otp}
              onChange={handleOtpChange}
              className="w-full py-2 px-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white text-base font-semibold rounded-md hover:bg-blue-600"
            >
              {loading ? 'Loading...' : 'Verify'}
            </button>
            <p className="mt-4 text-xs">
              Not received your code? <span className="text-blue-500">00:12</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
