import type { Blog } from "@/types/blog";

export const blogs: Blog[] = [
    {
        slug: "complete-guide-javascript-list-operations",
        title: "Complete Guide to JavaScript List Operations",
        description:
            "A comprehensive deep-dive into JavaScript array manipulation — covering map, filter, reduce, flat, and lesser-known methods with real-world examples.",
        date: "2024-08-15",
    },
    {
        slug: "synchronous-asynchronous-javascript",
        title: "Synchronous and Asynchronous in JavaScript",
        description:
            "Demystifying the JavaScript event loop, call stack, and task queue. Understand exactly when and why async code behaves the way it does.",
        date: "2024-06-10",
    },
    {
        slug: "comparing-arrays-java-javascript",
        title: "Comparing Arrays in Java and JavaScript",
        description:
            "A side-by-side comparison of array handling in Java and JavaScript — from declaration and iteration to sorting and deep equality checks.",
        date: "2024-04-22",
    },
    {
        slug: "getting-started-with-docker",
        title: "Getting Started with Docker on Windows",
        description:
            "A practical setup guide for running Docker on Windows 10/11 — covering WSL2 configuration, common pitfalls, and your first containerized app.",
        date: "2024-02-08",
    },
];
