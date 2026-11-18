import "../styles/globals.css";
import React, { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Preloader from "../components/Preloader";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let lenisInstance = null;
    let rafId = null;

    import("@studio-freight/lenis")
      .then((LenisModule) => {
        const Lenis = LenisModule.default || LenisModule;
        lenisInstance = new Lenis({
          duration: 1.15,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: "vertical",
          gestureDirection: "vertical",
          smooth: true,
          smoothTouch: false,
          touchMultiplier: 2,
        });

        const raf = (time) => {
          lenisInstance.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      })
      .catch(() => {
        // Fallback to native scroll if Lenis fails to initialize
      });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <div className="grain-overlay" aria-hidden="true" />
      <Preloader />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
