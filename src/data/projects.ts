import type { Project } from "@/types/project";

export const projects: Project[] = [
    {
        featured: true,
        slug: "textrelay",
        title: "TextRelay",
        projectType: "self",
        cat: [
            { name: "GitHub", url: "https://github.com/karthikshetty26/TextRelay" }
        ],
        year: "Mar 2026 - Mar 2026",
        tech: ["JavaScript", "PHP", "HTML5", "CSS3"],

        description:
            "A lightweight tool for quickly sharing text or code snippets between restricted environments using a short ID.",

        problem:
            "Sharing small pieces of text or code between devices is often slower than it should be, especially when you just need a quick, no-setup solution.",

        approach:
            "Built a minimal web-based tool that allows users to paste text, generate a short ID, and retrieve it from another system. Used PHP with file-based storage to keep the system simple, fast, and deployable on basic hosting without a database.",

        myrole:
            "Designed and built the entire tool with a focus on simplicity, fast access, and minimal dependencies, ensuring it works reliably even in constrained environments.",

        outcome:
            "Delivered a fast and practical utility for quickly sharing snippets across devices without setup overhead, improving everyday developer workflow.",
    },

    {
        featured: true,
        slug: "stegax",
        title: "StegaX",
        projectType: "self",
        cat: [
            { name: "GitHub", url: "https://github.com/karthikshetty26/StegaX" }
        ],
        year: "Nov 2025 - Jan 2026",
        tech: ["Flutter", "Dart", "AES-256-GCM", "Cryptography"],

        description:
            "An open-source mobile application for securely embedding encrypted messages inside images using steganography.",

        problem:
            "Most messaging systems rely on visible encryption but do not conceal the existence of sensitive data, making it easier to detect and target.",

        approach:
            "Built a Flutter application that combines AES-256-GCM encryption with on-device steganography. Ensured complete local processing with no external data transfer, and designed a clear separation between UI and cryptographic logic for maintainability and security.",

        myrole:
            "Designed and developed the entire application, focusing on secure data handling, encryption workflows, and building a clean and reliable user interface.",

        outcome:
            "Delivered a privacy-focused application that enables secure and discreet communication, while demonstrating strong fundamentals in cryptography and secure system design.",
    },

    {
        featured: false,
        slug: "tanuh-medha-app",
        title: "Tanuh Medha: Mobile App",
        projectType: 'work',
        cat: [
            { name: "More Info", url: "https://www.tanuh.ai/solutions/mental-health" }
        ],
        year: "Dec 2025 - Ongoing",
        tech: ["Flutter", "Dart", "Express.js", "PostgreSQL", "GCP"],

        description:
            "A mobile application for conducting mental health surveys, enabling structured data collection and tracking of user well-being.",

        problem:
            "There was no simple and scalable way to conduct mental health surveys while securely storing and analyzing user responses.",

        approach:
            "Built a cross-platform mobile app using Flutter with a focus on performance and usability. Integrated REST APIs for survey submission and data retrieval, and implemented efficient state management to ensure a smooth user experience.",

        myrole:
            "Handled mobile development using Flutter, focusing on building a reliable and user-friendly experience while integrating backend services and handling sensitive user workflows carefully.",

        outcome:
            "Delivered a smooth and responsive app that enabled seamless survey completion and improved reliability of data collection.",
    },

    {
        featured: false,
        slug: "paytimeplus-app",
        title: "PayTimePlus: Mobile App",
        projectType: 'work',
        cat: [],
        year: "Oct 2025 - Jan 2026",
        tech: ["Flutter", "Dart", "SpringBoot", "MySQL", "JWT"],

        description:
            "A mobile application for the PayTimePlus platform, enabling on-the-go access to workforce management features and real-time employee tracking.",

        problem:
            "The existing system was limited to web access, making it difficult for teams to manage workforce activities and track employees in real time from the field.",

        approach:
            "Built a cross-platform mobile app using Flutter with a focus on performance and usability. Integrated with backend services for real-time data updates, authentication using JWT, and ensured consistency with the existing web platform.",

        myrole:
            "Sole owner of the mobile application, responsible for end-to-end development including UI implementation, state management, and backend integration. Ensured feature parity with the web system while building real-time tracking capabilities.",

        outcome:
            "Enabled mobile access to core platform features, including real-time employee tracking, improving accessibility and field-level operations.",
    },

    {
        featured: false,
        slug: "webtoolsmith",
        title: "WebToolSmith",
        projectType: 'self',
        cat: [
            { name: 'Live', url: 'http://webtoolsmith.com/' }
        ],
        year: "Nov 2024 - Ongoing",
        tech: ["Next.js 15", "React", "JavaScript", "HTML5", "CSS3"],

        description:
            "A suite of free, browser-based developer tools, including a Text formatter, Text Sorting, CSS Tools, URL Tools, and color Converter. Built for speed and zero dependencies.",

        problem:
            "Purely done for self-use purpose. I used to switch between multiple tools for basic utilities, so I wanted to build one that I can use for my daily tasks.",

        myrole:
            "Designed and developed the entire platform, focusing on modular architecture and reusable UI components for scalability.",

        approach:
            "Built with Next.js 15. Each tool is a fully self-contained client-side module with no server calls, instant results. Designed a unified UI system so all tools feel consistent regardless of function.",

        outcome:
            "Shipped more than 30+ fully functional tools. Clean, fast, and no ads. Actively used as a personal daily-driver toolset.",
    },

    {
        featured: false,
        slug: "apstudio",
        title: "Automated AP-BPM",
        projectType: 'work',
        cat: [],
        year: "Aug 2024 - Feb 2025",
        tech: ["Angular 18", "TypeScript", "JavaScript", "Java", "SpringBoot", "PostgreSQL", "HTML5", "CSS3"],

        description:
            "An accounts payable and business process management system that automates invoice processing and streamlines financial workflows.",

        problem:
            "Enterprises dealing with large volumes of email invoices and POs had no automated way to extract key data, leading to slow manual review cycles.",

        approach:
            "Build a custom solution using Angular 18 and Spring Boot. Implemented a robust email integration module to automatically fetch and parse invoices from designated email accounts. Utilized AI-powered OCR to extract key data such as invoice number, vendor details, and line items. Integrated with PostgreSQL for secure data storage and retrieval.",

        myrole:
            "Focused on frontend development, building reusable components and handling API integration for complex workflow-driven interfaces.",

        outcome:
            "Automated invoice processing for enterprise clients, handling thousands of invoices monthly with improved accuracy and providing real-time visibility into the accounts payable workflow.",
    },

    {
        featured: false,
        slug: "aidocsense",
        title: "AI DocSense",
        projectType: 'work',
        cat: [],
        year: "Apr 2024 - Jul 2024",
        tech: ["Angular 16", "TypeScript", "JavaScript", "JQuery", "Bootstrap", "Java", "SpringBoot", "Python", "HTML5", "CSS3"],

        description:
            "An AI-powered document processing platform that extracts, classifies, and summarizes data from unstructured documents.",

        problem:
            "Enterprises dealing with large volumes of unstructured documents had no automated way to extract key data, leading to slow and inefficient manual processing.",

        approach:
            "Built the frontend using Angular 16 with real-time document upload and preview. Integrated Python-based ML services for OCR and classification. Used Spring Boot to coordinate data flow between the frontend, AI services, and MySQL for logging and tracking.",

        myrole:
            "Acted as the initial frontend owner, defining the UI architecture and core integration patterns. Designed and developed the document processing interface and ensured stable frontend–backend communication.",

        outcome:
            "Reduced document processing time and improved efficiency in handling large volumes of data.",
    },

    {
        featured: false,
        slug: "rentall",
        title: "RentAll: Equipment Rental Platform",
        projectType: 'work',
        cat: [
            { name: 'Know More', url: 'https://myrentalgoods.com/' }
        ],
        year: "Dec 2023 - Dec 2024",
        tech: ["Angular 17", "TypeScript", "Java", "Spring Boot", "MySQL", "Bootstrap", "HTML5", "CSS3"],

        description:
            "A web platform for managing end-to-end equipment rental operations, including inventory, bookings, invoicing, and return tracking.",

        problem:
            "Rental businesses lacked a centralized system to track inventory, rental periods, deposits, and overdue returns, leading to disputes and inefficiencies.",

        approach:
            "Built using Angular 17 and Spring Boot with a multi-role dashboard. Also converted the web application into a mobile app using Angular Capacitor, adapting the UI for mobile usage.",

        myrole:
            "Contributed to frontend architecture and full-stack development. Later handled mobile adaptation using Angular Capacitor and supported debugging and Improvements post-launch.",

        outcome:
            "Streamlined the rental workflow from booking to return, reducing manual effort and improving overall operational efficiency.",
    },

    {
        featured: false,
        slug: "union-bank-digital-library",
        title: "UTouch: Union Bank Digital Library",
        projectType: 'work',
        cat: [{ name: 'Article', url: 'https://adsyndicate.in/portfolio/union-bank-digital-public-library-initiative/' }],
        year: "Sep 2023 - Nov 2023",
        tech: ["Angular 16", "TypeScript", "Strapi CMS", "Bootstrap", "REST APIs", "JQuery", "HTML5", "CSS3"],

        description:
            "A public digital library platform built for Union Bank of India, providing citizens access to curated learning resources and publications.",

        problem:
            "Union Bank needed a centralized and accessible platform for public knowledge sharing, but content was scattered with no structured system.",

        approach:
            "Built the frontend using Angular 16 with Strapi CMS as a headless backend. Implemented search, filtering, and structured navigation to improve content discovery and accessibility.",

        myrole:
            "Worked on UI development and API integration to ensure a smooth user experience. Built a PowerShell-based setup tool that generates an executable for quick kiosk configuration using location-based URLs, reducing deployment effort. Also customized an open-source virtual keyboard to fix Windows 11 kiosk input issues and improve usability.",

        outcome:
            "Deployed to production and used across public library kiosks. Reduced kiosk setup effort by ~80% through automation. Enables independent content management and provides access to thousands of resources through a single interface, with a goal of scaling to 150+ locations.",
    },

    {
        featured: false,
        slug: "paytimeplus",
        title: "PayTimePlus (HMS)",
        projectType: 'work',
        cat: [
            { name: "More Info", url: "https://www.paytimeplus.com/" }
        ],
        year: "Feb 2023 - Sep 2023",
        tech: ["Angular 18", "TypeScript", "Java", "Spring Boot", "MySQL", "Bootstrap", "REST APIs", "HTML5", "CSS3"],

        description:
            "An HR management system actively used by multiple clients to manage workforce operations, payroll, and compliance.",

        problem:
            "Organizations were relying on fragmented spreadsheets and manual processes to manage employee data, payroll, and attendance, leading to errors, delays, and compliance risks.",

        approach:
            "Built a modular Angular and Spring Boot application with role-based access control. Designed RESTful APIs for employee management, payroll, and attendance. Used MySQL with optimized queries for reliable and efficient data handling.",

        myrole:
            "Worked on both frontend and backend development over six months. Built the Contract Employee module to manage workforce deployed across multiple client locations. Also focused on performance improvements and resolving critical issues to improve system stability.",

        outcome:
            "Reduced manual errors and improved payroll and workforce management efficiency across active client deployments.",
    },
];
