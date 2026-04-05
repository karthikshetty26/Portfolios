"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type Item = {
  title: string;
  key: string;
  desc: string;
  status: "YES" | "NO" | "MAYBE";
  action: () => void;
  label: string;
};

export default function DevErrorPage() {
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [triggerRenderError, setTriggerRenderError] = useState(false);

  // Render error
  if (triggerRenderError) {
    throw new Error("Render Error: This error is thrown during component render");
  }

  const triggerRender = () => setTriggerRenderError(true);

  const handleEventError = () => {
    throw new Error("Event Handler Error");
  };

  const handleAsyncError = async () => {
    try {
      await new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Async Error")), 500)
      );
    } catch (error) {
      console.error(error);
      alert((error as Error).message);
    }
  };

  // ✅ Actually escapes React
  const handleUncaughtAsyncError = () => {
    setTimeout(() => {
      throw new Error("Uncaught Async Error (outside React)");
    }, 0);
  };

  const handleFetchError = async () => {
    try {
      setFetchError(null);
      await fetch("https://invalid-api-endpoint-12345.com/data");
      throw new Error("Forced fetch failure");
    } catch (error) {
      setFetchError((error as Error).message);
    }
  };

  // ✅ Truly uncaught
  const handleUncaughtFetchError = async () => {
    await fetch("https://invalid-api-endpoint-12345.com/data");
    throw new Error("Uncaught fetch failure");
  };

  const items: Item[] = [
    {
      title: "Render Error",
      key: "render",
      desc: "Throws during render. Caught by error.tsx.",
      status: "YES",
      action: triggerRender,
      label: "Trigger",
    },
    {
      title: "Event Handler Error",
      key: "event",
      desc: "Thrown in onClick. Not caught by error.tsx.",
      status: "NO",
      action: handleEventError,
      label: "Trigger",
    },
    {
      title: "Caught Async Error",
      key: "async-caught",
      desc: "Handled with try/catch.",
      status: "NO",
      action: handleAsyncError,
      label: "Trigger",
    },
    {
      title: "Uncaught Async Error",
      key: "async-uncaught",
      desc: "Escapes React boundary.",
      status: "NO",
      action: handleUncaughtAsyncError,
      label: "Trigger",
    },
    {
      title: "Fetch Error (Caught)",
      key: "fetch-caught",
      desc: "Handled fetch failure.",
      status: "NO",
      action: handleFetchError,
      label: "Trigger",
    },
    {
      title: "Uncaught Fetch Error",
      key: "fetch-uncaught",
      desc: "Unhandled fetch error.",
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
            <h1 className="heading-page">Error <span className="text-green">playground</span></h1>
            <p className="body-text mt-base">
              Test how different errors behave with error boundaries.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="content">
        <Container>
          <div className="grid grid--2">
            {items.map((item) => (
              <Card key={item.key}>
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