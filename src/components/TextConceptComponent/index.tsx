import React from 'react';

import { motion } from 'framer-motion';

import Typewriter from 'typewriter-effect';

import { ChildrenMotionVariants } from '@configuration/motion';

interface TextConceptProps {
    text: string;
    words?: string[];
}

const TYPEWRITER_WRAPPER: string = 'ml-[0.15rem] 360px:ml-[0.25rem] 912px:ml-2 font-bold text-sm 360px:text-lg 375px:text-xl 512px:text-3xl  912px:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#f2f2f2] to-[#454545]';
const CURSOR_WRAPPER: string = 'animate-pulse font-bold text-xs 360px:text-base 375px:text-lg 512px:text-2xl 912px:text-3xl text-[#7c7f827a]';

const TextConceptComponent: React.FC<TextConceptProps> = ({ text, words }) => {
    return (
        <motion.li
            variants={ChildrenMotionVariants}
            className={'w-full h-auto inline-block text-center'}
        >
            <h1 className={'inline font-bold text-sm 360px:text-lg 375px:text-xl 512px:text-3xl 912px:text-4xl leading-3 912px:leading-5'}>{text}</h1>
            <Typewriter
                options={{
                    wrapperClassName: TYPEWRITER_WRAPPER,
                    cursorClassName: CURSOR_WRAPPER,
                    strings: words ? words : ['Thailand.', 'the World.'],
                    autoStart: true,
                    loop: true
                }}
            />
        </motion.li>
    );
};

export default TextConceptComponent;
