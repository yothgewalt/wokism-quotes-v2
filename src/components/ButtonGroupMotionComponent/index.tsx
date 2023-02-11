import React from 'react';

import { motion } from 'framer-motion';

import { GroupMotionVariants } from '@configuration/motion';

const ButtonGroupMotionComponent: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <motion.ul
            initial={'hidden'}
            animate={'visible'}
            variants={GroupMotionVariants}
            className={'w-full 768px:w-full 912px:w-auto h-auto flex flex-col 768px:flex-row space-y-2 768px:space-x-4 768px:space-y-0 justify-center items-center'}
        >
            {children}
        </motion.ul>
    );
};

export default ButtonGroupMotionComponent;
