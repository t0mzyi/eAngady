"use client";
import Link from "next/link";
import { Search, Command } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Navbar() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 50], [0, -10]);
  const py = useTransform(scrollY, [0, 50], ["1.5rem", "1rem"]);
  
  return (
    <motion.div 
      style={{ paddingTop: py }}
      className="sticky top-0 z-50 px-4 sm:px-6 lg:px-8 w-full transition-all duration-300"
    >
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="max-w-6xl mx-auto bg-warm-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-5 py-3 flex items-center justify-between gap-4"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 group shrink-0">
          <div className="bg-accent text-warm-white rounded-full w-8 h-8 flex items-center justify-center font-serif text-xl shadow-sm group-hover:scale-105 transition-transform">
            e
          </div>
          <span className="text-xl font-serif text-ink tracking-tight mt-0.5 hidden sm:block">Angady</span>
        </Link>
        
        {/* Search */}
        <div className="flex-1 max-w-lg hidden md:block">
          <div className="relative group">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted group-focus-within:text-accent transition-colors" />
            <input 
              type="text" 
              placeholder="Search homemade cakes, jewelry..." 
              className="w-full bg-cream/50 hover:bg-cream border border-border/60 focus:bg-warm-white rounded-full pl-10 pr-12 py-2 text-sm text-ink placeholder:text-muted/70 outline-none focus:ring-2 focus:ring-accent/20 transition-all shadow-inner"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium text-muted bg-white border border-border shadow-sm">
              <Command size={10} /> K
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <Link href="/sell" className="hidden sm:block text-sm font-medium text-muted hover:text-ink transition-colors px-2 py-2">
            Sell here
          </Link>
          <Link href="/auth/login">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-ink text-warm-white text-sm font-medium px-5 py-2 rounded-full hover:shadow-lg transition-all"
            >
              Sign in
            </motion.button>
          </Link>
        </div>
      </motion.nav>
    </motion.div>
  );
}
