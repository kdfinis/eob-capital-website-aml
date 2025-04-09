import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimateProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  type?: 'fadeIn' | 'slideIn' | 'scaleIn';
}

const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideIn: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }
};

export const Animate = ({ 
  children, 
  delay = 0, 
  className = '',
  type = 'fadeIn'
}: AnimateProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      variants={variants[type]}
      className={className}
    >
      {children}
    </motion.div>
  );
}; 