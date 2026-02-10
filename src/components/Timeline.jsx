"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <h2 className="text-heading">My Work Experience</h2>
      <div ref={ref} className="relative pb-20 mt-12">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative pl-8 pb-12 md:pl-32 group"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-[115px] top-2 z-10">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-lavender border-4 border-midnight group-hover:scale-125 transition-transform duration-300" />
            </div>

            {/* Date badge - Mobile */}
            <div className="mb-4 md:hidden">
              <span className="inline-block px-4 py-1 text-sm font-semibold rounded-full bg-gradient-to-r from-purple-500/20 to-lavender/20 text-purple-300 border border-purple-500/30">
                {item.date}
              </span>
            </div>

            {/* Date badge - Desktop */}
            <div className="absolute left-0 top-0 hidden md:block">
              <span className="inline-block px-4 py-2 text-sm font-bold rounded-lg bg-gradient-to-r from-purple-500/20 to-lavender/20 text-purple-300 border border-purple-500/30">
                {item.date}
              </span>
            </div>

            {/* Content Card */}
            <div className="relative overflow-hidden rounded-xl border border-neutral-700/50 bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-lavender/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-lavender animate-pulse" />
                    <h4 className="text-lg md:text-xl font-semibold text-neutral-300">
                      {item.job}
                    </h4>
                  </div>
                </div>

                {/* Content */}
                <ul className="space-y-3">
                  {item.contents.map((content, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-neutral-400 group/item hover:text-neutral-200 transition-colors"
                    >
                      <span className="text-purple-400 mt-1.5 flex-shrink-0">▹</span>
                      <span className="leading-relaxed">{content}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        ))}

        {/* Animated timeline line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-2 md:left-[123px] top-0 w-[2px] bg-gradient-to-b from-transparent via-neutral-700 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-purple-500 via-lavender to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};