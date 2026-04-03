import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
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
                <Card link>
                  {project.featured && (
                    <span className="tag tag--featured mb-sm" style={{ display: "inline-block" }}>Featured</span>
                  )}

                  <div className="tag-list mb-base">
                    {project.tech.slice(0, 5).map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>

                  <h2 className="heading-card">{project.title}</h2>
                  <p className="body-sm mt-sm line-clamp-3">{project.description}</p>

                  <div className="border-top mt-lg" style={{ paddingTop: "var(--space-base)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <p className="text-green line-clamp-1" style={{ fontSize: "var(--font-xs)", flex: 1, marginRight: "var(--space-base)" }}>
                      {project.outcome.split(".")[0]}.
                    </p>
                    <span className="body-sm" style={{ flexShrink: 0, fontSize: "var(--font-xs)" }}>View →</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
