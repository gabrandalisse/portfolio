import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import userData from "@constants/data";
import MagneticButton from "./MagneticButton";

const EXPO_EASE = [0.16, 1, 0.3, 1];

export default function LatestCode({ repositories }) {
  const [repos, setRepos] = useState(repositories || []);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (repositories && repositories.length > 0) {
      setRepos(repositories);
    }
  }, [repositories]);

  if (!repos || repos.length === 0) {
    return null;
  }

  return (
    <section className="w-full hairline-b">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Section Metadata Strip */}
        <div className="grid grid-cols-2 md:grid-cols-12 hairline-b py-3 font-mono text-[11px] uppercase tracking-widest text-[#8E8D8A]">
          <div className="col-span-1 md:col-span-4 flex items-center space-x-2">
            <span className="text-[#FF4D1C] font-bold">[05 / 05]</span>
            <span>OPEN SOURCE TELEMETRY</span>
          </div>
          <div className="hidden md:flex md:col-span-4 items-center">
            <span>SOURCE: GITHUB.COM/{userData.githubUsername.toUpperCase()}</span>
          </div>
          <div className="col-span-1 md:col-span-4 text-right">
            <span>LIVE REPOSITORY INDEX</span>
          </div>
        </div>

        {/* Header */}
        <div className="py-12 md:py-16 hairline-b flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#FF4D1C] mb-3">
              // CODE REPOSITORIES
            </p>
            <h2 className="heading-section uppercase">LATEST COMMITS & REPOS</h2>
          </div>

          <MagneticButton
            href={`https://github.com/${userData.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            strength={0.22}
            className="hairline-border px-5 py-3 font-mono text-xs uppercase tracking-widest hover:border-[#FF4D1C] hover:text-[#FF4D1C] transition-colors"
          >
            <span>GITHUB PROFILE (@{userData.githubUsername})</span>
            <span className="ml-2">↗</span>
          </MagneticButton>
        </div>

        {/* Repository Blueprint Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 hairline-b">
          {repos.map((latestRepo, idx) => (
            <motion.a
              key={latestRepo.id || latestRepo.name || idx}
              href={latestRepo.html_url || latestRepo.clone_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: idx * 0.05,
                ease: EXPO_EASE,
              }}
              className="group bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-[#F4F3EE] p-6 sm:p-8 flex flex-col justify-between hover:bg-[#111111] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#8E8D8A] mb-4">
                  <span className="text-[#FF4D1C]">
                    REPO // 0{idx + 1}
                  </span>
                  <span>{latestRepo.language || "CODE"}</span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl tracking-tight group-hover:text-[#FF4D1C] transition-colors break-words">
                  {latestRepo.name}
                </h3>
                <p className="text-sm text-[#8E8D8A] mt-3 leading-relaxed line-clamp-3">
                  {latestRepo.description ||
                    "Source repository engineered by Gabriel Andres Brandalisse."}
                </p>
              </div>

              <div className="mt-8 pt-4 hairline-t flex items-center justify-between font-mono text-xs">
                <span className="editorial-link uppercase tracking-wider group-hover:text-[#FF4D1C]">
                  INSPECT SOURCE
                </span>
                <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#FF4D1C]">
                  ↗
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
