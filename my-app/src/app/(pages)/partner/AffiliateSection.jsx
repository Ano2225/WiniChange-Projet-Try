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
          green: 'bg-[#126e51]',
          yellow: 'bg-yellow-500',
        }[color] || 'bg-gray-300',
        'p-2 rounded-lg mt-5 max-w-[450px] shadow-lg'
      )}
    >
       <div className='flex flex-col gap-2'>
        <Icon className={`text-black h-10 w-10 bg-white rounded-full items-center p-2 ml-2`} /> 
        <h1
          className={twMerge(
            {
              green: 'text-blue-800',
              white: 'text-indigo-800',
            }[color] || 'text-gray-800',
            'text-lg font-bold mb-4 bg-white px-4 mx-2 rounded-lg text-[#126e51] w-fit'
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