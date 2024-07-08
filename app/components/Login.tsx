// "use client";
// import React, { useState } from 'react';
// import Link from 'next/link';

// const Login = () => {
//   const [email, setEmail] = useState('');

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     localStorage.setItem('userEmail', email);
//     console.log('Login with:', email);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
//       <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg w-full lg:w-3/4 overflow-hidden">
//         <div className="lg:w-1/2 bg-blue-500 flex flex-col justify-center items-center p-8">
//           <h1 className="text-white text-2xl mb-4">Login</h1>
//           <p className="text-white text-base mb-8">Get access to your Orders, Wishlist and Recommendations</p>
//           <img src="/login_image.png" alt="Login" className="w-3/4 lg:w-1/2" />
//         </div>
//         <div className="lg:w-1/2 flex flex-col justify-center items-center p-8 overflow-hidden">
//           <form onSubmit={handleLogin} className="w-full max-w-xs">
//             <input
//               type="email"
//               placeholder="Enter Email/Mobile number"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full py-2 px-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="submit"
//               className="w-full py-2 bg-orange-500 text-white text-base font-semibold rounded-md hover:bg-orange-600"
//             >
//               Request OTP
//             </button>
//           </form>
//           <p className="mt-4 text-xs">
//             By continuing, you agree to Flipkart&apos;s <Link href="/terms"><span className="text-blue-500">Terms of Use</span></Link> and <Link href="/privacy"><span className="text-blue-500">Privacy Policy</span></Link>.
//           </p>
//           <p className="mt-4">
//             <Link href="/signup" className="text-blue-500">New to Flipkart? Create an account</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;





"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      localStorage.setItem('userEmail', email);
      console.log('Login with:', email);
      router.push('/otp');
    } catch (error) {
      console.error('Failed to login:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg w-full lg:w-3/4 overflow-hidden">
        <div className="lg:w-1/2 bg-blue-500 flex flex-col justify-center items-center p-8">
          <h1 className="text-white text-2xl mb-4">Login</h1>
          <p className="text-white text-base mb-8">Get access to your Orders, Wishlist and Recommendations</p>
          <img src="/login_image.png" alt="Login" className="w-3/4 lg:w-1/2" />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center items-center p-8 overflow-hidden">
          <form onSubmit={handleLogin} className="w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter Email/Mobile number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full py-2 bg-orange-500 text-white text-base font-semibold rounded-md hover:bg-orange-600"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Request OTP'}
            </button>
          </form>
          <p className="mt-4 text-xs">
            By continuing, you agree to Flipkart&apos;s <Link href="/terms"><span className="text-blue-500">Terms of Use</span></Link> and <Link href="/privacy"><span className="text-blue-500">Privacy Policy</span></Link>.
          </p>
          <p className="mt-4">
            <Link href="/signup" className="text-blue-500">New to Flipkart? Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
