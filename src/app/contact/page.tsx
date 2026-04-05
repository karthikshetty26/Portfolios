import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Karthik Shetty — for freelance web development projects, collaborations, or just to say hello.",
};

const SOCIAL_LINKS = [
  { label: "Twitter / X", href: "https://x.com/KarthikShettyyy", desc: "Follow my dev journey" },
  { label: "GitHub", href: "https://github.com/karthikshetty26", desc: "View my open source work" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/karthikshetty26/", desc: "Take a look at my LinkedIn profile" },
];

export default function ContactPage() {
  return (
    <>
      <Section variant="page-header">
        <Container>
          <div className="max-w-narrow">
            <p className="eyebrow">Get in touch</p>
            <h1 className="heading-page">Let&apos;s <span className="text-green">talk</span></h1>
            <p className="body-text mt-base">
              Have a project in mind, a question, or just want to connect? The best way to reach me is on <a
                href="https://www.linkedin.com/in/karthikshetty26/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >LinkedIn</a>. I’m fairly active there and usually respond quickly.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="content">
        <Container>
          <div className="contact-grid">
            {/* Left: socials */}
            <div>
              <p className="eyebrow">Elsewhere</p>
              <ul role="list" style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
                {SOCIAL_LINKS.map(({ label, href, desc }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="social-link-card">
                      <div>
                        <p className="label">{label}</p>
                        <p style={{ fontSize: "var(--font-xs)", color: "var(--foreground-muted)" }}>{desc}</p>
                      </div>
                      <span className="social-link-arrow">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: contact */}
            <div id="contact-modern">
              <p className="eyebrow">Start a conversation</p>

              <p className="body-text mt-base">
                The easiest way to reach me is on <a
                  href="https://www.linkedin.com/in/karthikshetty26/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >LinkedIn</a>. If you prefer email, that works too.
              </p>

              <div style={{ marginTop: "var(--space-xl)", display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
                <a
                  href="https://www.linkedin.com/in/karthikshetty26/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--text-left btn--primary btn--lg"
                >
                  Message me on LinkedIn
                </a>

                <a
                  href="mailto:karthikkanyana26@gmail.com"
                  className="btn btn--text-left btn--ghost btn--lg"
                >
                  Send an Email
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
