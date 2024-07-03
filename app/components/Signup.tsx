// "use client";
// import React, { useState } from 'react';
// import Link from 'next/link';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     username: '',
//     email: '',
//     password: '',
//     phone: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSignup = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Store signup data in localStorage
//     localStorage.setItem('userData', JSON.stringify(formData));
//     // Add signup logic here
//     console.log('Signup with:', formData);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="flex bg-white shadow-lg rounded-lg w-3/4 h-3/4">
//         <div className="w-1/2 bg-blue-500 flex flex-col justify-center items-center p-8">
//           <h1 className="text-white text-2xl mb-4">Looks like you're new here!</h1>
//           <p className="text-white text-base mb-8">Sign up with your mobile number to get started</p>
//           <img src="/signup_image.png" alt="Signup" className="w-1/2" /> {/* Add your image path */}
//         </div>
//         <div className="w-1/2 flex flex-col justify-center items-center p-8">
//           <form onSubmit={handleSignup} className="w-full max-w-xs">
//             <input
//               type="text"
//               name="firstName"
//               placeholder="Enter Firstname"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="w-full py-2 px-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Enter Lastname"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="w-full py-2 px-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="text"
//               name="username"
//               placeholder="Enter Username"
//               value={formData.username}
//               onChange={handleChange}
//               className="w-full py-2 px-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full py-2 px-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full py-2 px-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="text"
//               name="phone"
//               placeholder="Enter Phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full py-2 px-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="submit"
//               className="w-full py-2 bg-orange-500 text-white text-base font-semibold rounded-md hover:bg-orange-600"
//             >
//               Continue
//             </button>
//           </form>
//           <p className="mt-4 text-xs">
//             By continuing, you agree to Flipkart's <Link href="/terms"><span className="text-blue-500">Terms of Use</span></Link> and <Link href="/privacy"><span className="text-blue-500">Privacy Policy</span></Link>.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;







"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(formData));
    console.log('Signup with:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg w-full lg:w-3/4">
        <div className="lg:w-1/2 bg-blue-500 flex flex-col justify-center items-center p-8">
          <h1 className="text-white text-2xl mb-4">Looks like you're new here!</h1>
          <p className="text-white text-base mb-8">Sign up with your mobile number to get started</p>
          <img src="/signup_image.png" alt="Signup" className="w-3/4 lg:w-1/2" />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center items-center p-8">
          <form onSubmit={handleSignup} className="w-full max-w-xs">
            <input
              type="text"
              name="firstName"
              placeholder="Enter Firstname"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full py-2 px-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter Lastname"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full py-2 px-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full py-2 px-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-2 px-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full py-2 px-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="phone"
              placeholder="Enter Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full py-2 px-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full py-2 bg-orange-500 text-white text-base font-semibold rounded-md hover:bg-orange-600"
            >
              Continue
            </button>
          </form>
          <p className="mt-4 text-xs">
            By continuing, you agree to Flipkart's <Link href="/terms"><span className="text-blue-500">Terms of Use</span></Link> and <Link href="/privacy"><span className="text-blue-500">Privacy Policy</span></Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

