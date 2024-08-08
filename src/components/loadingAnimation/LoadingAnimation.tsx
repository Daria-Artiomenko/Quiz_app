import { motion } from "framer-motion";

const LoadingAnimation: React.FC = () => {
    const containerVariants = {
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const dotVariants = {
        initial: {
            y: "0%",
        },
        animate: {
            y: "100%",
            transition: {
                repeat: Infinity,
                duration: 0.5,
                ease: "easeInOut",
                repeatType: "mirror" as const,
            },
        },
    };

    return (
        <motion.div
            className='flex items-center justify-center h-screen'
            variants={containerVariants}
            initial='initial'
            animate='animate'>
            <motion.span
                className='w-4 h-4 mx-1 bg-amber-500 rounded-full'
                variants={dotVariants}
            />
            <motion.span
                className='w-4 h-4 mx-1 bg-amber-500 rounded-full'
                variants={dotVariants}
            />
            <motion.span
                className='w-4 h-4 mx-1 bg-amber-500 rounded-full'
                variants={dotVariants}
            />
        </motion.div>
    );
};

export default LoadingAnimation;
