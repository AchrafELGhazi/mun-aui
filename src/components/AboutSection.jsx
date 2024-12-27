import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="py-16 bg-gray-50 backdrop-blur-lg rounded-2xl mx-14 overflow-hidden shadow-2xl border border-white/30"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="lg:w-1/2" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-700 mb-6 relative">
              About AUI Model United Nations
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-green-700"></span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              AUI MUN is a dynamic student-run organization dedicated to
              fostering global awareness, critical thinking, and leadership
              among students. Through engaging simulations of the United
              Nations, we provide participants with the opportunity to debate
              pressing international issues, develop diplomatic skills, and
              collaborate on innovative solutions.
            </p>
            <motion.button
              className="px-6 py-3 bg-[#1a5632] text-white rounded-full font-semibold text-lg shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
          <motion.div className="lg:w-1/2 relative" variants={itemVariants}>
            <motion.div
              className="absolute inset-0 bg-green-200 rounded-2xl transform rotate-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
            ></motion.div>
            <motion.img
              src="/2.JPG"
              alt="MUN AUI participants in action"
              className="rounded-2xl shadow-2xl relative z-10 transform -rotate-3 transition-transform duration-300 hover:rotate-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
