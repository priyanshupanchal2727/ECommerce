"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, Menu, Search } from "lucide-react";
import { useState, useEffect } from "react";

import { useCartStore } from "@/lib/store";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { toggleCart, getCartCount } = useCartStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-bold text-2xl tracking-tighter text-white">
            CULT<span className="text-[#fb21ff]">.</span>STORE
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-neutral-400">
            <Link href="/products" className="hover:text-white transition-colors">Inverters</Link>
            <Link href="/products" className="hover:text-white transition-colors">Batteries</Link>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
          </nav>
        </div>

        <div className="flex items-center gap-5 text-neutral-400">
          <button className="hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button onClick={toggleCart} className="relative hover:text-white transition-colors">
            <ShoppingCart className="w-5 h-5" />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#fb21ff] text-[10px] font-bold text-white">
                {getCartCount()}
              </span>
            )}
          </button>
          <button className="md:hidden hover:text-white transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
