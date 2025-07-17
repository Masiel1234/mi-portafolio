'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  to: string;
  children: ReactNode;
}

export default function Button({ children, to }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Link
        href={to}
        className="bg-amber-800 text-white px-6 py-2 rounded-xl shadow-md hover:bg-amber-700 transition duration-300"
      >
        {children}
      </Link>
    </motion.div>
  );
}
