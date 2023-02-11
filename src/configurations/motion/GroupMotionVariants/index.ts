import type { Variants } from 'framer-motion';

const GroupMotionVariants: Variants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

export default GroupMotionVariants;
