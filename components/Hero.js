import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import userData from "@constants/data";
import MagneticButton from "./MagneticButton";

const EXPO_EASE = [0.16, 1, 0.3, 1];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const maskTransition = (delay = 0) =>
    shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.95, delay, ease: EXPO_EASE };

  const headlineRows = [
    { text: "FULL-STACK", indent: "lg:pl-0", accent: false, index: "01" },
    { text: "ARCHITECTURE", indent: "lg:pl-16 xl:pl-28", accent: true, index: "02" },
    { text: "& CLOUD SYSTEMS", indent: "lg:pl-32 xl:pl-52", accent: false, index: "03" },
  ];

  return (
    <section className="relative w-full hairline-b overflow-hidden">
      {/* Subtle Architectural Background Grid Columns */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 max-w-[1440px] mx-auto px-4 sm:px-8 grid grid-cols-4 lg:grid-cols-12"
      >
        {Array.from({ length: 12 }).map((_, idx) => (
          <div
            key={idx}
            className={`h-full border-r border-white/[0.03] ${
              idx >= 4 ? "hidden lg:block" : ""
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Top Metadata Strip */}
        <div className="grid grid-cols-2 md:grid-cols-12 hairline-b py-3 font-mono text-[11px] uppercase tracking-widest text-[#8E8D8A]">
          <div className="col-span-1 md:col-span-4 flex items-center space-x-2">
            <span className="text-[#FF4D1C] font-bold">[01 / 04]</span>
            <span>ARCHITECTURAL DOSSIER</span>
          </div>
          <div className="hidden md:flex md:col-span-4 items-center justify-center">
            <span>DISCIPLINE: BACKEND · FRONTEND · CLOUD</span>
          </div>
          <div className="col-span-1 md:col-span-4 text-right">
            <span>CURRENT FOCUS: {userData.about.currentProject}</span>
          </div>
        </div>

        {/* Full-Width Monumental Editorial Hero */}
        <div className="min-h-[80vh] py-12 sm:py-16 lg:py-24 flex flex-col justify-between">
          {/* Top Kicker Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 lg:mb-12">
            <div className="overflow-hidden">
              <motion.div
                initial={shouldReduceMotion ? { y: 0 } : { y: "100%" }}
                animate={{ y: "0%" }}
                transition={maskTransition(0.05)}
                className="inline-flex items-center space-x-3 hairline-border px-3.5 py-2 font-mono text-xs uppercase tracking-widest bg-[#111111]/50"
              >
                <span className="w-2 h-2 bg-[#FF4D1C] inline-block" />
                <span>{userData.fullName}</span>
                <span className="text-[#8E8D8A]">//</span>
                <span className="text-[#FF4D1C]">{userData.designation}</span>
              </motion.div>
            </div>

            <div className="overflow-hidden hidden md:block">
              <motion.div
                initial={shouldReduceMotion ? { y: 0 } : { y: "100%" }}
                animate={{ y: "0%" }}
                transition={maskTransition(0.1)}
                className="font-mono text-xs uppercase tracking-widest text-[#8E8D8A] flex items-center space-x-3"
              >
                <span className="inline-block w-8 h-[1px] bg-[#FF4D1C]" />
                <span>EDITION // PORTFOLIO ARCHIVE</span>
              </motion.div>
            </div>
          </div>

          {/* Monumental Staggered Display Typography — Guaranteed Single Line per Row */}
          <div className="my-auto py-4">
            <h1 className="heading-architectural uppercase tracking-tight space-y-2 sm:space-y-4">
              {headlineRows.map((row, index) => (
                <div
                  key={row.text}
                  className={`overflow-hidden py-1 ${row.indent}`}
                >
                  <motion.div
                    initial={shouldReduceMotion ? { y: 0 } : { y: "108%" }}
                    animate={{ y: "0%" }}
                    transition={maskTransition(0.14 + index * 0.09)}
                    className="flex items-start sm:items-baseline gap-3 sm:gap-5"
                  >
                    <span className="hidden sm:inline-block font-mono text-xs font-normal tracking-widest text-[#8E8D8A] shrink-0">
                      /{row.index}
                    </span>
                    <span
                      className={`block sm:whitespace-nowrap ${
                        row.accent ? "text-[#FF4D1C]" : ""
                      }`}
                    >
                      {row.text}
                    </span>
                  </motion.div>
                </div>
              ))}
            </h1>
          </div>

          {/* Bottom Editorial Bio & Action Bar */}
          <div className="mt-12 lg:mt-16 pt-8 sm:pt-10 hairline-t grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7 overflow-hidden">
              <motion.p
                initial={shouldReduceMotion ? { y: 0 } : { y: "100%" }}
                animate={{ y: "0%" }}
                transition={maskTransition(0.44)}
                className="text-base sm:text-lg md:text-xl leading-relaxed text-[#8E8D8A] font-normal max-w-3xl"
              >
                {userData.about.title}. Senior Software Engineer at{" "}
                <a
                  href="https://www.naranjax.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-current font-medium underline decoration-[#FF4D1C] underline-offset-4 hover:text-[#FF4D1C] transition-colors"
                >
                  Naranja X
                </a>{" "}
                specializing in high-concurrency microservices with TypeScript, Fastify, Kotlin, Spring Boot & AWS EKS/Lambda.
              </motion.p>
            </div>

            <div className="lg:col-span-5 flex flex-wrap items-center lg:justify-end gap-4">
              <MagneticButton
                href="#experience-blueprint"
                strength={0.22}
                className="bg-[#FF4D1C] text-[#0A0A0A] font-mono text-xs font-bold uppercase tracking-widest px-7 py-4 hover:bg-[#F4F3EE] hover:text-[#0A0A0A] transition-colors"
              >
                <span>EXPLORE ARCHIVE</span>
                <span className="ml-2">↓</span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
