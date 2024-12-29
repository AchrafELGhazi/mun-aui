import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BoardMembers = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const members = [
    { name: 'Nour Laghzal', position: 'President', image: '/pr.JPG' },
    { name: 'Yasmine Abendag', position: 'Vice President', image: '/vp.jpg' },
    { name: 'Meryem Bourichi', position: 'Secretary General', image: '/gs.jpg' },
    { name: 'Youssef El Fadil', position: 'Treasurer', image: '/tr.jpg' },
  ];

  return (
    <section ref={ref} className="py-20  ">
      <div className="absolute inset-0  z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-gray-800 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Our Board Members
          <motion.span
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-500"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              className="relative group"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-2"></div>
              <div className="relative bg-white/70 rounded-2xl p-6 shadow-xl transform transition-all duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2">
                <div className="relative mb-6 overflow-hidden rounded-full w-40 h-40 mx-auto">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-700/80 to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-green-700 font-medium">{member.position}</p>
                <motion.div
                  className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8 }}
                  animate={inView ? { scale: 1 } : { scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
     </section>
  );
};

export default BoardMembers;

