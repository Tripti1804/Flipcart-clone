// lib/fetchProducts.ts

export async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  const products = await res.json();

  // Extracting relevant product details
  return products.map((product: any) => ({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
  }));
}
