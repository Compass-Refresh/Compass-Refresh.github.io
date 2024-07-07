import React, { useState, useEffect } from 'react';

export const useRandomColor = (interval = 1000) => {
  const [randomColor, setRandomColor] = useState('#000000'); // Initial color, e.g., black
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Generate a random color
      const newColor = `#${Math.floor(Math.random()*16777215).toString(16)}`; // Generates a random hex color
      
      // Update the state with the new color
      setRandomColor(newColor);
    }, interval);
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [interval]); // Re-run effect if interval changes
  
  return randomColor;
};