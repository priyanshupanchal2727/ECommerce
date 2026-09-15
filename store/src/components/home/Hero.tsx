"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-4 pt-20">
      {/* Background gradients similar to Cult UI */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fb21ff]/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10 flex max-w-4xl flex-col items-center gap-6 text-center"
      >
        <motion.div variants={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-neutral-300 backdrop-blur-sm shadow-xl">
          ✨ The Future of Energy Storage
        </motion.div>
        
        <motion.h1 variants={item} className="text-5xl font-bold tracking-tighter sm:text-7xl lg:text-8xl text-white">
          Power your life with <br />
          <span className="bg-gradient-to-t from-[#d619d6] via-[#fb21ff] to-[#ff8bff] bg-clip-text text-transparent drop-shadow-lg">
            Cult Energy.
          </span>
        </motion.h1>
        
        <motion.p variants={item} className="max-w-2xl text-lg text-neutral-400 sm:text-xl">
          Premium inverters and next-generation batteries designed for ultimate reliability. Keep the lights on, always.
        </motion.p>
        
        <motion.div variants={item} className="mt-4 flex flex-col sm:flex-row gap-4">
          <Link
            href="/products"
            className="group flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 font-semibold text-black transition-all hover:bg-neutral-200 shadow-[0_0_40px_-10px_rgba(251,33,255,0.5)]"
          >
            Explore Products
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/about"
            className="flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
          >
            Learn More
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
