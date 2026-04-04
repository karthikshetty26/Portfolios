"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Optionally log error to monitoring service
    console.error("Error:", error);
  }, [error]);

  return (
    <Section variant="page-header">
      <Container>
        <div className="max-w-prose mx-auto text-center">
          {/* Eyebrow */}
          <div className="eyebrow">Something unexpected happened</div>

          {/* Heading */}
          <h1 className="heading-page mb-lg">Unexpected error</h1>

          {/* Description */}
          <p className="body-text mb-3xl">
            We encountered an issue loading this page. Try refreshing, or head back home to continue exploring.
          </p>

          {/* CTAs */}
          <div className="flex-wrap mt-base">
            <Button onClick={reset} variant="primary" size="md">
              Try again
            </Button>
            <Button href="/" variant="ghost" size="md">
              Go home
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
