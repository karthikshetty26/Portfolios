import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
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
              <ServiceCard
                key={service.title}
                service={service}
                index={i}
                showIncludes={true}
                headingLevel="h2"
                bestForVersion="V1"
              />
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
