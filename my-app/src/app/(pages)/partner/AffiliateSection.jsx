import React from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const AffiliateCondition = ({ id, text, specialText, color, icon:Icon }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={itemVariants}
      className={twMerge(
        {
          blue: 'bg-blue-300',
          indigo: 'bg-indigo-300',
          green: 'bg-green-300',
        }[color] || 'bg-gray-300',
        'p-2 rounded-lg mt-5 max-w-[450px]'
      )}
    >
       <div className='flex'>
        <Icon className={`text-black h-7 w-7`} /> 
        <h1
          className={twMerge(
            {
              blue: 'text-blue-800',
              indigo: 'text-indigo-800',
              green: 'text-green-800',
            }[color] || 'text-gray-800',
            'text-lg font-bold mb-4 bg-white px-4 mx-2'
          )}
        >
          {id}
        </h1>
       </div>
      <p className='ml-5 text-lg'>
        {text} <span className='font-bold'>{specialText}</span>
      </p>
    </motion.div>
  );
};

export default AffiliateCondition