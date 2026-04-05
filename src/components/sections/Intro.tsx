import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function Intro() {
  return (
    <Section>
      <Container>
        <div className="max-w-prose">
          <p className="eyebrow">Who I am</p>
          <h2 className="heading-section">Developer by day, <span className="text-green">builder</span> by night</h2>
          <p className="body-text mt-base">
            I&apos;m a full-stack developer with a full-time engineering role and a freelance practice running alongside it. Most of my work is around Angular, React, Next.js, and Java Spring Boot. building apps that are fast, stable, and easy to maintain.
          </p>
          <p className="body-text mt-md">
            Outside of that, I spend time writing and sharing what I learn. It helps me think better, and hopefully helps others who are figuring things out along the way.
          </p>
        </div>
      </Container>
    </Section>
  );
}
