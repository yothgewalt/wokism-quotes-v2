import React from 'react';

import { motion } from 'framer-motion';

import {
    FacebookShareButton,
    FacebookIcon,
    LineShareButton,
    LineIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon
} from 'next-share';

import { ChildrenMotionVariants, GroupMotionVariants } from '@configuration/motion';

interface SocialShareButtonGroupProps {}

const SocialShareButtonGroupComponent: React.FC<SocialShareButtonGroupProps> = ({}) => {
    return (
        <motion.ul
            initial={'hidden'}
            animate={'visible'}
            variants={GroupMotionVariants}
            className={'flex flex-row space-x-1.5 912px:space-x-3 justify-center items-center'}
        >
            <motion.li
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                variants={ChildrenMotionVariants}
            >
                <FacebookShareButton url={''}>
                    <FacebookIcon size={40} className={'rounded-lg'} />
                </FacebookShareButton>
            </motion.li>
            <motion.li
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                variants={ChildrenMotionVariants}
            >
                <FacebookMessengerShareButton appId='' url=''>
                    <FacebookMessengerIcon size={40} className={'rounded-lg'} />
                </FacebookMessengerShareButton>
            </motion.li>
            <motion.li
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                variants={ChildrenMotionVariants}
            >
                <TwitterShareButton url={''}>
                    <TwitterIcon size={40} className={'rounded-lg'} />
                </TwitterShareButton>
            </motion.li>
            <motion.li
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                variants={ChildrenMotionVariants}
            >
                <TelegramShareButton url={''}>
                    <TelegramIcon size={40} className={'rounded-lg'} />
                </TelegramShareButton>
            </motion.li>
            <motion.li
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                variants={ChildrenMotionVariants}
            >
                <LineShareButton url={''}>
                    <LineIcon size={40} className={'rounded-lg'} />
                </LineShareButton>
            </motion.li>
        </motion.ul>
    );
};

export default SocialShareButtonGroupComponent;
