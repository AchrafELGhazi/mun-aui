import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Join = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    major: '',
    yearOfStudy: '',
    interests: '',
    experience: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            key='step1'
            variants={formVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <h2 className='text-2xl font-bold mb-4'>Personal Information</h2>
            <div className='mb-4'>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Full Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key='step2'
            variants={formVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <h2 className='text-2xl font-bold mb-4'>Academic Information</h2>
            <div className='mb-4'>
              <label
                htmlFor='major'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Major
              </label>
              <input
                type='text'
                id='major'
                name='major'
                value={formData.major}
                onChange={handleInputChange}
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='yearOfStudy'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Year of Study
              </label>
              <select
                id='yearOfStudy'
                name='yearOfStudy'
                value={formData.yearOfStudy}
                onChange={handleInputChange}
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              >
                <option value=''>Select year</option>
                <option value='1'>1st Year</option>
                <option value='2'>2nd Year</option>
                <option value='3'>3rd Year</option>
                <option value='4'>4th Year</option>
                <option value='5'>5th Year</option>
              </select>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key='step3'
            variants={formVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <h2 className='text-2xl font-bold mb-4'>MUN Experience</h2>
            <div className='mb-4'>
              <label
                htmlFor='interests'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Areas of Interest in MUN
              </label>
              <textarea
                id='interests'
                name='interests'
                value={formData.interests}
                onChange={handleInputChange}
                required
                rows='3'
                className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder='e.g., International Security, Human Rights, Climate Change'
              ></textarea>
            </div>
            <div className='mb-4'>
              <label
                htmlFor='experience'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Previous MUN Experience (if any)
              </label>
              <textarea
                id='experience'
                name='experience'
                value={formData.experience}
                onChange={handleInputChange}
                rows='3'
                className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder='Describe any previous MUN experience or leave blank if none'
              ></textarea>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='min-h-screen bg-white py-12 px-4 sm:px-6 lg:mt-12 -mt-16 lg:px-8 flex items-center'>
      <div className='max-w-md w-full space-y-8 bg-white p-6 sm:p-10 rounded-xl shadow-2xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='text-4xl font-extrabold text-center text-gray-900 mb-2'>
            Join MUN AUI
          </h1>
          <p className='text-center text-gray-600 mb-8'>
            Become a part of our global diplomacy community
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
          <AnimatePresence mode='wait'>{renderStep()}</AnimatePresence>

          <div className='flex justify-between mt-8'>
            {step > 1 && (
              <motion.button
                type='button'
                onClick={prevStep}
                className='bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50'
                variants={buttonVariants}
                whileHover='hover'
                whileTap='tap'
              >
                Previous
              </motion.button>
            )}
            {step < 3 ? (
              <motion.button
                type='button'
                onClick={nextStep}
                className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                variants={buttonVariants}
                whileHover='hover'
                whileTap='tap'
              >
                Next
              </motion.button>
            ) : (
              <motion.button
                type='submit'
                className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                variants={buttonVariants}
                whileHover='hover'
                whileTap='tap'
              >
                Submit Application
              </motion.button>
            )}
          </div>
        </form>

        <motion.div
          className='mt-4 text-center text-sm text-gray-600'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Step {step} of 3
        </motion.div>
      </div>
    </div>
  );
};

export default Join;
