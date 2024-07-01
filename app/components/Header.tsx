// import React from 'react';
// import Link from 'next/link';

// const Header: React.FC = () => {
//   return (
//     <header className=" p-6 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center space-x-4">
//           <Link href="/" legacyBehavior>
//             <a className="text-xl font-bold text-white">Flipkart Plus</a>
//           </Link>
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search for Products, Brands and More"
//               className="pl-3 pr-10 py-2 rounded-lg focus:outline-none"
//             />
//             <button className="absolute right-0 top-0 bottom-0 bg-blue-500 text-white px-4 rounded-r-lg">
//               Search
//             </button>
//           </div>
//         </div>
//         <nav className="flex space-x-4">
//           <Link href="/cart" legacyBehavior>
//             <a className="text-white">Cart</a>
//           </Link>
//           <Link href="/login" legacyBehavior>
//             <a className="text-white">Login</a>
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;



import React from 'react';
import { FaSearch, FaShoppingCart, FaChevronDown, FaUser } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-2 flex items-center">
      <div className="flex items-center">
        <img src="/path-to-your-logo.png" alt="Flipkart Logo" className="h-8 mr-2" />
        <div className="text-sm flex items-center">
          <span className="font-semibold">Explore</span>
          <span className="text-yellow-400 font-semibold ml-1">Plus</span>
          <img src="/path-to-your-plus-icon.png" alt="Plus Icon" className="h-3 ml-1" />
        </div>
      </div>
      <div className="flex-grow mx-2">
        <div className="bg-white flex items-center p-1 rounded">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="flex-grow p-2 outline-none"
          />
          <button className="p-2">
            <FaSearch className="text-gray-500" />
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center cursor-pointer">
          <FaUser className="mr-1" />
          <span>Login</span>
        </div>
        <div className="flex items-center cursor-pointer">
          <FaShoppingCart className="mr-1" />
          <span>Cart</span>
        </div>
        <div className="flex items-center cursor-pointer">
          <span>More</span>
          <FaChevronDown className="ml-1" />
        </div>
      </div>
    </header>
  );
};

export default Header;
