import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import userData from "@constants/data";
import MagneticButton from "./MagneticButton";

const EXPO_EASE = [0.16, 1, 0.3, 1];

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(userData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <footer className="w-full bg-[#0A0A0A] text-[#F4F3EE] hairline-t">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Top Colophon Strip */}
        <div className="grid grid-cols-2 md:grid-cols-12 hairline-b py-4 font-mono text-[11px] uppercase tracking-widest text-[#8E8D8A]">
          <div className="col-span-1 md:col-span-4 flex items-center space-x-2">
            <span className="w-2 h-2 bg-[#FF4D1C] inline-block" />
            <span>FINAL TRANSMISSION // COLOPHON</span>
          </div>
          <div className="hidden md:flex md:col-span-4 items-center">
            <span>AVAILABLE FOR ARCHITECTURAL & FULL-STACK ROLES</span>
          </div>
          <div className="col-span-1 md:col-span-4 text-right">
            <span>{userData.address}</span>
          </div>
        </div>

        {/* Monumental Call to Action */}
        <div className="py-16 sm:py-24 lg:py-32 hairline-b">
          <div className="max-w-5xl">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#FF4D1C] mb-6">
              // READY TO BUILD SCALABLE SYSTEMS?
            </p>

            <motion.h2
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 28 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EXPO_EASE }}
              className="heading-architectural uppercase tracking-tight mb-10"
            >
              LET&apos;S ENGINEER{" "}
              <span className="text-[#FF4D1C]">NEXT-GEN</span> PRODUCTS.
            </motion.h2>
          </div>

          {/* Primary Action & Contact Bar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-end">
            <div className="lg:col-span-7 flex flex-wrap items-center gap-4">
              <MagneticButton
                href={`mailto:${userData.email}`}
                strength={0.25}
                className="bg-[#FF4D1C] text-[#0A0A0A] font-mono text-xs sm:text-sm font-bold uppercase tracking-widest px-7 py-5 hover:bg-[#F4F3EE] transition-colors"
              >
                <span>{userData.email}</span>
                <span className="ml-3">↗</span>
              </MagneticButton>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="hairline-border font-mono text-xs uppercase tracking-widest px-5 py-5 hover:border-[#FF4D1C] hover:text-[#FF4D1C] transition-colors focus:outline-none"
              >
                {copied ? "EMAIL COPIED [✓]" : "COPY EMAIL"}
              </button>

              <MagneticButton
                href={userData.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                strength={0.22}
                className="hairline-border font-mono text-xs uppercase tracking-widest px-5 py-5 hover:border-[#FF4D1C] hover:text-[#FF4D1C] transition-colors"
              >
                <span>RESUME / CV</span>
                <span className="ml-2">↗</span>
              </MagneticButton>
            </div>

            <div className="lg:col-span-5 lg:text-right font-mono text-xs space-y-1 text-[#8E8D8A]">
              <p className="text-[#F4F3EE] font-bold">
                DIRECT LINE: {userData.phone}
              </p>
              <p>BASE: {userData.address} (UTC-3)</p>
            </div>
          </div>
        </div>

        {/* Bottom Architectural Index & Copyright */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center font-mono text-xs text-[#8E8D8A]">
          <div className="md:col-span-5">
            <p className="text-[#F4F3EE] font-medium">
              &copy; {new Date().getFullYear()} {userData.fullName}. All Rights Reserved.
            </p>
            <p className="text-[11px] mt-1">
              Engineered with Next.js · Tailwind CSS · Framer Motion · Lenis Smooth Scroll
            </p>
          </div>

          <div className="md:col-span-4 flex flex-wrap items-center gap-6">
            <Link href="/">
              <a className="editorial-link hover:text-[#FF4D1C] uppercase">
                00/Home
              </a>
            </Link>
            <Link href="/projects">
              <a className="editorial-link hover:text-[#FF4D1C] uppercase">
                01/Work
              </a>
            </Link>
            <Link href="/experience">
              <a className="editorial-link hover:text-[#FF4D1C] uppercase">
                02/Experience
              </a>
            </Link>
            <Link href="/about">
              <a className="editorial-link hover:text-[#FF4D1C] uppercase">
                03/About
              </a>
            </Link>
            <Link href="/contact">
              <a className="editorial-link hover:text-[#FF4D1C] uppercase">
                04/Contact
              </a>
            </Link>
          </div>

          <div className="md:col-span-3 flex items-center md:justify-end space-x-6">
            <a
              href={userData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link text-[#F4F3EE] hover:text-[#FF4D1C] uppercase"
            >
              GITHUB ↗
            </a>
            <a
              href={userData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link text-[#F4F3EE] hover:text-[#FF4D1C] uppercase"
            >
              LINKEDIN ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
