"use client";

import { motion } from "framer-motion";

interface ChalkEraserProps {
  className?: string;
}

export default function ChalkEraser({ className = "" }: ChalkEraserProps) {
  return (
    <motion.div 
      className={`absolute pointer-events-none z-10 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="chalk-eraser relative">
        {/* Eraser body */}
        <div className="relative w-20 h-10 rounded-sm overflow-hidden shadow-lg">
          {/* Felt/fuzzy bottom */}
          <div 
            className="absolute bottom-0 left-0 w-full h-3" 
            style={{ 
              background: "linear-gradient(to bottom, #a3a3a3, #888)", 
              borderBottom: "2px solid #666"
            }}
          />
          {/* Wood body */}
          <div 
            className="w-full h-7"
            style={{
              background: "linear-gradient(180deg, #f5deb3, #deb887, #d2b48c)",
              borderTop: "1px solid #e8d5b7",
            }}
          />
          {/* Label */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 text-[6px] font-bold text-amber-900/60 tracking-wider uppercase">
            ERASER
          </div>
        </div>
        {/* Chalk dust under eraser */}
        <motion.div
          className="absolute -bottom-1 left-2 right-2 h-2 rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(255,255,255,0.15) 0%, transparent 70%)",
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleX: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
}
