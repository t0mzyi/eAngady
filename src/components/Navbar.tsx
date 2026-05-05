"use client";
import Link from "next/link";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-warm-white/80 backdrop-blur-md border-b border-border px-4 py-3 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-3xl font-serif text-accent leading-none">e</span>
          <span className="text-2xl font-serif text-ink leading-none mt-1">Angady</span>
        </Link>
        
        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
            <input 
              type="text" 
              placeholder="Search cakes, bangles, sarees..." 
              className="w-full bg-cream border border-border rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/sell" className="hidden sm:block text-sm font-medium text-ink hover:text-accent transition-colors px-3 py-2">
            Sell here
          </Link>
          <Link href="/auth/login" className="bg-ink text-warm-white text-sm font-medium px-4 py-2 rounded-full hover:bg-ink/90 transition-colors">
            Sign in
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
