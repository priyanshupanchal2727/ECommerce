"use client";

import { motion } from "framer-motion";
import { Product } from "@/lib/mock-data";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useCartStore } from "@/lib/store";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:border-[#fb21ff]/50 hover:bg-white/10"
    >
      <div className="relative aspect-square overflow-hidden rounded-xl bg-black/50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          {product.features.slice(0, 2).map((feature) => (
            <span key={feature} className="rounded-full bg-white/10 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-md">
              {feature}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="font-bold text-lg text-white">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-neutral-400">
          {product.description}
        </p>
        
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
            ${product.price.toFixed(2)}
          </span>
          <button 
            onClick={() => addItem(product)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fb21ff] text-white transition-transform hover:scale-110 shadow-[0_0_15px_-3px_rgba(251,33,255,0.5)]"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
