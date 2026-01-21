
export type ExperienceLevel = "All Levels" | "Beginner" | "Intermediate" | "Experienced";

export interface Job {
  id: string;
  title: string;
  category: string;
  description: string;
  requirements: string[];
  experienceLevel: ExperienceLevel;
  location: string;
  employmentType: string;
  postedDate: string;
}
