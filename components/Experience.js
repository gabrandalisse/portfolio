import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import userData from "@constants/data";

const EXPO_EASE = [0.16, 1, 0.3, 1];

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience-blueprint" className="w-full hairline-b">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Section Metadata Strip */}
        <div className="grid grid-cols-2 md:grid-cols-12 hairline-b py-3 font-mono text-[11px] uppercase tracking-widest text-[#8E8D8A]">
          <div className="col-span-1 md:col-span-4 flex items-center space-x-2">
            <span className="text-[#FF4D1C] font-bold">[02 / 04]</span>
            <span>CAREER & SYSTEM BLUEPRINT</span>
          </div>
          <div className="hidden md:flex md:col-span-4 items-center">
            <span>CHRONOLOGY: 2017 — PRESENT</span>
          </div>
          <div className="col-span-1 md:col-span-4 text-right">
            <span>FINTECH · CLOUD-NATIVE · MICROSERVICES</span>
          </div>
        </div>

        {/* Title Header */}
        <div className="py-12 md:py-20 hairline-b flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#FF4D1C] mb-3">
              // TRAJECTORY & TECHNICAL MATRIX
            </p>
            <h2 className="heading-section uppercase">
              EXPERIENCE & STACK
            </h2>
          </div>
          <p className="font-mono text-xs text-[#8E8D8A] max-w-md">
            Career progression at Naranja X (Junior → Semi Senior → Senior Software Engineer), Software Engineering studies, and cloud-native technical blueprint.
          </p>
        </div>

        {/* Part A: Career & Education Blueprint Timeline */}
        <div className="divide-y divide-white/10 hairline-b">
          {userData.experience.map((exp, idx) => (
            <motion.div
              key={exp.id || idx}
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: idx * 0.07,
                ease: EXPO_EASE,
              }}
              className="grid grid-cols-1 lg:grid-cols-12 py-10 md:py-12 gap-6 lg:gap-8 items-start group hover:bg-[#111111]/40 transition-colors px-2 sm:px-4"
            >
              {/* Col 1-3: Index & Period */}
              <div className="lg:col-span-3 flex lg:flex-col justify-between lg:justify-start gap-2 font-mono">
                <span className="text-xs text-[#FF4D1C] font-bold tracking-widest">
                  {exp.id || `EXP-0${idx + 1}`}
                </span>
                <span className="text-lg sm:text-xl font-bold tracking-tight">
                  {exp.period || exp.year}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#8E8D8A]">
                  {exp.type}
                </span>
              </div>

              {/* Col 4-8: Role, Organization & Description */}
              <div className="lg:col-span-6">
                <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight uppercase group-hover:text-[#FF4D1C] transition-colors">
                  {exp.title}
                </h3>
                <a
                  href={exp.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 font-mono text-xs sm:text-sm text-[#8E8D8A] hover:text-[#FF4D1C] transition-colors mt-1 mb-4"
                >
                  <span>@ {exp.company}</span>
                  <span>↗</span>
                </a>
                {exp.highlights && exp.highlights.length > 0 ? (
                  <ul className="space-y-3 text-sm sm:text-base text-[#8E8D8A] leading-relaxed">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start space-x-3">
                        <span className="font-mono text-xs text-[#FF4D1C] mt-1 shrink-0">
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-base text-[#8E8D8A] leading-relaxed">
                    {exp.desc}
                  </p>
                )}
              </div>

              {/* Col 9-12: Domain Tags / Metrics */}
              <div className="lg:col-span-3 flex flex-wrap lg:justify-end gap-2 pt-2">
                {exp.metrics?.map((metric) => (
                  <span
                    key={metric}
                    className="font-mono text-[11px] px-3 py-1 hairline-border text-[#8E8D8A] group-hover:border-white/25 transition-colors"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Part B: Technical Stack Blueprint Matrix */}
        <div className="py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-[#FF4D1C] mb-2">
                // HARDWARE & SOFTWARE CAPABILITIES
              </p>
              <h3 className="font-display font-bold text-3xl sm:text-4xl uppercase tracking-tight">
                TECHNICAL BLUEPRINT MATRIX
              </h3>
            </div>
            <span className="font-mono text-xs text-[#8E8D8A]">
              4 ARCHITECTURAL DOMAINS · 30+ TOOLS & LANGUAGES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 hairline-border">
            {userData.stackBlueprint.map((domain, idx) => (
              <motion.div
                key={domain.code}
                initial={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.08,
                  ease: EXPO_EASE,
                }}
                className="bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-[#F4F3EE] p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-[#8E8D8A] pb-4 mb-4 hairline-b">
                    <span className="text-[#FF4D1C] font-bold">
                      [{domain.code}]
                    </span>
                    <span>{domain.items.length} MODULES</span>
                  </div>
                  <h4 className="font-display font-bold text-xl sm:text-2xl uppercase mb-2">
                    {domain.domain}
                  </h4>
                  <p className="text-sm text-[#8E8D8A] mb-6">
                    {domain.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {domain.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="group inline-flex items-center space-x-2 px-3 py-1.5 hairline-border hover:border-[#FF4D1C] transition-colors bg-[#111111]/40"
                    >
                      {tech.icon && (
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-3.5 h-3.5 object-contain filter brightness-90 group-hover:brightness-110"
                        />
                      )}
                      <span className="font-mono text-xs">{tech.name}</span>
                      <span className="font-mono text-[10px] text-[#8E8D8A]">
                        /{tech.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
