/**
 * Profile utilities - Derived and computed values
 * 
 * This file contains all logic for calculating and formatting stats.
 * Source data comes from /config/profile.ts
 * 
 * Pure functions - no side effects, consistent outputs
 */

import { profile } from "@/config/profile";

/**
 * Calculate years of experience from career start date
 * Returns a number with 1 decimal place precision
 * 
 * @example
 * // If startDate is "2023-02-01" and today is "2025-04-03"
 * calculateYearsOfExperience("2023-02-01") → 2.17
 */
export function calculateYearsOfExperience(startDate: string): number {
  const start = new Date(startDate);
  const now = new Date();
  const diffMs = now.getTime() - start.getTime();
  const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);
  return Math.round(diffYears * 100) / 100; // Round to 2 decimal places
}

/**
 * Format years of experience for display
 * Shows "X+" format where X is the rounded-down year
 * 
 * @example
 * formatExperience(2.17) → "2+"
 * formatExperience(3.5) → "3+"
 * formatExperience(0.8) → "0+"
 */
export function formatExperience(years: number): string {
  const roundedDown = Math.floor(years);
  return `${roundedDown}+`;
}

/**
 * Format hours worked into human-readable format
 * Converts to thousands (k) for values >= 1000
 * 
 * @example
 * formatHours(4600) → "4.6k+"
 * formatHours(500) → "500+"
 * formatHours(10000) → "10k+"
 */
export function formatHours(hours: number): string {
  if (hours >= 1000) {
    const thousands = (hours / 1000).toFixed(1);
    return `${thousands}k+`;
  }
  return `${hours}+`;
}

/**
 * Calculate total project count across all categories
 * Sums professional, freelance, and personal projects
 * 
 * @example
 * totalProjects() → 25 (8 + 5 + 12)
 */
export function totalProjects(): number {
  const { projects } = profile.work;
  return projects.professional + projects.freelance + projects.personal;
}

/**
 * PUBLIC API: Get all profile stats in UI-ready format
 * 
 * This is the main function to call from components.
 * Returns formatted strings ready for display, no computation needed in JSX.
 * 
 * @example
 * const stats = getProfileStats();
 * // {
 * //   experience: "2+",
 * //   hoursWorked: "4.6k+",
 * //   projectsBuilt: "25+"
 * // }
 */
export function getProfileStats() {
  const yearsOfExp = calculateYearsOfExperience(profile.career.startDate);

  return {
    experience: formatExperience(yearsOfExp),
    hoursWorked: formatHours(profile.work.totalHours),
    projectsBuilt: `${totalProjects()}+`,
  };
}

/**
 * Get raw data for advanced use cases (CMS integration, analytics, etc.)
 * Generally, prefer getProfileStats() for UI usage
 */
export function getRawProfileData() {
  return {
    yearsOfExperience: calculateYearsOfExperience(profile.career.startDate),
    totalHours: profile.work.totalHours,
    totalProjects: totalProjects(),
    projectBreakdown: profile.work.projects,
  };
}
