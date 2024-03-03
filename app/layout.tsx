import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import CartProvider from "./components/Providers";
import ShoppingCartModals from './components/ShoppingCartModals'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Closhor",
  description: "Best cloth in the world",
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className && 'overflow-x-hidden'}>
        <CartProvider>
          <Navbar />
          <ShoppingCartModals/>
            {children} 
          
        </CartProvider>
      </body>
    </html>
  );
}
