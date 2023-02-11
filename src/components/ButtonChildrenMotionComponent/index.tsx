import React from 'react';

import { motion } from 'framer-motion';

import { ChildrenMotionVariants} from '@configuration/motion';

const ButtonChildrenMotionComponent: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <motion.li
            variants={ChildrenMotionVariants}
            className={'w-full 912px:w-auto'}
        >
            {children}
        </motion.li>
    );
};

export default ButtonChildrenMotionComponent;
