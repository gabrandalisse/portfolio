import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import userData from "@constants/data";
import MagneticButton from "./MagneticButton";

const EXPO_EASE = [0.16, 1, 0.3, 1];

export default function AboutMe() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about-editorial" className="w-full hairline-b">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Section Metadata Strip */}
        <div className="grid grid-cols-2 md:grid-cols-12 hairline-b py-3 font-mono text-[11px] uppercase tracking-widest text-[#8E8D8A]">
          <div className="col-span-1 md:col-span-4 flex items-center space-x-2">
            <span className="text-[#FF4D1C] font-bold">[03 / 04]</span>
            <span>ENGINEERING PROFILE & ETHOS</span>
          </div>
          <div className="hidden md:flex md:col-span-4 items-center">
            <span>SOFTWARE ENGINEERING · SIGLO 21 / UTN</span>
          </div>
          <div className="col-span-1 md:col-span-4 text-right">
            <span>{userData.address}</span>
          </div>
        </div>

        {/* Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 py-12 md:py-24 gap-12">
          {/* Left Column (Cols 1-5): Sticky Dossier & Direct Channels */}
          <div className="lg:col-span-5 lg:hairline-r lg:pr-10 flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-[#FF4D1C] mb-3">
                // ABOUT THE ENGINEER
              </p>
              <h2 className="heading-section uppercase mb-8">
                SYSTEMS & PRODUCT MINDSET
              </h2>

              <div className="p-6 hairline-border bg-[#111111]/40 space-y-4 mb-8">
                <div className="flex items-center justify-between font-mono text-xs hairline-b pb-3">
                  <span className="text-[#8E8D8A]">CURRENT ROLE</span>
                  <span className="text-[#FF4D1C] font-bold">Senior SWE @ Naranja X</span>
                </div>
                <div className="flex items-center justify-between font-mono text-xs hairline-b pb-3">
                  <span className="text-[#8E8D8A]">SPECIALIZATION</span>
                  <span>Cloud-Native & Microservices</span>
                </div>
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#8E8D8A]">DIRECT MAIL</span>
                  <a
                    href={`mailto:${userData.email}`}
                    className="hover:text-[#FF4D1C] transition-colors"
                  >
                    {userData.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Opportunities & Direct Contact Callout */}
            <div className="space-y-6 pt-6 hairline-t">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#FF4D1C] mb-2">
                  // OPPORTUNITIES & COLLABORATION
                </h3>
                <p className="text-sm text-[#8E8D8A] leading-relaxed">
                  For any sort of help or engineering inquiry, shoot a{" "}
                  <a
                    href={`mailto:${userData.email}`}
                    className="text-current underline decoration-[#FF4D1C] underline-offset-4 hover:text-[#FF4D1C]"
                  >
                    mail
                  </a>{" "}
                  and I&apos;ll get back to you.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <MagneticButton
                  href={userData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  strength={0.22}
                  className="hairline-border font-mono text-xs uppercase tracking-widest px-4 py-3.5 hover:border-[#FF4D1C] hover:text-[#FF4D1C] transition-colors"
                >
                  GITHUB ↗
                </MagneticButton>

                <MagneticButton
                  href={userData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  strength={0.22}
                  className="hairline-border font-mono text-xs uppercase tracking-widest px-4 py-3.5 hover:border-[#FF4D1C] hover:text-[#FF4D1C] transition-colors"
                >
                  LINKEDIN ↗
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Right Column (Cols 6-12): Editorial Narrative & Paragraphs */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.blockquote
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: EXPO_EASE }}
              className="font-display font-bold text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight mb-12 pb-10 hairline-b"
            >
              “{userData.about.title}.”
            </motion.blockquote>

            <div className="space-y-8">
              {userData.about.description.map((paragraph, idx) => (
                <motion.div
                  key={idx}
                  initial={
                    shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: idx * 0.08,
                    ease: EXPO_EASE,
                  }}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline"
                >
                  <span className="sm:col-span-2 font-mono text-xs text-[#FF4D1C] font-bold">
                    [0{idx + 1}]
                  </span>
                  <p className="sm:col-span-10 text-base sm:text-lg text-[#8E8D8A] leading-relaxed">
                    {paragraph}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
