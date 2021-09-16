export const descriptionVariant = {
  hidden: {
    x: `10vw`,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: `spring`,
    },
  },
};

export const titleVariant = {
  hidden: {
    x: `-10vw`,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: `spring`,
    },
  },
};

export const cardVariant = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
      type: `spring`,
    },
  },
};

export const modalVariants = {
  hidden: {
    y: `-100vh`,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: `spring`,
      duration: 0.4,
    },
  },
  exit: {
    y: `100vh`,
    opacity: 0,
    transition: {
      type: `easeOut`,
      duration: 0.4,
      stiffness: 30,
    },
  },
};

export const planetVariants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: `max-content`,
    transition: {
      type: `spring`,
      duration: 2,
    },
  },
};
