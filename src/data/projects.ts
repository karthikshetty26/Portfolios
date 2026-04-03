import type { Project } from "@/types/project";

export const projects: Project[] = [
    {
        slug: "paytimeplus",
        title: "PayTimePlus (HMS)",
        description:
            "A full-featured Hotel Management System built for mid-to-large hospitality businesses. Handles reservations, billing, staff scheduling, and real-time room availability.",
        problem:
            "Hotel operations teams were relying on fragmented spreadsheets and manual processes to manage reservations, staff rosters, and billing — leading to double-bookings, delays, and revenue leakage.",
        approach:
            "Built a modular Angular 13 + Spring Boot application with role-based access control. Designed RESTful APIs for reservations, payments, and HR modules. Used MySQL for reliable transactional data with proper indexing for performance.",
        outcome:
            "Reduced manual booking errors by over 70%. The system is now used operationally with real hotel data, handling 200+ reservations per month.",
        tech: [
            "Angular 13",
            "TypeScript",
            "Java",
            "Spring Boot",
            "MySQL",
            "Bootstrap",
            "REST APIs",
        ],
        featured: true,
    },
    {
        slug: "union-bank-digital-library",
        title: "UTouch — Union Bank Digital Library",
        description:
            "A public-facing digital library platform built for Union Bank of India. Provides employees and citizens access to curated learning content, publications, and e-resources.",
        problem:
            "Union Bank needed a centralized, accessible digital library for thousands of employees but had no structured knowledge portal — content was scattered across emails and shared drives.",
        approach:
            "Developed an Angular 16 frontend with Strapi CMS as the headless backend, enabling non-technical staff to publish and manage content. Implemented search, filtering, and category navigation with accessibility compliance.",
        outcome:
            "Deployed to production and actively used by Union Bank. Content managers can publish independently without developer intervention. Thousands of resources are now searchable from a single interface.",
        tech: ["Angular 16", "TypeScript", "Strapi CMS", "Bootstrap", "REST APIs"],
        featured: true,
    },
    {
        slug: "rentall",
        title: "RentAll — Equipment Rental Platform",
        description:
            "A web platform for managing end-to-end equipment rental operations — from inventory listing and customer bookings to contract generation and return tracking.",
        problem:
            "Equipment rental businesses had no centralized system to track asset availability, rental periods, damage deposits, or overdue returns, causing frequent disputes and inventory mismanagement.",
        approach:
            "Built with Angular 17 and Spring Boot, featuring a multi-role dashboard for admin, staff, and customers. Implemented a real-time inventory availability engine and automated contract PDFs via a Java backend service.",
        outcome:
            "Streamlined the rental workflow from booking to return. Admin reporting reduced weekly manual reconciliation from 4 hours to under 30 minutes.",
        tech: [
            "Angular 17",
            "TypeScript",
            "Java",
            "Spring Boot",
            "MySQL",
            "Bootstrap",
        ],
        featured: false,
    },
    {
        slug: "aidocsense",
        title: "AI DocSense",
        description:
            "An AI-powered document intelligence platform that extracts, classifies, and summarizes content from uploaded documents using machine learning models integrated via a Python backend.",
        problem:
            "Enterprises dealing with large volumes of unstructured documents — invoices, contracts, reports — had no automated way to extract key data, leading to slow manual review cycles.",
        approach:
            "Frontend built in Angular 16 with a real-time upload and preview interface. Python ML services handled OCR and classification. Spring Boot acted as the orchestration layer between frontend, AI service, and MySQL for audit logging.",
        outcome:
            "Document processing time reduced by ~60% in pilot testing. The AI model achieved 87% classification accuracy across 5 document categories.",
        tech: [
            "Angular 16",
            "TypeScript",
            "Python",
            "Java",
            "Spring Boot",
            "MySQL",
            "REST APIs",
        ],
        featured: false,
    },
    {
        slug: "webtoolsmith",
        title: "WebToolSmith",
        description:
            "A suite of free, browser-based developer tools — including a JSON formatter, CSS minifier, Base64 encoder, and color palette generator — built for speed and zero dependencies.",
        problem:
            "Developers constantly switch between multiple unreliable third-party sites for basic utilities. Most tools are ad-heavy, slow, or require sign-ups.",
        approach:
            "Built with Next.js 15 and React. Each tool is a fully self-contained client-side module — no server calls, no tracking, instant results. Designed a unified UI system so all tools feel consistent regardless of function.",
        outcome:
            "Shipped 8 fully functional tools. Clean, fast, and privacy-respecting — no analytics, no ads. Actively used as a personal daily-driver toolset.",
        tech: ["Next.js 15", "React", "TypeScript", "CSS Modules"],
        featured: false,
    },
];
