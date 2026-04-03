/**
 * Central profile configuration - Single Source of Truth
 * 
 * All professional stats and career milestones are defined here.
 * Do NOT hardcode these values in components.
 * 
 * Use lib/profile.ts utilities to compute UI-ready values.
 */

export const profile = {
  /**
   * Career timeline
   */
  career: {
    // ISO date format: YYYY-MM-DD
    // Used to calculate dynamic years of experience
    startDate: "2023-02-01",
  },

  /**
   * Work metrics
   */
  work: {
    // Total hours spent working across all projects
    totalHours: 4600,

    /**
     * Project counts by category
     * Keep these updated as you complete new projects
     */
    projects: {
      professional: 8,
      freelance: 5,
      personal: 12,
    },
  },
};
