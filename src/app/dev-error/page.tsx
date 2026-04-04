"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function DevErrorPage() {
  const [fetchError, setFetchError] = useState<string | null>(null);

  // 1. RENDER ERROR - Throws during component render
  const [triggerRenderError, setTriggerRenderError] = useState(false);
  if (triggerRenderError) {
    throw new Error("Render Error: This error is thrown during component render");
  }

  // 2. EVENT HANDLER ERROR - Throws in onClick handler
  const handleEventError = () => {
    throw new Error("Event Handler Error: This error is thrown in an onClick handler");
  };

  // 3. ASYNC/SERVER ERROR - Simulates async operation failure
  const handleAsyncError = async () => {
    try {
      // Simulate an async operation that fails
      await new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Async Error: Simulated async operation failure")), 500)
      );
    } catch (error) {
      // This error is caught by the try-catch, so it won't trigger error.tsx
      console.error("Caught async error:", error);
      alert(`Caught: ${(error as Error).message}`);
    }
  };

  // 4. UNCAUGHT ASYNC ERROR - Async error that escapes try-catch
  const handleUncaughtAsyncError = async () => {
    // This will be caught by the error boundary if it's an unhandled promise rejection
    await new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Uncaught Async Error: Unhandled promise rejection")), 500)
    );
  };

  // 5. FETCH ERROR - Simulates failed API call
  const handleFetchError = async () => {
    try {
      setFetchError(null);
      const response = await fetch("https://invalid-api-endpoint-12345.com/data");
      if (!response.ok) {
        throw new Error(`Fetch failed with status ${response.status}`);
      }
      const data = await response.json();
    } catch (error) {
      setFetchError((error as Error).message);
    }
  };

  // 6. UNCAUGHT FETCH ERROR - Fetch error that escapes error boundary
  const handleUncaughtFetchError = async () => {
    const response = await fetch("https://invalid-api-endpoint-12345.com/data");
    const data = await response.json();
  };

  return (
    <Section variant="page-header">
      <Container>
        <div className="max-w-prose mx-auto">
          <h1 className="heading-page mb-lg">Error Testing Playground</h1>
          <p className="body-text mb-3xl">
            Use these buttons to test different error scenarios and see how error.tsx handles them.
          </p>

          {/* RENDER ERROR */}
          <div className="mb-3xl">
            <h2 className="heading-sm mb-md">1. Render Error</h2>
            <p className="body-text mb-md text-sm">
              <strong>Caught by error.tsx:</strong> ✅ YES
            </p>
            <p className="body-text mb-md text-sm">
              Throws during component render. Error boundaries catch these automatically.
            </p>
            <Button
              onClick={() => setTriggerRenderError(true)}
              variant="primary"
              size="md"
            >
              Trigger Render Error
            </Button>
          </div>

          {/* EVENT HANDLER ERROR */}
          <div className="mb-3xl">
            <h2 className="heading-sm mb-md">2. Event Handler Error</h2>
            <p className="body-text mb-md text-sm">
              <strong>Caught by error.tsx:</strong> ❌ NO
            </p>
            <p className="body-text mb-md text-sm">
              Throws in onClick handler. Error boundaries do NOT catch these. You&apos;ll see it in console.
            </p>
            <Button
              onClick={handleEventError}
              variant="primary"
              size="md"
            >
              Trigger Event Handler Error
            </Button>
          </div>

          {/* CAUGHT ASYNC ERROR */}
          <div className="mb-3xl">
            <h2 className="heading-sm mb-md">3. Caught Async Error</h2>
            <p className="body-text mb-md text-sm">
              <strong>Caught by error.tsx:</strong> ❌ NO
            </p>
            <p className="body-text mb-md text-sm">
              Async error that&apos;s caught by try-catch. Shows alert instead of triggering error boundary.
            </p>
            <Button
              onClick={handleAsyncError}
              variant="primary"
              size="md"
            >
              Trigger Caught Async Error
            </Button>
          </div>

          {/* UNCAUGHT ASYNC ERROR */}
          <div className="mb-3xl">
            <h2 className="heading-sm mb-md">4. Uncaught Async Error</h2>
            <p className="body-text mb-md text-sm">
              <strong>Caught by error.tsx:</strong> ⚠️ MAYBE (depends on React version)
            </p>
            <p className="body-text mb-md text-sm">
              Unhandled promise rejection. Modern React 19 may catch this, older versions won&apos;t.
            </p>
            <Button
              onClick={handleUncaughtAsyncError}
              variant="primary"
              size="md"
            >
              Trigger Uncaught Async Error
            </Button>
          </div>

          {/* FETCH ERROR (CAUGHT) */}
          <div className="mb-3xl">
            <h2 className="heading-sm mb-md">5. Fetch Error (Caught)</h2>
            <p className="body-text mb-md text-sm">
              <strong>Caught by error.tsx:</strong> ❌ NO
            </p>
            <p className="body-text mb-md text-sm">
              Fetch error handled with try-catch. Shows error message in UI.
            </p>
            <Button
              onClick={handleFetchError}
              variant="primary"
              size="md"
            >
              Trigger Fetch Error (Caught)
            </Button>
            {fetchError && (
              <div style={{ marginTop: "1rem", padding: "1rem", backgroundColor: "#fee", borderRadius: "4px" }}>
                <strong>Error:</strong> {fetchError}
              </div>
            )}
          </div>

          {/* UNCAUGHT FETCH ERROR */}
          <div className="mb-3xl">
            <h2 className="heading-sm mb-md">6. Uncaught Fetch Error</h2>
            <p className="body-text mb-md text-sm">
              <strong>Caught by error.tsx:</strong> ❌ NO (in most cases)
            </p>
            <p className="body-text mb-md text-sm">
              Unhandled fetch error. Will show in console as unhandled promise rejection.
            </p>
            <Button
              onClick={handleUncaughtFetchError}
              variant="primary"
              size="md"
            >
              Trigger Uncaught Fetch Error
            </Button>
          </div>

          {/* SUMMARY */}
          <div style={{ marginTop: "3rem", padding: "1.5rem", backgroundColor: "#f0f0f0", borderRadius: "8px" }}>
            <h3 className="heading-sm mb-md">Summary: What error.tsx Catches</h3>
            <ul style={{ marginLeft: "1.5rem", lineHeight: "1.8" }}>
              <li>✅ <strong>Render errors</strong> - Errors thrown during component render</li>
              <li>✅ <strong>Lifecycle errors</strong> - Errors in useEffect, constructors, etc.</li>
              <li>❌ <strong>Event handler errors</strong> - Errors in onClick, onChange, etc.</li>
              <li>❌ <strong>Async errors (caught)</strong> - Errors handled with try-catch</li>
              <li>⚠️ <strong>Unhandled promise rejections</strong> - Depends on React version</li>
              <li>❌ <strong>Server-side errors</strong> - Handled by server error boundaries</li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}