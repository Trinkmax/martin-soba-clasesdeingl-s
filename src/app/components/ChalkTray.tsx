"use client";

import { motion } from "framer-motion";

export default function ChalkTray() {
  const chalks = [
    { color: "#fde68a", width: 32, label: "yellow" },
    { color: "#93c5fd", width: 28, label: "blue" },
    { color: "#f9a8d4", width: 35, label: "pink" },
    { color: "#fdfdfd", width: 30, label: "white" },
    { color: "#fdba74", width: 26, label: "orange" },
    { color: "#86efac", width: 24, label: "green" },
  ];

  return (
    <div className="w-full chalk-tray py-3 px-6 flex items-center justify-center gap-4 relative overflow-hidden">
      {/* Chalk dust smudge along tray */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to right, transparent, rgba(255,255,255,0.03) 20%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.03) 80%, transparent)",
        }}
      />
      {chalks.map((chalk, i) => (
        <motion.div
          key={chalk.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 + i * 0.1, duration: 0.4 }}
          className="chalk-piece"
          style={{
            width: `${chalk.width}px`,
            height: "10px",
            backgroundColor: chalk.color,
            transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (Math.random() * 4 + 1)}deg)`,
          }}
          title={`Tiza ${chalk.label}`}
        />
      ))}
    </div>
  );
}
