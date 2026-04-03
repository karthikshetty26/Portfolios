import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return { title: project.title, description: project.description };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Section variant="page-header">
        <Container>
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <Link href="/projects" className="breadcrumb-link">Projects</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current" aria-current="page">{project.title}</span>
          </nav>

          {project.featured && (
            <span className="tag tag--featured mb-lg" style={{ display: "inline-block" }}>Featured Project</span>
          )}

          <h1 className="heading-page">{project.title}</h1>
          <p className="body-text mt-base max-w-prose">{project.description}</p>

          <div className="tag-list mt-xl">
            {project.tech.map((t) => (
              <span key={t} className="tag tag--outlined">{t}</span>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="content">
        <Container>
          <div className="max-w-prose content-space">
            {/* Problem */}
            <div>
              <h2 className="heading-section" style={{ fontSize: "var(--font-lg)" }}>The Problem</h2>
              <p className="body-text mt-md">{project.problem}</p>
            </div>

            <hr className="divider" />

            {/* Approach */}
            <div>
              <h2 className="heading-section" style={{ fontSize: "var(--font-lg)" }}>My Approach</h2>
              <p className="body-text mt-md">{project.approach}</p>
            </div>

            <hr className="divider" />

            {/* Outcome */}
            <div className="outcome-box">
              <h2 className="text-green" style={{ fontFamily: "var(--font-display)", fontSize: "var(--font-md)", fontWeight: "var(--font-weight-bold)" }}>
                Outcome
              </h2>
              <p className="body-text mt-sm" style={{ color: "var(--foreground)" }}>{project.outcome}</p>
            </div>
          </div>

          <div className="flex-wrap mt-3xl">
            <Button href="/projects" variant="ghost">← All Projects</Button>
            <Button href="/contact">Start a Project</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
