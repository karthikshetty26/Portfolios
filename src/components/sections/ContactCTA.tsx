import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function ContactCTA() {
  return (
    <Section>
      <Container>
        <div className="mt-2xl mb-2xl" style={{ textAlign: "center" }}>
          <p className="eyebrow">Let&apos;s work together</p>
          <h2 className="heading-section">
            Have a project in mind?{" "}
            <span className="text-green">Let&apos;s talk.</span>
          </h2>
          <p className="body-text mt-base" style={{ maxWidth: "480px", margin: "var(--space-base) auto 0" }}>
            Whether you need a business website, a redesign, or a custom web
            app, I&apos;m open to new projects and conversations.
          </p>
          <div className="flex-wrap mt-2xl" style={{ justifyContent: "center" }}>
            <Button href="/contact" size="lg">Start a Conversation</Button>
            <Button href="/projects" variant="ghost" size="lg">See My Work First</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
