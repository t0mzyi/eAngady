"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { MapPin, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "✦ All", "🍰 Baked Goods", "💍 Jewellery & Bangles",
  "👗 Clothing", "🫙 Pickles & Spices", "🌿 Plants",
  "🧵 Crafts", "✨ Skincare & Beauty"
];

const sampleProducts = [
  { id: 1, title: "Birthday Cake (Custom)", seller: "Anitha's Bakes", price: 450, distance: "0.4km", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80", aspect: "aspect-[3/4]" },
  { id: 2, title: "Glass Bangle Set (6 pcs)", seller: "Fathima Collections", price: 80, distance: "1.2km", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80", aspect: "aspect-[4/5]" },
  { id: 3, title: "Homemade Mango Pickle 500g", seller: "Lekha's Kitchen", price: 120, distance: "0.6km", image: "https://images.unsplash.com/photo-1626082895617-2c6b41249e0b?w=500&q=80", aspect: "aspect-square" },
  { id: 4, title: "Handwoven Kasavu Saree", seller: "Devika Handlooms", price: 2400, distance: "2.1km", image: "https://images.unsplash.com/photo-1610189014605-72d96a788dc6?w=500&q=80", aspect: "aspect-[2/3]" },
  { id: 5, title: "Aloe Vera Face Pack", seller: "Green Glow by Sreeja", price: 150, distance: "0.9km", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80", aspect: "aspect-[4/5]" },
  { id: 6, title: "Terracotta Lamp", seller: "Midhun Crafts", price: 350, distance: "1.5km", image: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=500&q=80", aspect: "aspect-square" },
];

export default function Home() {
  return (
    <div className="min-h-screen pb-24">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12">
        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-accent-light text-accent px-3 py-1 rounded-full text-xs font-medium mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Kerala&apos;s local marketplace
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-ink mb-4 leading-tight"
          >
            Discover homemade <em className="text-accent not-italic">treasures</em> near you
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted text-base md:text-lg"
          >
            From student bakers to handloom sellers — find them all nearby
          </motion.p>
        </div>

        {/* Categories (Horizontal Scroll) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex overflow-x-auto pb-4 mb-6 hide-scrollbar gap-3 snap-x"
        >
          {categories.map((cat, i) => (
            <button 
              key={cat}
              className={`snap-start shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-ink text-warm-white' : 'bg-warm-white border border-border text-ink hover:bg-cream'}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Filters */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border overflow-x-auto gap-4 hide-scrollbar">
          <div className="flex items-center gap-2 shrink-0">
            {['Near me', 'Under ₹500', 'New arrivals', 'Student sellers', 'Homemade'].map(filter => (
              <motion.button 
                whileTap={{ scale: 0.96 }}
                key={filter}
                className="text-xs font-medium text-muted hover:text-ink px-3 py-1.5 rounded-md hover:bg-black/5 transition-colors shrink-0"
              >
                {filter}
              </motion.button>
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-accent font-medium text-sm shrink-0 bg-accent-light px-3 py-1.5 rounded-full">
            <MapPin size={14} />
            Thrissur
          </div>
        </div>

        {/* Masonry Product Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {sampleProducts.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ y: -4 }}
              className="break-inside-avoid bg-warm-white rounded-2xl overflow-hidden border border-border group cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 mb-4"
            >
              <div className={`relative overflow-hidden ${product.aspect}`}>
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-warm-white/90 backdrop-blur text-xs font-semibold px-2 py-1 rounded-md text-ink shadow-sm">
                  {product.distance}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-ink line-clamp-1 mb-1">{product.title}</h3>
                <p className="text-muted text-xs mb-2">{product.seller}</p>
                <div className="font-semibold text-ink">₹{product.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* FAB */}
      <Link href="/sell/new">
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 bg-accent text-warm-white flex items-center justify-center p-4 rounded-full shadow-[0_8px_30px_rgb(46,107,79,0.3)] hover:shadow-[0_8px_30px_rgb(46,107,79,0.5)] transition-shadow z-50 group"
        >
          <Plus size={24} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium group-hover:ml-2 whitespace-nowrap">
            List product
          </span>
        </motion.button>
      </Link>
      
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
