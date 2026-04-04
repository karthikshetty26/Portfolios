"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const [isDevMode, setIsDevMode] = useState(false);

  useEffect(() => {
    // Log error for monitoring
    console.error("Error:", error);
    
    // Check if we're in development
    setIsDevMode(process.env.NODE_ENV === "development");
  }, [error]);

  return (
    <Section variant="page-header">
      <Container>
        <div className="max-w-prose mx-auto text-center">
          {/* Status indicator */}
          <div className="mb-lg">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "3.5rem",
                height: "3.5rem",
                borderRadius: "var(--radius-lg)",
                backgroundColor: "var(--overlay)",
                marginBottom: "var(--space-lg)",
              }}
            >
              <span style={{ fontSize: "1.75rem" }}>⚠️</span>
            </div>
          </div>

          {/* Eyebrow */}
          <div className="eyebrow">Something unexpected happened</div>

          {/* Heading */}
          <h1 className="heading-page mb-lg">Page error</h1>

          {/* Description */}
          <p className="body-text mb-3xl">
            We encountered an issue loading this page. Try refreshing, or head back home to continue exploring.
          </p>

          {/* Dev-only error details */}
          {isDevMode && error?.message && (
            <div
              style={{
                marginBottom: "var(--space-3xl)",
                padding: "var(--space-lg)",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--overlay)",
                border: "1px solid var(--color-border)",
                textAlign: "left",
              }}
            >
              <p
                style={{
                  fontSize: "var(--font-xs)",
                  fontWeight: "var(--font-weight-semibold)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--foreground-muted)",
                  marginBottom: "var(--space-sm)",
                }}
              >
                Error details (dev only)
              </p>
              <code
                style={{
                  fontSize: "var(--font-xs)",
                  color: "var(--foreground-muted)",
                  wordBreak: "break-word",
                  fontFamily: "monospace",
                }}
              >
                {error.message}
              </code>
              {error.digest && (
                <div style={{ marginTop: "var(--space-sm)" }}>
                  <p
                    style={{
                      fontSize: "var(--font-xs)",
                      color: "var(--foreground-muted)",
                    }}
                  >
                    Digest: {error.digest}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* CTAs */}
          <div className="flex-wrap" style={{ justifyContent: "center" }}>
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
