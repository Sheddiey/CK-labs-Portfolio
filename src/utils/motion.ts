export const slideInFromLeft = (delay: number) => {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
};

export const slideInFromRight = (delay: number) => {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
};

export const slideInFromBottom = (delay: number) => {
  return {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
};

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

export const slideBracketRight = {
  hidden: {
    x: 0,
    opacity: 0,
  },
  hover: {
    x: 10,
    opacity: 1,
    transition: {
      x: { duration: 0.5, ease: "easeOut" },
      opacity: { duration: 0.2 },
    },
  },
};

export const slideBracketLeft = {
  hidden: {
    x: 0,
    opacity: 0,
  },
  hover: {
    x: -12,
    opacity: 1,
    transition: {
      x: { duration: 0.5, ease: "easeOut" },
      opacity: { duration: 0.2 },
    },
  },
};
