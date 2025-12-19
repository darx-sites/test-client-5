import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@/lib/builder';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Test Client 5 - Premium E-Commerce Experience',
  description: 'Discover premium products and exceptional shopping experience with Test Client 5. Your trusted e-commerce destination for quality and style.',
  keywords: 'ecommerce, online shopping, premium products, Test Client 5',
  authors: [{ name: 'Test Client 5' }],
  openGraph: {
    title: 'Test Client 5 - Premium E-Commerce',
    description: 'Discover premium products and exceptional shopping experience',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Client 5 - Premium E-Commerce',
    description: 'Discover premium products and exceptional shopping experience',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}