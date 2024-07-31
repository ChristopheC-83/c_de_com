export const titleVariants = {
  initialState: { filter: "blur(10px)", opacity: 0, scale: 0.75, x: -250 },
  finalState: {
    filter: "blur(0px)",
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.33,
    },
  },
};
export const planetVariants = {
  initialState: { filter: "blur(10px)", opacity: 0, scale: 0.1, y: 500 },
  finalState: {
    filter: "blur(0px)",
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
    //   delay: 0.25,
    },
  },
};
export const linksMenuVariants = {
  initialState: { filter: "blur(10px)", opacity: 0, y: 200 },
  finalState: {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.33,
    //   delay: 0.25,
    },
  },
};

export const buttonVariants = {
    initialStateFromUp: {
      opacity: 0,
      y: -80,
      scale: 0.5,
    },
    initialStateFromDown: {
      opacity: 0,
      y: 80,
      scale: 0.5,
    },
    initialStateFromLeft: {
      opacity: 0,
      x: -80,
      scale: 0.5,
    },
    initialStateFromRight: {
      opacity: 0,
      x: 80,
      scale: 0.5,
    },
    initialStateFromcenter: {
      opacity: 0,
      scale: 0.1,
    },
  
    finalState: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };
