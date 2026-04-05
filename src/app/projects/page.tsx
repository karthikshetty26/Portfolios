import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "View all projects by Karthik Shetty — from hotel management systems and banking portals to AI-powered tools.",
};

export default function ProjectsPage() {
  return (
    <>
      <Section variant="page-header">
        <Container>
          <div className="max-w-prose">
            <p className="eyebrow">Work</p>
            <h1 className="heading-page">Project Log</h1>
            <p className="body-text mt-base">
              Things I&apos;ve built at work, on my own, and through open source. Mostly real-world stuff, and a few just because I wanted to.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="content">
        <Container>
          <div className="grid grid--2">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="card-link-wrapper">
                <ProjectCard project={project} featured={project.featured} showFeaturedTag />
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
