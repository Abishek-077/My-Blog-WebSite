// animations.js
export const cardAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export const errorAnimation = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 }
};

export const buttonHover = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 }
};