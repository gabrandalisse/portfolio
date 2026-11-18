import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import userData from "@constants/data";

let hasShownPreloaderInSession = false;

export default function Preloader() {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(!hasShownPreloaderInSession);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (hasShownPreloaderInSession || shouldReduceMotion) {
      hasShownPreloaderInSession = true;
      setIsVisible(false);
      return;
    }

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 18) + 9;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          hasShownPreloaderInSession = true;
          setIsVisible(false);
        }, 320);
      } else {
        setProgress(current);
      }
    }, 65);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="editorial-preloader"
          initial={{ y: "0%" }}
          exit={{
            y: "-100%",
            transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0A0A0A] text-[#F4F3EE] p-6 md:p-12 border-b border-white/15"
        >
          {/* Top Technical Header */}
          <div className="flex flex-row justify-between items-start font-mono text-xs uppercase tracking-widest text-[#8E8D8A]">
            <div className="flex items-center space-x-2">
              <span className="inline-block w-2 h-2 bg-[#FF4D1C] rounded-full animate-pulse" />
              <span>SYS.BOOT // PORTFOLIO ARCHITECTURE</span>
            </div>
            <div className="text-right">
              <span>{userData.address}</span>
              <span className="hidden sm:inline"> — 31.4201° S, 64.1888° W</span>
            </div>
          </div>

          {/* Center Name & Role Mask Reveal */}
          <div className="my-auto max-w-5xl">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#FF4D1C] mb-3"
              >
                [00 / INITIALIZING INTERFACE]
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-extrabold text-4xl sm:text-6xl md:text-8xl tracking-tight leading-none uppercase"
              >
                {userData.fullName}
              </motion.h1>
            </div>
            <div className="overflow-hidden mt-3">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="font-mono text-xs md:text-sm text-[#8E8D8A]"
              >
                {userData.designation} · Software Engineer @ Naranja X
              </motion.p>
            </div>
          </div>

          {/* Bottom Counter & Progress Line */}
          <div className="w-full">
            <div className="flex justify-between items-end mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#8E8D8A]">
                LOADING MODULES (MERN / AWS / SERVERLESS)
              </span>
              <span className="font-mono text-4xl md:text-6xl font-bold text-[#F4F3EE] leading-none">
                {String(progress).padStart(3, "0")}%
              </span>
            </div>
            <div className="w-full h-[1px] bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-[#FF4D1C] origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.2, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
