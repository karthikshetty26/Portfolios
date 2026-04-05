import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Section variant="overlay">
      <Container>
        <div className="flex-between mb-2xl">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2 className="heading-section">Featured Projects</h2>
          </div>
          <Link href="/projects" className="body-sm hide-mobile">View all →</Link>
        </div>

        <div className="grid grid--2">
          {featured.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="card-link-wrapper">
              <ProjectCard project={project} featured={project.featured} />
            </Link>
          ))}
        </div>

        <div className="show-mobile mt-2xl" style={{ textAlign: "center" }}>
          <Link href="/projects" className="body-sm">View all projects →</Link>
        </div>
      </Container>
    </Section>
  );
}
