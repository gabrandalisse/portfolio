import React from "react";
import Link from "next/link";
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

  const headlineLines = ["FULL-STACK", "ARCHITECTURE", "& CLOUD SYSTEMS"];

  return (
    <section className="relative w-full hairline-b overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Top Metadata Strip */}
        <div className="grid grid-cols-2 md:grid-cols-12 hairline-b py-3 font-mono text-[11px] uppercase tracking-widest text-[#8E8D8A]">
          <div className="col-span-1 md:col-span-4 flex items-center space-x-2">
            <span className="text-[#FF4D1C] font-bold">[01 / 05]</span>
            <span>ARCHITECTURAL DOSSIER</span>
          </div>
          <div className="hidden md:flex md:col-span-4 items-center">
            <span>DISCIPLINE: BACKEND · FRONTEND · CLOUD</span>
          </div>
          <div className="col-span-1 md:col-span-4 text-right">
            <span>CURRENT FOCUS: {userData.about.currentProject}</span>
          </div>
        </div>

        {/* Main Asymmetric Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[78vh]">
          {/* Left Column (Cols 1-8): Architectural Masked Display Typography */}
          <div className="lg:col-span-8 py-12 sm:py-16 lg:py-24 lg:pr-10 lg:hairline-r flex flex-col justify-between">
            <div>
              {/* Kicker Tag */}
              <div className="overflow-hidden mb-6">
                <motion.div
                  initial={shouldReduceMotion ? { y: 0 } : { y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={maskTransition(0.05)}
                  className="inline-flex items-center space-x-3 hairline-border px-3 py-1.5 font-mono text-xs uppercase tracking-widest"
                >
                  <span className="w-2 h-2 bg-[#FF4D1C] inline-block" />
                  <span>{userData.fullName}</span>
                  <span className="text-[#8E8D8A]">//</span>
                  <span className="text-[#FF4D1C]">{userData.designation}</span>
                </motion.div>
              </div>

              {/* Architectural H1 with Masked Line Reveal */}
              <h1 className="heading-architectural uppercase tracking-tight">
                {headlineLines.map((line, index) => (
                  <span key={line} className="block overflow-hidden pb-1">
                    <motion.span
                      initial={shouldReduceMotion ? { y: 0 } : { y: "105%" }}
                      animate={{ y: "0%" }}
                      transition={maskTransition(0.12 + index * 0.09)}
                      className={`block ${
                        index === 1 ? "text-[#FF4D1C]" : ""
                      }`}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h1>
            </div>

            {/* Editorial Bio & Action Bar */}
            <div className="mt-12 lg:mt-20 pt-8 hairline-t grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-7 overflow-hidden">
                <motion.p
                  initial={shouldReduceMotion ? { y: 0 } : { y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={maskTransition(0.42)}
                  className="text-base sm:text-lg md:text-xl leading-relaxed text-[#8E8D8A] font-normal"
                >
                  {userData.about.title}. Software Engineer at{" "}
                  <a
                    href="https://www.naranjax.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-current font-medium underline decoration-[#FF4D1C] underline-offset-4 hover:text-[#FF4D1C] transition-colors"
                  >
                    Naranja X
                  </a>{" "}
                  building distributed microservices with AWS, Serverless, Node.js & TypeScript.
                </motion.p>
              </div>

              <div className="md:col-span-5 flex flex-wrap items-center md:justify-end gap-4">
                <MagneticButton
                  href="#work-showcase"
                  strength={0.22}
                  className="bg-[#FF4D1C] text-[#0A0A0A] font-mono text-xs font-bold uppercase tracking-widest px-6 py-4 hover:bg-[#F4F3EE] hover:text-[#0A0A0A] transition-colors"
                >
                  <span>EXPLORE ARCHIVE</span>
                  <span className="ml-2">↓</span>
                </MagneticButton>

                <MagneticButton
                  href={userData.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  strength={0.22}
                  className="hairline-border font-mono text-xs uppercase tracking-widest px-5 py-4 hover:border-[#FF4D1C] hover:text-[#FF4D1C] transition-colors"
                >
                  <span>CURRICULUM [CV]</span>
                  <span className="ml-2">↗</span>
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Right Column (Cols 9-12): Technical Portrait Card & System Specs */}
          <div className="lg:col-span-4 py-12 lg:py-16 lg:pl-10 flex flex-col justify-between">
            {/* Avatar Frame with Editorial Coordinates */}
            <div className="relative">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#8E8D8A] mb-3">
                <span>FIG. 01 — ENGINEER PORTRAIT</span>
                <span>ID: @{userData.githubUsername}</span>
              </div>

              <div className="relative overflow-hidden hairline-border bg-[#111111] group">
                <motion.div
                  initial={
                    shouldReduceMotion
                      ? { scale: 1, opacity: 1 }
                      : { scale: 1.08, opacity: 0 }
                  }
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.1, delay: 0.25, ease: EXPO_EASE }}
                  className="relative aspect-[4/5] w-full overflow-hidden"
                >
                  <img
                    src={userData.avatarUrl}
                    alt={userData.fullName}
                    className="w-full h-full object-cover object-center filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono text-[11px] text-[#F4F3EE]">
                    <div>
                      <span className="block text-[#FF4D1C] font-bold">
                        FRONT-END / BACK-END
                      </span>
                      <span>SYSTEMS INFORMATION ENG.</span>
                    </div>
                    <span className="px-2 py-0.5 bg-[#0A0A0A]/80 hairline-border text-[10px]">
                      UTN FRC
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Technical Spec Table */}
            <div className="mt-10 pt-6 hairline-t font-mono text-xs space-y-3">
              <div className="flex justify-between items-center py-1.5 hairline-b">
                <span className="text-[#8E8D8A]">PRIMARY STACK</span>
                <span className="text-right">MERN · NEXT.JS · AWS</span>
              </div>
              <div className="flex justify-between items-center py-1.5 hairline-b">
                <span className="text-[#8E8D8A]">CLOUD ARCHITECTURE</span>
                <span className="text-right">LAMBDA · STEP FUNCTIONS</span>
              </div>
              <div className="flex justify-between items-center py-1.5 hairline-b">
                <span className="text-[#8E8D8A]">ACTIVE DEPLOYMENT</span>
                <a
                  href={userData.about.currentProjectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF4D1C] hover:underline flex items-center space-x-1"
                >
                  <span>{userData.about.currentProject}</span>
                  <span>↗</span>
                </a>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-[#8E8D8A]">BASE STATION</span>
                <span>{userData.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
