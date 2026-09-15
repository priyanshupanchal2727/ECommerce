"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/lib/store";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import Image from "next/image";

import { useState } from "react";

export default function CartDrawer() {
  const { isOpen, toggleCart, items, removeItem, updateQuantity, getCartTotal } = useCartStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || 'Checkout failed');
        setIsCheckingOut(false);
      }
    } catch (err) {
      console.error(err);
      alert('Checkout error');
      setIsCheckingOut(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md border-l border-white/10 bg-black shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-[#fb21ff]" />
                <h2 className="text-lg font-bold text-white">Your Cart</h2>
              </div>
              <button
                onClick={toggleCart}
                className="rounded-full p-2 text-neutral-400 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center text-neutral-500">
                  <ShoppingBag className="mb-4 h-12 w-12 opacity-20" />
                  <p>Your cart is empty.</p>
                  <button onClick={toggleCart} className="mt-4 text-[#fb21ff] hover:underline">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative h-20 w-20 overflow-hidden rounded-lg bg-white/5 border border-white/10">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-white text-sm line-clamp-1">{item.name}</h3>
                            <p className="text-xs text-neutral-400 capitalize">{item.category}</p>
                          </div>
                          <p className="font-bold text-white">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="text-neutral-400 hover:text-white disabled:opacity-50"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="text-xs font-semibold text-white w-4 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="text-neutral-400 hover:text-white"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-neutral-500 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer / Checkout */}
            {items.length > 0 && (
              <div className="border-t border-white/10 p-6 bg-black">
                <div className="flex justify-between mb-4">
                  <span className="text-neutral-400">Subtotal</span>
                  <span className="font-bold text-white text-xl">${getCartTotal().toFixed(2)}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full rounded-full bg-white py-4 font-bold text-black hover:bg-neutral-200 transition-colors shadow-[0_0_30px_-5px_rgba(251,33,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
                >
                  {isCheckingOut ? (
                    <span className="animate-pulse">Redirecting to Stripe...</span>
                  ) : (
                    "Proceed to Checkout"
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
