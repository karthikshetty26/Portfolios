import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <Section id="top" variant="hero">
      <Container>
        <div className="max-w-prose">
          <p className="eyebrow">Full-Stack Developer · Freelancer · Content Creator</p>

          <h1 className="heading-hero">
            I like <span className="text-green">building</span> things that are simple, fast, and <span className="text-green">actually convert.</span>
          </h1>

          <p className="body-text mt-xl" style={{ maxWidth: "560px" }}>
            9-5 developer. Freelance on the side. Sharing what I learn along the way.
          </p>

          <div className="flex-wrap mt-2xl">
            <Button href="/projects" size="lg">View My Work</Button>
            <Button href="/contact" variant="ghost" size="lg">Hire Me</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
