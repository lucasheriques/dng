"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedStatProps {
  value: number;
  label: string;
  color: string;
  duration?: number;
}

export function AnimatedStat({
  value,
  label,
  color,
  duration = 2,
}: AnimatedStatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = value / (duration * 60); // 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [value, duration, isInView]);

  return (
    <motion.div
      ref={ref}
      className="text-center group "
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`text-3xl font-bold ${color}`}>{count}+</div>
      <div className="text-white/60">{label}</div>
    </motion.div>
  );
}
