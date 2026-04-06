import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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

          <h1 className="heading-page">{project.title}</h1>

          <div className="project-meta">
            <span>{project.year}</span>
            {project.cat.map((entry) => (
              <span key={entry.url}>
                {" | "}
                <a
                  key={entry.url}
                  href={entry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-meta-link"
                >
                  {entry.name}
                </a>
              </span>
            ))}
          </div>

          <div className="tag-list mt-md">
            {project.featured && (
              <span className="tag tag--featured">Featured Project</span>
            )}
            {project.tech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          <p className="body-text mt-2xl max-w-content">{project.description}</p>
          <hr className="divider mt-2xl max-w-content" />
        </Container>
      </Section >

      <Section variant="content">
        <Container>
          <div className="max-w-content content-space">
            {/* Images */}
            {project.images && project.images.length > 0 && (
              <>
                <div>
                  {project.images.map((src, index) => (
                    <Image
                      key={src}
                      src={src}
                      alt={`${project.title} - image ${index + 1}`}
                      width={1200}
                      height={675}
                      style={{ width: "100%", height: "auto", ...(index > 0 ? { marginTop: "var(--space-base)" } : {}) }}
                    />
                  ))}
                </div>
                <hr className="divider" />
              </>
            )}

            {/* Overview */}
            {project.overview && (
              <>
                <div>
                  <h2 className="heading-section" style={{ fontSize: "var(--font-lg)" }}>Overview</h2>
                  <p className="body-text mt-md">{project.overview}</p>
                </div>
                <hr className="divider" />
              </>
            )}

            {/* Problem */}
            <div>
              <h2 className="heading-section" style={{ fontSize: "var(--font-lg)" }}>The Problem</h2>
              <p className="body-text mt-md">{project.problem}</p>
            </div>

            <hr className="divider" />

            {/* Challenges */}
            {project.challenges && (
              <>
                <div>
                  <h2 className="heading-section" style={{ fontSize: "var(--font-lg)" }}>Challenges</h2>
                  <p className="body-text mt-md">{project.challenges}</p>
                </div>
                <hr className="divider" />
              </>
            )}

            {/* Approach */}
            <div>
              <h2 className="heading-section" style={{ fontSize: "var(--font-lg)" }}>Approach</h2>
              <p className="body-text mt-md">{project.approach}</p>
            </div>

            <hr className="divider" />

            {/* Solution Breakdown */}
            {project.solutionPoints && project.solutionPoints.length > 0 && (
              <>
                <div>
                  <h2 className="heading-section" style={{ fontSize: "var(--font-lg)" }}>Solution Breakdown</h2>
                  <ol style={{ listStyle: "none", padding: 0, marginTop: "var(--space-md)" }}>
                    {project.solutionPoints.map((point, index) => (
                      <li key={index} className="body-text" style={{ marginTop: index > 0 ? "var(--space-sm)" : undefined }}>
                        <span style={{ color: "var(--green-primary)" }}>{index + 1}. </span>
                        {point}
                      </li>
                    ))}
                  </ol>
                </div>
                <hr className="divider" />
              </>
            )}

            {/* My Role */}
            <div>
              <h2 className="heading-section" style={{ fontSize: "var(--font-lg)" }}>My Role</h2>
              <p className="body-text mt-md">{project.myrole}</p>
            </div>
            <hr className="divider" />

            {/* Key Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <>
                <div>
                  <h2 className="heading-section" style={{ fontSize: "var(--font-lg)" }}>Key Highlights</h2>
                  <ul style={{ listStyle: "none", padding: 0, marginTop: "var(--space-md)" }}>
                    {project.highlights.slice(0, 4).map((highlight, index) => (
                      <li key={index} className="body-text" style={{ marginTop: index > 0 ? "var(--space-sm)" : undefined }}>
                        <span style={{ color: "var(--green-primary)" }}>· </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <hr className="divider" />
              </>
            )}

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


            {project.cat.length > 0 && (
              <>
                {project.cat.map((entry) => (
                  <Button key={entry.url} variant="ghost" href={entry.url} external>
                    {entry.name}
                  </Button>
                ))}
              </>
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}
