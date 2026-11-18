import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import userData from "@constants/data";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [localTime, setLocalTime] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updateClock = () => {
      try {
        const formatter = new Intl.DateTimeFormat("en-GB", {
          timeZone: "America/Argentina/Cordoba",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        setLocalTime(`${formatter.format(new Date())} ART`);
      } catch (e) {
        setLocalTime("UTC-3 ART");
      }
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress(Math.min(1, Math.max(0, totalScroll / windowHeight)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { index: "01", label: "Work", href: "/projects" },
    { index: "02", label: "Experience", href: "/experience" },
    { index: "03", label: "About", href: "/about" },
    { index: "04", label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0A0A0A]/85 dark:bg-[#0A0A0A]/85 light:bg-[#F4F3EE]/85 hairline-b transition-colors duration-300">
      {/* Scroll Progress Hairline Indicator */}
      <div className="w-full h-[2px] bg-transparent overflow-hidden">
        <div
          className="h-full bg-[#FF4D1C] origin-left transition-transform duration-75 ease-out"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-12 items-center min-h-[72px]">
          {/* Col 1-3: Brand & Architectural Monogram */}
          <div className="col-span-1 lg:col-span-3 flex items-center space-x-3 py-3 lg:hairline-r lg:pr-6">
            <Link href="/">
              <a className="group flex items-center space-x-3 focus:outline-none">
                <span className="w-2.5 h-2.5 bg-[#FF4D1C] inline-block transition-transform duration-300 group-hover:rotate-45" />
                <div className="flex flex-col">
                  <span className="font-display font-bold text-sm sm:text-base tracking-tight uppercase leading-none">
                    {userData.name}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#8E8D8A] mt-1">
                    {userData.designation}
                  </span>
                </div>
              </a>
            </Link>
          </div>

          {/* Col 4-6: Telemetry Status (Location + Live Time + Availability) */}
          <div className="hidden lg:flex lg:col-span-4 items-center justify-between px-6 py-3 hairline-r font-mono text-[11px] text-[#8E8D8A]">
            <div className="flex items-center space-x-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="uppercase tracking-wider text-current">
                SWE @ NARANJA X
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span>CÓRDOBA, AR</span>
              <span className="text-[#FF4D1C]">/</span>
              <span className="tabular-nums">{mounted ? localTime : "UTC-3"}</span>
            </div>
          </div>

          {/* Col 8-10: Indexed Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex lg:col-span-3 items-center justify-around px-4 py-3 hairline-r"
          >
            {navItems.map((item) => {
              const isActive = router.asPath === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <a
                    className={`group font-mono text-xs uppercase tracking-wider transition-colors duration-200 flex items-baseline space-x-1 ${
                      isActive ? "text-[#FF4D1C] font-semibold" : "hover:text-[#FF4D1C]"
                    }`}
                  >
                    <span className="text-[10px] text-[#8E8D8A] group-hover:text-[#FF4D1C] transition-colors">
                      {item.index}/
                    </span>
                    <span className="editorial-link">{item.label}</span>
                  </a>
                </Link>
              );
            })}
          </nav>

          {/* Col 11-12: Socials, Theme Switcher & Mobile Menu Trigger */}
          <div className="col-span-1 lg:col-span-2 flex items-center justify-end space-x-3 sm:space-x-4 py-3 pl-4">
            <MagneticButton
              href={userData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="GitHub Profile"
              strength={0.3}
              className="font-mono text-xs uppercase tracking-wider hover:text-[#FF4D1C] transition-colors hidden sm:inline-flex"
            >
              GH↗
            </MagneticButton>

            <MagneticButton
              href={userData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="LinkedIn Profile"
              strength={0.3}
              className="font-mono text-xs uppercase tracking-wider hover:text-[#FF4D1C] transition-colors hidden sm:inline-flex"
            >
              IN↗
            </MagneticButton>

            <button
              aria-label="Toggle color theme"
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hairline-border px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-widest hover:border-[#FF4D1C] hover:text-[#FF4D1C] transition-colors focus:outline-none"
            >
              {mounted ? (theme === "dark" ? "LIGHT" : "DARK") : "MODE"}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              aria-label="Toggle Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden hairline-border px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-widest text-[#FF4D1C]"
            >
              {mobileMenuOpen ? "CLOSE [X]" : "INDEX [+]"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:hidden hairline-t bg-[#0A0A0A] text-[#F4F3EE] px-6 py-6"
        >
          <div className="flex items-center justify-between font-mono text-[11px] text-[#8E8D8A] pb-4 mb-4 hairline-b">
            <span>{userData.address}</span>
            <span>{mounted ? localTime : "ART"}</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/">
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-xs uppercase tracking-widest py-2 hairline-b flex items-center justify-between"
              >
                <span>00 / INDEX</span>
                <span className="text-[#FF4D1C]">→</span>
              </a>
            </Link>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-xs uppercase tracking-widest py-2 hairline-b flex items-center justify-between"
                >
                  <span>
                    {item.index} / {item.label}
                  </span>
                  <span className="text-[#FF4D1C]">→</span>
                </a>
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-between mt-6 pt-4 font-mono text-xs text-[#8E8D8A]">
            <a
              href={userData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF4D1C]"
            >
              GITHUB ↗
            </a>
            <a
              href={userData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF4D1C]"
            >
              LINKEDIN ↗
            </a>
            <a href={`mailto:${userData.email}`} className="hover:text-[#FF4D1C]">
              EMAIL ↗
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
