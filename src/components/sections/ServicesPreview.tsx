import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
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
          <Link href="/services" className="body-sm hide-mobile">
            See full details →
          </Link>
        </div>

        <div className="grid grid--3">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              bestForVersion="V2"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
