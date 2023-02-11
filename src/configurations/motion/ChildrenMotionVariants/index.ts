import type { Variants } from 'framer-motion';

const ChildrenMotionVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export default ChildrenMotionVariants;
