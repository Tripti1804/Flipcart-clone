import '../styles/globals.css'
import { Inter } from 'next/font/google';
import Header from './components/Header';
import TopNav from './components/TopNav';
import Categories from './components/Categories';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Flipkart Clone',
  description: 'Created with Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        <TopNav />
        <Categories />
        <main>{children}</main>
      </body>
    </html>
  );
}
