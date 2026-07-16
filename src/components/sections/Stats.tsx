"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Stat } from "@/types";

interface StatsProps {
  stats: Stat[];
}

function AnimatedCounter({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400">
      {count}{suffix}
    </span>
  );
}

export function Stats({ stats }: StatsProps) {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-2">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}