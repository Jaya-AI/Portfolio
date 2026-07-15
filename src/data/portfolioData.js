/**
 * Portfolio Data Index
 * @description Central export point for all portfolio data.
 * Import individual data files from their respective modules.
 */

export { PERSONAL } from "./personal.js";
export { CONTACT_LINKS } from "./socialLinks.js";
export { SKILLS } from "./skills.js";
export { PROJECTS } from "./projects.js";
export { EDUCATION } from "./education.js";
export { TIMELINE_EXP } from "./experience.js";
export { ACHIEVEMENTS } from "./achievements.js";
export { ACTIVITIES } from "./activities.js";
export { CERTIFICATIONS } from "./certifications.js";

/**
 * Convenience export for all data in one object (optional)
 * Use individual imports for better tree-shaking and performance
 */
import { PERSONAL } from "./personal.js";
import { CONTACT_LINKS } from "./socialLinks.js";
import { SKILLS } from "./skills.js";
import { PROJECTS } from "./projects.js";
import { EDUCATION } from "./education.js";
import { TIMELINE_EXP } from "./experience.js";
import { ACHIEVEMENTS } from "./achievements.js";
import { ACTIVITIES } from "./activities.js";
import { CERTIFICATIONS } from "./certifications.js";

export const ALL_DATA = {
  PERSONAL,
  CONTACT_LINKS,
  SKILLS,
  PROJECTS,
  EDUCATION,
  TIMELINE_EXP,
  ACHIEVEMENTS,
  ACTIVITIES,
  CERTIFICATIONS,
};
