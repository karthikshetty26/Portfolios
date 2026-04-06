export type Project = {
    slug: string;
    title: string;
    projectType: 'self' | 'work' | 'freelance';
    cat: { name: string; url: string }[];
    year: string;
    description: string;
    myrole: string;
    problem: string;
    approach: string;
    outcome: string;
    tech: string[];
    featured: boolean;
    // New optional fields
    overview?: string;
    highlights?: string[];       // max 4 rendered
    challenges?: string;
    solutionPoints?: string[];
    images?: string[];           // paths relative to /public
};
