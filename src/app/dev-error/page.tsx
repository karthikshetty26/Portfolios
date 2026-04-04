"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function DevErrorPage() {
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [triggerRenderError, setTriggerRenderError] = useState(false);

  if (triggerRenderError) {
    throw new Error("Render Error: This error is thrown during component render");
  }

  const handleEventError = () => {
    throw new Error("Event Handler Error: This error is thrown in an onClick handler");
  };

  const handleAsyncError = async () => {
    try {
      await new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Async Error: Simulated async failure")), 500)
      );
    } catch (error) {
      console.error(error);
      alert((error as Error).message);
    }
  };

  const handleUncaughtAsyncError = async () => {
    await new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Uncaught Async Error")), 500)
    );
  };

  const handleFetchError = async () => {
    try {
      setFetchError(null);
      const res = await fetch("https://invalid-api-endpoint-12345.com/data");
      if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
    } catch (error) {
      setFetchError((error as Error).message);
    }
  };

  const handleUncaughtFetchError = async () => {
    const res = await fetch("https://invalid-api-endpoint-12345.com/data");
    await res.json();
  };

  const items = [
    {
      title: "Render Error",
      key: "render",
      desc: "Throws during render. Caught by error.tsx.",
      status: "YES",
      action: () => setTriggerRenderError(true),
      label: "Trigger",
    },
    {
      title: "Event Handler Error",
      key: "event-handler",
      desc: "Thrown inside onClick. Not caught by error.tsx.",
      status: "NO",
      action: handleEventError,
      label: "Trigger",
    },
    {
      title: "Caught Async Error",
      key: "caught-async",
      desc: "Handled with try/catch. Won’t hit error.tsx.",
      status: "NO",
      action: handleAsyncError,
      label: "Trigger",
    },
    {
      title: "Uncaught Async Error",
      key: "uncaught-async",
      desc: "Unhandled promise. Might be caught depending on React.",
      status: "MAYBE",
      action: handleUncaughtAsyncError,
      label: "Trigger",
    },
    {
      title: "Fetch Error (Caught)",
      key: "fetch-caught",
      desc: "Handled fetch failure. Shows inline error.",
      status: "NO",
      action: handleFetchError,
      label: "Trigger",
    },
    {
      title: "Uncaught Fetch Error",
      key: "uncaught-fetch",
      desc: "Unhandled fetch → console error.",
      status: "NO",
      action: handleUncaughtFetchError,
      label: "Trigger",
    },
  ];

  return (
    <>
      <Section variant="page-header">
        <Container>
          <div className="max-w-prose">
            <p className="eyebrow">Dev</p>
            <h1 className="heading-page">Error Playground</h1>
            <p className="body-text mt-base">
              Controlled scenarios to test how error boundaries behave in real conditions.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="content">
        <Container>
          <div className="grid grid--2">
            {items.map((item) => (
              <Card key={item.title}>
                <p className="body-sm text-muted mb-sm">
                  Caught by error.tsx: <strong>{item.status}</strong>
                </p>

                <h2 className="heading-card">{item.title}</h2>
                <p className="body-sm mt-sm">{item.desc}</p>

                <div className="border-top mt-base pt-base">
                  <Button onClick={item.action} size="sm" variant="primary">
                    {item.label}
                  </Button>
                </div>

                {item.key === "fetch-caught" && fetchError && (
                  <p className="body-sm mt-base text-red">
                    {fetchError}
                  </p>
                )}
              </Card>
            ))}
          </div>

          {/* Summary Card */}
          <div className="mt-3xl">
            <Card>
              <h3 className="heading-sm mb-md">What error.tsx Actually Catches</h3>
              <ul className="body-sm space-y-xs">
                <li>✅ <strong>Render errors</strong> - Errors thrown during component render</li>
                <li>✅ <strong>Lifecycle errors</strong> - Errors in useEffect, constructors, etc.</li>
                <li>❌ <strong>Event handler errors</strong> - Errors in onClick, onChange, etc.</li>
                <li>❌ <strong>Async errors (caught)</strong> - Errors handled with try-catch</li>
                <li>⚠️ <strong>Unhandled promise rejections</strong> - Depends on React version</li>
                <li>❌ <strong>Server-side errors</strong> - Handled by server error boundaries</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}