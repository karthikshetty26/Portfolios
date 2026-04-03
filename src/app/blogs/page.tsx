import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { blogs } from "@/data/blogs";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical articles by Karthik Shetty — covering JavaScript, Java, Docker, and practical developer topics.",
};

export default function BlogsPage() {
  return (
    <>
      <Section variant="page-header">
        <Container>
          <div className="max-w-prose">
            <p className="eyebrow">Writing</p>
            <h1 className="heading-page">Articles</h1>
            <p className="body-text mt-base">
              Technical writing on topics I&apos;ve explored in practice — from
              language fundamentals to tooling and workflow. Published on Hashnode and Medium.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="content">
        <Container>
          <div className="max-w-prose">
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-base)" }}>
              {blogs.map((blog) => (
                <Card key={blog.slug}>
                  <time dateTime={blog.date} className="text-muted" style={{ fontSize: "var(--font-xs)", fontWeight: "var(--font-weight-medium)" }}>
                    {formatDate(blog.date)}
                  </time>
                  <h2 className="heading-card mt-sm">{blog.title}</h2>
                  <p className="body-sm mt-sm">{blog.description}</p>
                </Card>
              ))}
            </div>

            {/* External links */}
            <div className="border-top mt-2xl" style={{ paddingTop: "var(--space-2xl)" }}>
              <p className="body-sm mb-lg">Read full articles on:</p>
              <div className="flex-wrap">
                <a href="https://karthikshetty.hashnode.dev/" target="_blank" rel="noopener noreferrer" className="link-btn">
                  Hashnode →
                </a>
                <a href="https://medium.com/@Karthikshetty26" target="_blank" rel="noopener noreferrer" className="link-btn">
                  Medium →
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
