import React from 'react';

import { motion } from 'framer-motion';

import { GroupMotionVariants } from '@configuration/motion';

const ContainerComponent: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <motion.ul
            initial={'hidden'}
            animate={'visible'}
            variants={GroupMotionVariants}
            className={'container h-screen mx-auto relative px-4 flex flex-col space-y-5 justify-center items-center min-w-[280px] max-w-7xl overflow-hidden'}
        >
            {children}
        </motion.ul>
    );
};

export default ContainerComponent;
