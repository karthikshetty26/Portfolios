import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function Intro() {
  return (
    <Section>
      <Container>
        <div className="max-w-prose">
          <p className="eyebrow">Who I am</p>
          <h2 className="heading-section">Developer by day, builder by night.</h2>
          <p className="body-text mt-base">
            I&apos;m a full-stack developer with a full-time engineering role and a
            freelance practice running alongside it. I work primarily with
            Angular, React, Next.js, and Java Spring Boot — building
            production-grade apps that are fast, maintainable, and built to last.
          </p>
          <p className="body-text mt-md">
            Outside of client work, I write technical articles and create
            content for developers who are learning and growing — because
            sharing what I know is as important to me as the work itself.
          </p>
        </div>
      </Container>
    </Section>
  );
}
