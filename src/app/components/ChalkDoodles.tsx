"use client";

import { motion } from "framer-motion";

interface DoodleProps {
  className?: string;
  color?: string;
  delay?: number;
}

// Star doodle drawn with chalk
export function ChalkStar({ className = "", color = "rgba(253,230,138,0.6)", delay = 0 }: DoodleProps) {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.3 }}
      className={`absolute pointer-events-none ${className}`}
      width="40" height="40" viewBox="0 0 40 40"
      fill="none"
    >
      <motion.path
        d="M20 2 L24 14 L37 14 L27 22 L31 35 L20 27 L9 35 L13 22 L3 14 L16 14 Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
      />
    </motion.svg>
  );
}

// Curved arrow drawn with chalk
export function ChalkArrow({ className = "", color = "rgba(147,197,253,0.6)", delay = 0 }: DoodleProps) {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.3 }}
      className={`absolute pointer-events-none ${className}`}
      width="80" height="40" viewBox="0 0 80 40"
      fill="none"
    >
      <motion.path
        d="M5 30 Q20 5 40 15 Q60 25 70 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
      />
      <motion.path
        d="M65 6 L70 10 L64 14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: delay + 1.5, ease: "easeOut" }}
      />
    </motion.svg>
  );
}

// Wavy underline
export function ChalkUnderline({ className = "", color = "rgba(249,168,212,0.5)", delay = 0 }: DoodleProps) {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.3 }}
      className={`absolute pointer-events-none ${className}`}
      width="200" height="15" viewBox="0 0 200 15"
      fill="none"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0 8 Q10 2 20 8 Q30 14 40 8 Q50 2 60 8 Q70 14 80 8 Q90 2 100 8 Q110 14 120 8 Q130 2 140 8 Q150 14 160 8 Q170 2 180 8 Q190 14 200 8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
      />
    </motion.svg>
  );
}

// Circle / highlight
export function ChalkCircle({ className = "", color = "rgba(134,239,172,0.4)", delay = 0 }: DoodleProps) {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.3 }}
      className={`absolute pointer-events-none ${className}`}
      width="60" height="60" viewBox="0 0 60 60"
      fill="none"
    >
      <motion.ellipse
        cx="30" cy="30" rx="25" ry="22"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.8, delay: delay + 0.3, ease: "easeOut" }}
        style={{ transform: "rotate(-5deg)", transformOrigin: "center" }}
      />
    </motion.svg>
  );
}

// Exclamation marks
export function ChalkExclamation({ className = "", color = "rgba(253,186,116,0.6)", delay = 0 }: DoodleProps) {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.3 }}
      className={`absolute pointer-events-none ${className}`}
      width="20" height="40" viewBox="0 0 20 40"
      fill="none"
    >
      <motion.line
        x1="10" y1="4" x2="10" y2="26"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: delay + 0.3, ease: "easeOut" }}
      />
      <motion.circle
        cx="10" cy="34" r="2.5"
        fill={color}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.3, delay: delay + 0.9 }}
      />
    </motion.svg>
  );
}

// Small ABC letters doodle
export function ChalkABC({ className = "", color = "rgba(196,181,253,0.5)", delay = 0 }: DoodleProps) {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.3 }}
      className={`absolute pointer-events-none ${className}`}
      width="90" height="30" viewBox="0 0 90 30"
      fill="none"
    >
      {/* A */}
      <motion.path
        d="M5 25 L15 5 L25 25 M9 18 L21 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
      />
      {/* B */}
      <motion.path
        d="M33 25 L33 5 Q48 5 48 15 Q48 25 33 25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, delay: delay + 1, ease: "easeOut" }}
      />
      {/* C */}
      <motion.path
        d="M70 8 Q55 3 55 15 Q55 27 70 22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, delay: delay + 1.7, ease: "easeOut" }}
      />
    </motion.svg>
  );
}

// Sparkle / twinkle stars
export function ChalkSparkles({ className = "" }: { className?: string }) {
  const sparkles = [
    { x: 10, y: 10, size: 6, delay: 0 },
    { x: 50, y: 5, size: 4, delay: 0.8 },
    { x: 30, y: 25, size: 5, delay: 1.5 },
    { x: 70, y: 15, size: 3, delay: 2.2 },
  ];

  return (
    <div className={`absolute pointer-events-none ${className}`}>
      {sparkles.map((s, i) => (
        <div
          key={i}
          className="chalk-sparkle absolute"
          style={{
            left: `${s.x}%`,
            top: `${s.y}px`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: "radial-gradient(circle, rgba(255,255,255,0.8), transparent)",
            borderRadius: "50%",
            "--sparkle-duration": `${2 + Math.random() * 2}s`,
            "--sparkle-delay": `${s.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
