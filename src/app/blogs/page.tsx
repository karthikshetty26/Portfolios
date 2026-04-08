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
            <h1 className="heading-page">Notes on <span className="text-green">building</span></h1>
            <p className="body-text mt-base">
              I write to make sense of what I build, turning experience into simple, practical insights that are easy to apply in real projects.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="content">
        <Container>
          <div>
            <div className="grid grid--2">
              {blogs.map((blog) => (
                <a
                  key={blog.slug}
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit", display: "contents" }}
                >
                  <Card>
                    <time dateTime={blog.date} className="text-muted" style={{ fontSize: "var(--font-xs)", fontWeight: "var(--font-weight-medium)" }}>
                      {blog.date_formatted} | {blog.platform}
                    </time>
                    <h2 className="heading-card mt-sm">{blog.title}</h2>
                    <p className="body-sm mt-sm">{blog.description}</p>
                  </Card>
                </a>
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
