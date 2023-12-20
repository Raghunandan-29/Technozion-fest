// import { useRef } from 'react';

// export const useAnimationState = () => {
//     const currentRotation = useRef([0, 3, 0]);
//     const currentPosition = useRef([-0.1, -2.1, 0]);
  
// return { currentRotation, currentPosition };
// };

// AnimationContext.js

import React, { createContext, useContext, useRef } from 'react';

const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const currentRotation = useRef([0, 3, 0]);
  const currentPosition = useRef([-0.1, -2.1, 0]);

  const setDynamicValues = (rotation, position) => {
    currentRotation.current = rotation;
    currentPosition.current = position;
  };

  return (
    <AnimationContext.Provider value={{ currentRotation, currentPosition, setDynamicValues }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};
