import { useRef } from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="c-space section-spacing" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-heading mb-4">About Me</h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
          Crafting digital experiences with passion and precision
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 gap-6 md:grid-cols-6 md:auto-rows-[20rem] mt-12"
      >
        {/* Grid 1 - Hero Introduction */}
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden md:col-span-4 rounded-2xl border border-neutral-700/50 bg-gradient-to-br from-neutral-900 to-neutral-800/80 p-8 group hover:border-purple-500/40 transition-all duration-300"
        >
          {/* Background Image with parallax effect */}
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[2.8] md:right-[5%] md:top-[5%] lg:scale-[2.3] opacity-20 group-hover:opacity-30 transition-opacity duration-300"
            alt="coding"
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-end h-full">
            <div className="space-y-4">
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="inline-block"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-lavender/20 border border-purple-500/30 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-purple-300 text-sm font-semibold">
                    Available for Work
                  </span>
                </span>
              </motion.div>

              {/* Name */}
              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-lavender">Vignesh Venugopal</span>
              </h3>

              {/* Description */}
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-xl">
                Over the last 3 years, I've developed my frontend skills to
                deliver dynamic and innovative software and web applications.
                I turn ideas into pixel-perfect realities.
              </p>

              {/* Stats */}
              <div className="flex gap-6 pt-4">
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-white">3+</p>
                  <p className="text-sm text-neutral-400">Years Experience</p>
                </div>
               
              
              </div>
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl" />
        </motion.div>

        {/* Grid 2 - Location/Timezone */}
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden md:col-span-2 rounded-2xl border border-neutral-700/50 bg-gradient-to-br from-indigo/30 via-neutral-900 to-neutral-800/80 p-6 md:p-8 group hover:border-indigo/50 transition-all duration-300"
        >
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div className="space-y-3">
              {/* Icon Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo/20 border border-indigo/30 backdrop-blur-sm w-fit">
                <span className="text-xl">🌍</span>
                <span className="text-indigo-300 text-xs font-semibold">
                   Ready to build 
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Time Zone
              </h3>

              {/* Description */}
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                Based in India, and open to work worldwide. Let's
                collaborate across borders!
              </p>
            </div>

            {/* Time Display */}
            <div className="mt-4 p-3 rounded-lg bg-neutral-800/50 border border-neutral-700/50 backdrop-blur-sm">
              <p className="text-xs text-neutral-400 mb-1">Current Time (IST)</p>
              <p className="text-xl font-bold text-white">
                {new Date().toLocaleTimeString('en-US', { 
                  timeZone: 'Asia/Kolkata',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>

          {/* Globe */}
          <figure className="absolute right-[-30%] md:right-[-20%] top-1/2 -translate-y-1/2 scale-[1.3] md:scale-[1.5] opacity-40 group-hover:opacity-60 group-hover:scale-[1.6] transition-all duration-500">
            <Globe />
          </figure>
        </motion.div>

        {/* Grid 3 - CTA */}
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden md:col-span-3 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 via-neutral-900 to-lavender/10 p-8 group hover:border-purple-500/50 transition-all duration-300"
        >
          <div className="flex flex-col items-center justify-center gap-6 h-full relative z-10">
            {/* Icon */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-6xl"
            >
              🚀
            </motion.div>

            {/* Text */}
            <div className="text-center space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Let's Build Together
              </h3>
              <p className="text-neutral-400 max-w-sm">
                Ready to start your next project? Let's turn your ideas into reality.
              </p>
            </div>

            {/* CTA Button */}
            <CopyEmailButton />
          </div>

          {/* Animated Background Orbs */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-lavender/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
        </motion.div>

        {/* Grid 4 - Tech Stack */}
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden md:col-span-3 rounded-2xl border border-neutral-700/50 bg-gradient-to-br from-neutral-900 to-neutral-800/80 p-6 md:p-8 group hover:border-purple-500/40 transition-all duration-300"
        >
          <div className="relative z-10 h-full flex flex-col">
            <div className="space-y-3 flex-shrink-0">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm w-fit">
                <span className="text-xl">💻</span>
                <span className="text-purple-300 text-xs font-semibold">
                  Technologies
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Tech Stack
              </h3>

              {/* Description */}
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                Specializing in modern frameworks and tools to build robust,
                scalable applications.
              </p>
            </div>

            {/* Frameworks Component */}
            <div className="absolute inset-y-0 right-0 w-[55%] md:w-[50%] h-full flex items-center justify-center">
              <div className="scale-110 md:scale-125 group-hover:scale-[1.15] md:group-hover:scale-[1.3] transition-transform duration-300">
                <Frameworks />
              </div>
            </div>
          </div>

          {/* Decorative Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-neutral-900 to-transparent pointer-events-none" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;