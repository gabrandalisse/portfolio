import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import userData from "@constants/data";
import MagneticButton from "./MagneticButton";

const EXPO_EASE = [0.16, 1, 0.3, 1];

export default function FavouriteProjects({ showHeaderLink = true }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const projects = userData.projects;
  const activeProject = projects[activeIndex] || projects[0];

  return (
    <section id="work-showcase" className="w-full hairline-b">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Section Header Strip */}
        <div className="grid grid-cols-2 md:grid-cols-12 hairline-b py-3 font-mono text-[11px] uppercase tracking-widest text-[#8E8D8A]">
          <div className="col-span-1 md:col-span-4 flex items-center space-x-2">
            <span className="text-[#FF4D1C] font-bold">[02 / 05]</span>
            <span>SELECTED WORKS ARCHIVE</span>
          </div>
          <div className="hidden md:flex md:col-span-4 items-center">
            <span>INDEX: 01 — 0{projects.length} // PRODUCTION SYSTEMS</span>
          </div>
          <div className="col-span-1 md:col-span-4 text-right">
            <span>INTERACTIVE INSPECTOR</span>
          </div>
        </div>

        {/* Title & Editorial Subtitle */}
        <div className="py-12 md:py-20 hairline-b flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#FF4D1C] mb-3">
              // ENGINEERED APPLICATIONS
            </p>
            <h2 className="heading-section uppercase">
              SELECTED ARCHITECTURE
            </h2>
          </div>

          {showHeaderLink && (
            <div className="flex items-center space-x-4">
              <Link href="/projects" passHref>
                <MagneticButton
                  strength={0.22}
                  className="hairline-border px-5 py-3 font-mono text-xs uppercase tracking-widest hover:border-[#FF4D1C] hover:text-[#FF4D1C] transition-colors"
                >
                  <span>FULL ARCHIVE ({projects.length})</span>
                  <span className="ml-2">→</span>
                </MagneticButton>
              </Link>
            </div>
          )}
        </div>

        {/* Interactive Split Layout: Left Editorial List (Cols 1-7) | Right Sticky Preview Inspector (Cols 8-12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Numbered Interactive Rows */}
          <div className="lg:col-span-7 lg:hairline-r divide-y divide-white/10">
            {projects.map((project, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <motion.article
                  key={project.id || project.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.65, delay: idx * 0.06, ease: EXPO_EASE }}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onFocus={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative py-8 sm:py-10 px-4 sm:px-6 transition-colors duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[#111111]/90 dark:bg-[#111111]/90 light:bg-black/5"
                      : "hover:bg-[#111111]/40"
                  }`}
                >
                  {/* Active Left Bar Accent */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-[#FF4D1C] transition-transform duration-300 origin-top ${
                      isSelected ? "scale-y-100" : "scale-y-0"
                    }`}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                    <div className="flex items-baseline space-x-4 sm:space-x-6">
                      <span
                        className={`font-mono text-sm sm:text-base font-bold transition-colors ${
                          isSelected ? "text-[#FF4D1C]" : "text-[#8E8D8A]"
                        }`}
                      >
                        {project.id || `0${idx + 1}`}
                      </span>
                      <div>
                        <h3 className="font-display font-bold text-2xl sm:text-4xl tracking-tight uppercase group-hover:text-[#FF4D1C] transition-colors">
                          {project.title}
                        </h3>
                        <p className="font-mono text-xs text-[#8E8D8A] mt-1">
                          {project.category} · {project.year}
                        </p>
                      </div>
                    </div>

                    {/* Direct Action Links */}
                    <div className="flex items-center space-x-3 self-start sm:self-center">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="hairline-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider hover:bg-[#FF4D1C] hover:text-[#0A0A0A] hover:border-[#FF4D1C] transition-colors"
                        >
                          LIVE ↗
                        </a>
                      )}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="hairline-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider hover:border-[#FF4D1C] hover:text-[#FF4D1C] transition-colors"
                      >
                        REPO ↗
                      </a>
                    </div>
                  </div>

                  {/* Architecture & Stack Pills */}
                  <div className="mt-5 pl-0 sm:pl-11">
                    <p className="text-sm sm:text-base text-[#8E8D8A] leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF4D1C] mr-1">
                        [STACK]
                      </span>
                      {project.stack?.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] px-2.5 py-0.5 hairline-border text-[#8E8D8A]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Mobile / Tablet Inline Image Preview (Visible on <lg when active) */}
                    <div
                      className={`lg:hidden mt-6 overflow-hidden hairline-border transition-all duration-500 ${
                        isSelected ? "block" : "hidden"
                      }`}
                    >
                      <div className="aspect-video w-full overflow-hidden bg-[#0A0A0A]">
                        <img
                          src={project.imgUrl}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3 bg-[#0A0A0A] font-mono text-[11px] text-[#8E8D8A] flex justify-between">
                        <span>{project.architecture}</span>
                        <span className="text-[#FF4D1C]">ACTIVE</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Right Column: Dynamic Sticky Architectural Preview (Desktop) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-between p-8 xl:p-10 sticky top-24 self-start">
            <div className="w-full">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-[#8E8D8A] mb-4">
                <span>VISUAL TELEMETRY // {activeProject.id}</span>
                <span className="text-[#FF4D1C]">{activeProject.title}</span>
              </div>

              {/* Dynamic Preview Viewport */}
              <div className="relative aspect-[16/11] w-full overflow-hidden hairline-border bg-[#111111]">
                <AnimatePresence exitBeforeEnter>
                  <motion.div
                    key={activeProject.title}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, scale: 1.04 }
                    }
                    animate={{ opacity: 1, scale: 1 }}
                    exit={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, scale: 0.98 }
                    }
                    transition={{ duration: 0.45, ease: EXPO_EASE }}
                    className="w-full h-full"
                  >
                    <img
                      src={activeProject.imgUrl}
                      alt={activeProject.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute top-3 right-3 bg-[#0A0A0A]/85 hairline-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-[#F4F3EE]">
                  {activeProject.year}
                </div>
              </div>

              {/* Architectural Blueprint Details */}
              <div className="mt-6 pt-6 hairline-t space-y-4 font-mono text-xs">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8E8D8A] block mb-1">
                    SYSTEM ARCHITECTURE
                  </span>
                  <p className="text-current font-medium">
                    {activeProject.architecture}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8E8D8A] block mb-2">
                    CORE DEPENDENCIES
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.stack?.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 hairline-border text-[11px] bg-[#111111]/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between gap-4">
                  <a
                    href={activeProject.liveUrl || activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[#FF4D1C] text-[#0A0A0A] font-bold py-3 px-4 uppercase tracking-widest hover:bg-[#F4F3EE] transition-colors"
                  >
                    LAUNCH DEPLOYMENT ↗
                  </a>
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hairline-border py-3 px-4 uppercase tracking-widest hover:border-[#FF4D1C] hover:text-[#FF4D1C] transition-colors"
                  >
                    SOURCE CODE ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
