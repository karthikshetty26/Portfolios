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
};
