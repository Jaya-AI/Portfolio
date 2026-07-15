/**
 * Animation Utilities
 * @description Centralized animation configurations and helper functions for CSS animations.
 * All animations preserve existing portfolio styling and behavior.
 */

/**
 * CSS keyframe animations injected into components
 * @type {string}
 */
export const ANIMATIONS_CSS = `
  @keyframes spin { 
    from { transform: rotate(0deg); } 
    to { transform: rotate(360deg); } 
  }
  
  @keyframes blob1 { 
    0%,100% { transform: translate(0,0) scale(1); } 
    50% { transform: translate(40px,-30px) scale(1.08); } 
  }
  
  @keyframes blob2 { 
    0%,100% { transform: translate(0,0) scale(1); } 
    50% { transform: translate(-30px,40px) scale(1.05); } 
  }
  
  @keyframes pulse { 
    0%,100% { opacity: 0.3; } 
    50% { opacity: 0.8; } 
  }
  
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
  }
`;

/**
 * Animation timing configurations
 * @type {Object}
 */
export const TIMING = {
  fast: "0.2s",
  normal: "0.3s",
  slow: "0.5s",
  verySlow: "0.8s",
};

/**
 * Easing functions for smooth transitions
 * @type {Object}
 */
export const EASING = {
  easeInOut: "ease-in-out",
  easeOut: "ease-out",
  easeIn: "ease-in",
  linear: "linear",
};

/**
 * Generate animation delay from index
 * @param {number} index - Element index in array
 * @param {number} interval - Delay interval in ms
 * @returns {number} Delay in milliseconds
 */
export function getAnimationDelay(index, interval = 100) {
  return index * interval;
}

/**
 * Create smooth scroll behavior configuration
 * @returns {Object} Scroll options for scrollIntoView
 */
export function getSmoothScrollConfig() {
  return { behavior: "smooth", block: "start" };
}
