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
            <motion.textarea
                value={text}
                variants={ChildrenMotionVariants}
                className={'h-44 w-full 912px:w-[900px] p-2 flex-shrink flex text-xs 390px:text-sm 912px:text-xl text-center resize-none justify-center items-center border-y border-x border-neutral-600 rounded-lg text-gray-100 bg-[#f2f2f2] bg-opacity-5 overflow-x-auto overflow-y-hidden min-h-14'}
            />
            <span className={'inline-flex items-center font-light text-[0.60rem] text-gray-400 768px:hidden'}>
                <HandIcon className={'w-2 h-2'} />&nbsp;
            </span>
        </motion.ul>
    );
};

export default DiscourseFieldComponent;
