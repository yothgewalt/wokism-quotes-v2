import React from 'react';

import { motion } from 'framer-motion';
import { ChildrenMotionVariants } from '@configuration/motion';

interface DividerProps {
    text: string;
}

const DividerComponent: React.FC<DividerProps> = ({ text }) => {
    return (
        <motion.li
            variants={ChildrenMotionVariants}
            className={'w-full 912px:w-[520px] relative flex pb-2 items-center'}
        >
            <div className={'flex-grow border-t border-neutral-600'}></div>
                <span className={'flex-shrink mx-2 font-light text-[0.60rem] 768px:text-base 912px:text-lg text-neutral-400'}>{text}</span>
            <div className={'flex-grow border-t border-neutral-600'}></div>
        </motion.li>
    );
};

export default DividerComponent
