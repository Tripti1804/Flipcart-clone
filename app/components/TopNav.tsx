// import React from 'react';
// import Link from 'next/link';

// const TopNav: React.FC = () => {
//   return (
//     <div className="bg-white py-3 space-x-1">
//       <div className="container space-x-1 flex justify-around items-center">
//         <Link href="/" legacyBehavior>
//           <a className="flex items-center ">
//             <img src="/logo.png" alt="Flipkart" className="w-32" />
//             {/* <span className="text-yellow-400 font-semibold">Explore <span className="text-white">Plus</span></span> */}
//           </a>
//         </Link>
//         <div className="relative w-[60%] " >
//           <input
//             type="text"
//             placeholder="Search for products, brands and more"
//             className="w-full py-2 h-11 pl-5 pr-2 rounded focus:outline-none bg-gray-100 "
//           />
//           <button className="absolute right-0 top-0 bottom-0 bg-gray-300 text-white px-4 rounded-r">
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m-3.6 1.35A7.5 7.5 0 1110.5 3.5a7.5 7.5 0 013.5 12.5z"></path>
//             </svg>
//           </button>
//         </div>
//         <div className="flex items-center space-x-12 text-black">
//           <Link href="/login" legacyBehavior>
//             <a className="hover:underline">Login</a>
//           </Link>
//           <Link href="/cart" legacyBehavior>
//             <a className="hover:underline flex items-center">
//               <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 0L6 5m3 12a1 1 0 102 0 1 1 0 00-2 0zm6 0a1 1 0 102 0 1 1 0 00-2 0z"></path>
//               </svg>
//               Cart
//             </a>
//           </Link>
//           <Link href="/more" legacyBehavior>
//             <a className="hover:underline">More</a>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopNav;






import React from 'react';
import Link from 'next/link';

const TopNav: React.FC = () => {
  return (
    <div className="bg-white py-3">
      <div className="container mx-auto flex items-center space-x-20 overflow-x-auto scrollbar-hide">
        <Link href="/" legacyBehavior>
          <a className="flex items-center flex-shrink-0">
            <img src="/logo.png" alt="Flipkart" className="w-20 md:w-32" />
          </a>
        </Link>
        <div className="relative w-[80%] md:w-[60%]">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full py-2 h-10 pl-3 pr-2 rounded focus:outline-none bg-gray-100"
          />
          <button className="absolute right-0 top-0 bottom-0 bg-gray-300 text-white px-3 rounded-r">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m-3.6 1.35A7.5 7.5 0 1110.5 3.5a7.5 7.5 0 013.5 12.5z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex items-center space-x-6  text-black flex-shrink-0">
          <Link href="/login" legacyBehavior>
            <a className="hover:underline text-sm md:text-base">Login</a>
          </Link>
          <Link href="/cart" legacyBehavior>
            <a className="hover:underline flex items-center text-sm md:text-base">
              <svg
                className="w-4 h-4 md:w-5 md:h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 0L6 5m3 12a1 1 0 102 0 1 1 0 00-2 0zm6 0a1 1 0 102 0 1 1 0 00-2 0z"
                ></path>
              </svg>
              Cart
            </a>
          </Link>
          <Link href="/more" legacyBehavior>
            <a className="hover:underline text-sm md:text-base">More</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNav;


