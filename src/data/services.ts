import type { Service } from "@/types/service";

export const services: Service[] = [
    {
        title: "Business Website",
        description:
            "A fast, professional, SEO-optimized website that establishes your brand online and converts visitors into leads. Built with a focus on performance and clarity.",
        includes: [
            "Custom design aligned to your brand",
            "Mobile-first, fully responsive layout",
            "On-page SEO and meta configuration",
            "Contact form with email integration",
            "Google Analytics setup",
            "Deployment to production hosting",
        ],
        bestFor:
            "Startups, small businesses, and professionals who need a credible online presence fast.",
    },
    {
        title: "Website Redesign",
        description:
            "Transform an outdated or underperforming website into a modern, clean experience that reflects where your business actually is today.",
        includes: [
            "Full UX and design audit of existing site",
            "Rebuilt frontend with modern stack",
            "Performance optimization (Core Web Vitals)",
            "Content structure improvements",
            "Accessibility improvements",
            "Migration with zero data loss",
        ],
        bestFor:
            "Businesses with an existing site that looks dated, loads slowly, or doesn't convert well.",
    },
    {
        title: "Custom Application",
        description:
            "A purpose-built web app tailored to your specific workflow. Whether that's a dashboard, a booking system, an internal tool, or something more complex.",
        includes: [
            "Requirements analysis and architecture design",
            "Full-stack development (frontend + backend + database)",
            "Authentication and role-based access control",
            "REST API design and integration",
            "Admin panel or management interface",
            "Deployment and documentation",
        ],
        bestFor:
            "Teams and founders who need a reliable, scalable web application built to solve a specific business problem.",
    },
];
