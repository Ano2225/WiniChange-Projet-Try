import React from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.3
    }
  }
};

const colorStyles = {
  green: {
    background: 'bg-[#126e51] hover:bg-[#1a875c]',
    title: 'text-[#126e51]',
    icon: 'hover:bg-[#126e51]/10'
  },
  yellow: {
    background: 'bg-yellow-500 hover:bg-yellow-400',
    title: 'text-yellow-600',
    icon: 'hover:bg-yellow-500/10'
  },
  default: {
    background: 'bg-gray-800 hover:bg-gray-700',
    title: 'text-gray-800',
    icon: 'hover:bg-gray-800/10'
  }
};

const AffiliateCondition = ({ 
  id, 
  text, 
  specialText, 
  color = 'default', 
  icon: Icon,
  className 
}) => {
  const styles = colorStyles[color] || colorStyles.default;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className={twMerge(
        styles.background,
        'p-4 rounded-2xl mt-5 max-w-[450px] shadow-xl transition-all duration-300',
        'transform hover:scale-[1.02] hover:shadow-2xl',
        className
      )}
    >
      <div className='flex items-start gap-4'>
        <div className='flex-shrink-0'>
          <div className='relative'>
            {Icon && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={twMerge(
                  'p-2.5 bg-white rounded-xl shadow-md transition-all duration-300',
                  styles.icon
                )}
              >
                <Icon className='h-6 w-6 text-black' />
              </motion.div>
            )}
          </div>
        </div>

        <div className='flex-1 space-y-3'>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className='inline-block'
          >
            <h3
              className={twMerge(
                styles.title,
                'text-base font-bold px-3 py-1',
                'bg-white rounded-lg shadow-sm',
                'transform transition-all duration-300'
              )}
            >
              {id}
            </h3>
          </motion.div>

          <p className='text-white text-base leading-relaxed'>
            {text}
            {specialText && (
              <span className='font-semibold bg-white/10 px-2 py-0.5 rounded ml-1'>
                {specialText}
              </span>
            )}
          </p>
        </div>
      </div>
    </motion.div>
  );
};



export default React.memo(AffiliateCondition);