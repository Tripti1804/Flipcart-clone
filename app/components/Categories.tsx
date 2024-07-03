// "use client";
// import React, { useState } from 'react';
// import { FaChevronDown } from 'react-icons/fa';

// const categories = [
//   { name: 'Grocery', image: '/grocery.jpeg', subcategories: ['Subcategory 1', 'Subcategory 2'] },
//   { name: 'Mobiles', image: '/mobiles.jpeg', subcategories: ['Subcategory 1', 'Subcategory 2'] },
//   { name: 'Fashion', image: '/fashion.jpeg', subcategories: ['Subcategory 1', 'Subcategory 2'] },
//   { name: 'Electronics', image: '/electronics.jpeg', subcategories: ['Subcategory 1', 'Subcategory 2'] },
//   { name: 'Home & Furniture', image: '/home.png', subcategories: ['Subcategory 1', 'Subcategory 2'] },
//   { name: 'Appliances', image: '/appliances.jpeg', subcategories: ['Subcategory 1', 'Subcategory 2'] },
//   { name: 'Travel', image: '/travel.jpeg', subcategories: ['Subcategory 1', 'Subcategory 2'] },
//   { name: 'Beauty, Toys & More', image: '/beauty.jpeg', subcategories: ['Subcategory 1', 'Subcategory 2'] },
//   // { name: 'Two Wheelers', image: '/twowheelers.png', subcategories: ['Subcategory 1', 'Subcategory 2'] },
// ];

// const Categories: React.FC = () => {
//   const [openDropdown, setOpenDropdown] = useState<number | null>(null);

//   const handleMouseEnter = (index: number) => {
//     setOpenDropdown(index);
//   };

//   const handleMouseLeave = () => {
//     setOpenDropdown(null);
//   };

//   return (
//     <div className="flex justify-between items-center bg-white py-6 border-b m-3 px-[8%]">
//       {categories.map((category, index) => (
//         <div key={category.name} className="relative">
//           <div
//             className="flex flex-col items-center cursor-pointer "
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={handleMouseLeave}
//           >
//             <img src={category.image} alt={category.name} className="w-12 h-12 mb-1" />
//             <div className="flex items-center">
//               <span className="text-sm font-medium">{category.name}</span>
//               <FaChevronDown className="ml-1 text-xs" />
//             </div>
//           </div>
//           {openDropdown === index && (
//             <div
//               className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg border rounded-md z-10"
//               onMouseEnter={() => handleMouseEnter(index)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <ul>
//                 {category.subcategories.map((subcategory) => (
//                   <li key={subcategory} className="px-4 py-2 hover:bg-gray-100">
//                     {subcategory}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Categories;








"use client";
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { AiOutlineRight } from 'react-icons/ai';

const categories = [
  { name: 'Grocery', icon: '/grocery.jpeg' },
  { name: 'Mobiles', icon: '/mobiles.jpeg' },
  { name: 'Fashion', icon: '/fashion.jpeg' },
  { name: 'Electronics', icon: '/electronics.jpeg' },
  { name: 'Home & Furniture', icon: '/home.png' },
  { name: 'Appliances', icon: '/appliances.jpeg' },
  { name: 'Travel', icon: '/travel.jpeg' },
  { name: 'Beauty, Toys & More', icon: '/beauty.jpeg' },
  { name: 'Two Wheelers', icon: '/images/two_wheelers.png' },
];

const subCategories = [
  'Beauty & Personal Care',
    'Men\'s Grooming',
    'Food & Drinks',
    'Nutrition & Health Care',
    'Baby Care',
    'Toys & School Supplies',
    'Sports & Fitness',
    'Books',
    'Music',
    'Stationery & Office Supplies',
    'Auto Accessories',
    'Safety & Hygiene Essentials',
];


// const subCategories = {
//   'Beauty, Toys & More': [
//     'Beauty & Personal Care',
//     'Men\'s Grooming',
//     'Food & Drinks',
//     'Nutrition & Health Care',
//     'Baby Care',
//     'Toys & School Supplies',
//     'Sports & Fitness',
//     'Books',
//     'Music',
//     'Stationery & Office Supplies',
//     'Auto Accessories',
//     'Safety & Hygiene Essentials',
//   ],
// };

const Categories = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryName: string) => {
    if (openCategory === categoryName) {
      setOpenCategory(null);
    } else {
      setOpenCategory(categoryName);
    }
  };
  return (
    <div className="bg-white py-2 shadow-sm m-2 ">
      <div className="container sm:px-4 lg:px-8 ">
        <div className="relative flex  space-x-8 overflow-x-auto scrollbar-hide px-5">
      {categories.map((category) => (
        <div key={category.name} className="relative">
          <div
            className="flex flex-col items-center cursor-pointer "
            onMouseEnter={() => handleCategoryClick(category.name)}
              onMouseLeave={() => setOpenCategory(null)}>
            <img src={category.icon} alt={category.name} className="w-12 h-12 mb-1" />
            <div className="flex items-center">
              <span className="text-sm font-medium">{category.name}</span>
              <FaChevronDown className="ml-1 text-xs" />
            </div>
          </div>
          {openCategory === category.name && (
            <div
              className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg border rounded-md z-10"
              onMouseEnter={() => handleCategoryClick(category.name)}
              onMouseLeave={() => setOpenCategory(null)}
            >
              <ul>
                {subCategories.map((subcategory) => (
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
    </div>
    </div>
  );
};

export default Categories;














// const subCategories = {
//   'Beauty, Toys & More': [
//     'Beauty & Personal Care',
//     'Men\'s Grooming',
//     'Food & Drinks',
//     'Nutrition & Health Care',
//     'Baby Care',
//     'Toys & School Supplies',
//     'Sports & Fitness',
//     'Books',
//     'Music',
//     'Stationery & Office Supplies',
//     'Auto Accessories',
//     'Safety & Hygiene Essentials',
//   ],
// };






// 'use client';

// import React, { useState } from 'react';
// import { FaChevronDown } from 'react-icons/fa';
// import { AiOutlineRight } from 'react-icons/ai';

// const categories = [
//   { name: 'Grocery', icon: '/images/grocery.png' },
//   { name: 'Mobiles', icon: '/images/mobiles.png' },
//   { name: 'Fashion', icon: '/images/fashion.png' },
//   { name: 'Electronics', icon: '/images/electronics.png' },
//   { name: 'Home & Furniture', icon: '/images/home_furniture.png' },
//   { name: 'Appliances', icon: '/images/appliances.png' },
//   { name: 'Travel', icon: '/images/travel.png' },
//   { name: 'Beauty, Toys & More', icon: '/images/beauty_toys_more.png' },
//   { name: 'Two Wheelers', icon: '/images/two_wheelers.png' },
// ];

// const subCategories = [
//   'Subcategory 1',
//   'Subcategory 2',
//   'Subcategory 3',
//   'Subcategory 4',
// ];

// const Categories = () => {
//   const [openCategory, setOpenCategory] = useState<string | null>(null);

//   const handleCategoryClick = (categoryName: string) => {
//     if (openCategory === categoryName) {
//       setOpenCategory(null);
//     } else {
//       setOpenCategory(categoryName);
//     }
//   };

//   return (
//     <div className="bg-white py-2 shadow-sm">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="relative flex items-center justify-between space-x-4 overflow-x-auto scrollbar-hide">
//           {categories.map((category) => (
//             <div
//               key={category.name}
//               className="relative flex flex-col items-center cursor-pointer group"
//               onMouseEnter={() => handleCategoryClick(category.name)}
//               onMouseLeave={() => setOpenCategory(null)}
//             >
//               <img
//                 src={category.icon}
//                 alt={category.name}
//                 className="h-8 w-8 mb-1"
//               />
//               <span className="text-xs lg:text-sm">{category.name}</span>
//               <FaChevronDown className="text-xs lg:text-sm mt-1" />
//               {openCategory === category.name && (
//                 <div className="absolute top-10 left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg z-50">
//                   <ul className="py-2">
//                     {subCategories.map((subCategory) => (
//                       <li
//                         key={subCategory}
//                         className="flex justify-between items-center px-4 py-2 hover:bg-gray-100"
//                       >
//                         {subCategory}
//                         <AiOutlineRight />
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Categories;




