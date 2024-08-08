export const containerVariants = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const dotVariants = {
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
