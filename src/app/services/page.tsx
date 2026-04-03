import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Freelance web development services by Karthik Shetty — business websites, redesigns, and custom web applications.",
};

export default function ServicesPage() {
  return (
    <>
      <Section variant="page-header">
        <Container>
          <div className="max-w-prose">
            <p className="eyebrow">Freelance Services</p>
            <h1 className="heading-page">What I build for clients</h1>
            <p className="body-text mt-base">
              I take on a limited number of freelance projects. Focused on quality over volume. If you have something specific in mind, let&apos;s talk.
            </p>
          </div>
        </Container>
      </Section>

      {/* Target audience */}
      <div className="border-y mb-xl" style={{ padding: "var(--space-xl) 0" }}>
        <Container>
          <p className="body-sm">
            <strong className="label">Best for:</strong>{" "}
            Startups, small businesses, founders, and professional teams who need reliable, production-ready work done right the first time.
          </p>
        </Container>
      </div>

      {/* Services */}
      <Section variant="content">
        <Container>
          <div className="grid grid--3">
            {services.map((service, i) => (
              <Card key={service.title} className="service-card">
                <span className="service-number">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <h2 className="heading-card" style={{ fontSize: "var(--font-lg)" }}>{service.title}</h2>
                  <p className="body-sm mt-sm">{service.description}</p>
                </div>

                <div style={{ flex: 1 }}>
                  <p className="eyebrow" style={{ fontSize: "var(--font-xs)" }}>Includes</p>
                  <ul className="includes-list" role="list">
                    {service.includes.map((item) => (
                      <li key={item} className="includes-list-item">
                        <span className="includes-list-check" aria-hidden="true">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-best-for">
                  <p className="eyebrow" style={{ marginBottom: "var(--space-xs)", fontSize: "var(--font-xs)" }}>Best for</p>
                  <p style={{ fontSize: "var(--font-xs)", color: "var(--foreground)" }}>{service.bestFor}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-3xl" style={{ textAlign: "center" }}>
            <h2 className="heading-section">Ready to start a project?</h2>
            <p className="body-sm mt-md mb-xl">
              Tell me what you&apos;re building and let&apos;s see if we&apos;re a good fit.
            </p>
            <Button href="/contact" size="lg">Start a Project</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
