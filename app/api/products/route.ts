// app/api/products/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  return NextResponse.json(data);
}
