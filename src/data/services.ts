import type { Service } from "@/types/service";

export const services: Service[] = [
    {
        title: "Business Website",
        description:
            "A clean, fast website that represents your business properly.",
        includes: [
            "Custom design based on your brand",
            "Fully responsive layout",
            "Basic SEO setup",
            "Google Analytics setup",
            "Deployment to production hosting",
        ],
        bestFor:
            "Businesses, startups, or individuals who need a solid and reliable online presence.",
    },
    {
        title: "Website Redesign",
        description:
            "Improving an existing site that feels outdated, slow, or hard to use.",
        includes: [
            "Review of current site",
            "Updated UI and structure",
            "Performance improvements",
            "Cleaner content layout",
            "Migration support",
        ],
        bestFor:
            "Businesses, startups, or individuals with an existing site that no longer reflects their current work.",
    },
    {
        title: "Custom Application",
        description:
            "An application built around your specific workflow or idea.",
        includes: [
            "Feature planning and structure",
            "Frontend and backend development",
            "Database setup ",
            "Authentication if needed",
            "Deployment and documentation",
        ],
        bestFor:
            "Teams or individuals who need something more than a standard website.",
    },
];
