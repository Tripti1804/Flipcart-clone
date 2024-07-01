// app/page.tsx

import React from 'react';
import BannerSlider from './components/BannerSlider';
import ProductList from './components/ProductList';
import { fetchProducts } from '../lib/fetchProducts';

export const revalidate = 60; // Revalidate every 60 seconds

const HomePage = async () => {
  const products = await fetchProducts();

  return (
    <div>
      <BannerSlider />
      <div className="container mx-auto py-4">
        <h2 className="text-xl font-semibold mb-4">Best of Flipcart</h2>
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default HomePage;
