import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
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
              <Card link>
                <div className="tag-list mb-base">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                <h3 className="heading-card">{project.title}</h3>
                <p className="body-sm mt-sm line-clamp-3">{project.description}</p>

                <p className="text-green mt-base" style={{ fontSize: "var(--font-xs)", fontWeight: "var(--font-weight-medium)" }}>
                  {project.outcome.split(".")[0]}.
                </p>

                <p className="body-sm mt-sm">View case study →</p>
              </Card>
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
