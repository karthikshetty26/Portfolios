import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <Section>
      <Container>
        <div className="flex-between mb-2xl">
          <div>
            <p className="eyebrow">What I offer</p>
            <h2 className="heading-section">Services</h2>
          </div>
          <Link href="/services" className="body-sm hide-mobile">See full details →</Link>
        </div>

        <div className="grid grid--3">
          {services.map((service) => (
            <Card key={service.title}>
              <h3 className="heading-card">{service.title}</h3>
              <p className="body-sm mt-sm">{service.description}</p>
              <p className="body-sm mt-lg border-top" style={{ paddingTop: "var(--space-base)", fontSize: "var(--font-xs)", marginTop: "auto" }}>
                <strong className="label">Best for:</strong> {service.bestFor}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
