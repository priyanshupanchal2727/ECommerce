"use client";

import { useEffect } from "react";
import { useCartStore } from "@/lib/store";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function SuccessPage() {
  const { clearCart } = useCartStore();

  useEffect(() => {
    // Clear the cart when the user successfully completes a purchase
    clearCart();
  }, [clearCart]);

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <CheckCircle className="h-24 w-24 text-[#fb21ff] mb-8" />
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold text-white mb-4"
      >
        Payment Successful!
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-neutral-400 max-w-md mx-auto mb-8"
      >
        Thank you for choosing Cult Energy. Your order has been placed and is being processed. You will receive an email confirmation shortly.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Link 
          href="/products"
          className="rounded-full bg-white px-8 py-4 font-bold text-black hover:bg-neutral-200 transition-colors shadow-[0_0_30px_-5px_rgba(251,33,255,0.3)] inline-block"
        >
          Continue Shopping
        </Link>
      </motion.div>
    </main>
  );
}
