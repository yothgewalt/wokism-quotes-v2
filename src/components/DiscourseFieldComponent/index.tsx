import React from 'react';

import { motion } from 'framer-motion';

import { HandIcon } from '@radix-ui/react-icons';

import { ChildrenMotionVariants, GroupMotionVariants } from '@configuration/motion';

interface DiscourseFieldProps {
    text: string;
}

const DiscourseFieldComponent: React.FC<DiscourseFieldProps> = ({ text }) => {
    return (
        <motion.ul
            initial={'hidden'}
            animate={'visible'}
            variants={GroupMotionVariants}
            className={'w-full flex flex-col space-y-1.5 justify-center items-center'}
        >
            <motion.li
                variants={ChildrenMotionVariants}
                className={'h-8 360px:h-10 912px:h-14 w-full 912px:w-[900px] px-2 912px:px-3 912px:py-2.5 flex-shrink flex text-xs 390px:text-sm 912px:text-xl text-center justify-center items-center border-y border-x border-neutral-600 rounded-lg text-gray-100 bg-[#f2f2f2] bg-opacity-5 overflow-x-auto overflow-y-hidden'}
            >
                <span className='w-full text-clip whitespace-nowrap pr-2'>{text}</span>
            </motion.li>
            <span className={'inline-flex items-center font-light text-[0.60rem] text-gray-400 768px:hidden'}>
                <HandIcon className={'w-2 h-2'} />&nbsp;Swipe the box for read more
            </span>
        </motion.ul>
    );
};

export default DiscourseFieldComponent;
