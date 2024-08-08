import { motion } from "framer-motion";
import { containerVariants, dotVariants } from "../../constants/animation";
export const LoadingAnimation: React.FC = () => {
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
