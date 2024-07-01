// import React from 'react';
// import Link from 'next/link';

// const categories = [
//   { name: 'Grocery', imgSrc: '/grocery.jpeg' },
//   { name: 'Mobiles', imgSrc: '/mobiles.jpeg' },
//   { name: 'Fashion', imgSrc: '/fashion.jpeg' },
//   { name: 'Electronics', imgSrc: '/electronics.jpeg' },
//   { name: 'Home & Furniture', imgSrc: '/home.png' },
//   { name: 'Appliances', imgSrc: '/appliances.jpeg' },
//   { name: 'Travel', imgSrc: '/travel.jpeg' },
//   { name: 'Beauty, Toys & More', imgSrc: '/beauty.jpeg' },
// ];

// const Categories: React.FC = () => {
//   return (
//     <div className="bg-white py-2">
//       <div className="container mx-auto flex justify-between items-center">
//         {categories.map((category, index) => (
//           <Link href="/products" key={index} legacyBehavior>
//             <a className="flex flex-col items-center text-center px-4 hover:underline">
//               <img src={category.imgSrc} alt={category.name} className="w-8 h-8 mb-1" />
//               <span>{category.name}</span>
//             </a>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;





"use client";
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const categories = [
  { name: 'Grocery', image: '/grocery.jpeg', subcategories: ['Subcategory 1', 'Subcategory 2'] },
  { name: 'Mobiles', image: '/mobiles.jpeg', subcategories: ['Subcategory 1', 'Subcategory 2'] },
  { name: 'Fashion', image: '/fashion.jpeg', subcategories: ['Subcategory 1', 'Subcategory 2'] },
  { name: 'Electronics', image: '/electronics.jpeg', subcategories: ['Subcategory 1', 'Subcategory 2'] },
  { name: 'Home & Furniture', image: '/home.png', subcategories: ['Subcategory 1', 'Subcategory 2'] },
  { name: 'Appliances', image: '/appliances.jpeg', subcategories: ['Subcategory 1', 'Subcategory 2'] },
  { name: 'Travel', image: '/travel.jpeg', subcategories: ['Subcategory 1', 'Subcategory 2'] },
  { name: 'Beauty, Toys & More', image: '/beauty.jpeg', subcategories: ['Subcategory 1', 'Subcategory 2'] },
  // { name: 'Two Wheelers', image: '/twowheelers.png', subcategories: ['Subcategory 1', 'Subcategory 2'] },
];

const Categories: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <div className="flex justify-between items-center bg-white py-6 border-b m-3 px-[8%]">
      {categories.map((category, index) => (
        <div key={category.name} className="relative">
          <div
            className="flex flex-col items-center cursor-pointer "
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={category.image} alt={category.name} className="w-12 h-12 mb-1" />
            <div className="flex items-center">
              <span className="text-sm font-medium">{category.name}</span>
              <FaChevronDown className="ml-1 text-xs" />
            </div>
          </div>
          {openDropdown === index && (
            <div
              className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg border rounded-md z-10"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <ul>
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory} className="px-4 py-2 hover:bg-gray-100">
                    {subcategory}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Categories;