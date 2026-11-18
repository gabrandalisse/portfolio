import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function MagneticButton({
  children,
  href,
  onClick,
  target,
  rel,
  className = "",
  strength = 0.25,
  as = "a",
  type,
  disabled,
  title,
  ariaLabel,
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !ref.current || disabled) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = as === "button" ? motion.button : motion.a;

  return (
    <Component
      ref={ref}
      href={as === "a" ? href : undefined}
      onClick={onClick}
      target={target}
      rel={rel}
      type={type}
      disabled={disabled}
      title={title}
      aria-label={ariaLabel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.4 }}
      className={`inline-flex items-center justify-center select-none ${className}`}
    >
      {children}
    </Component>
  );
}
