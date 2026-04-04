import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or has been moved.",
};

export default function NotFound() {
  return (
    <Section variant="page-header">
      <Container>
        <div className="max-w-prose mx-auto text-center">
          {/* Eyebrow */}
          <div className="eyebrow">404</div>

          {/* Heading */}
          <h1 className="heading-page mb-lg">Page not found</h1>

          {/* Description */}
          <p className="body-text mb-3xl">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          {/* CTA */}
          <div className="mt-base">
            <Button href="/" variant="primary" size="md">
              Go home
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
