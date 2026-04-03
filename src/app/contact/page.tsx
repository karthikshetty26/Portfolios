import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Karthik Shetty — for freelance web development projects, collaborations, or just to say hello.",
};

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/karthikshetty26/", desc: "Connect professionally" },
  { label: "GitHub", href: "https://github.com/karthikshetty26", desc: "View my open source work" },
  { label: "Twitter / X", href: "https://x.com/KarthikShettyyy", desc: "Follow my dev journey" },
  { label: "Hashnode", href: "https://karthikshetty.hashnode.dev/", desc: "Read my technical articles" },
];

export default function ContactPage() {
  return (
    <>
      <Section variant="page-header">
        <Container>
          <div className="max-w-narrow">
            <p className="eyebrow">Get in touch</p>
            <h1 className="heading-page">Let&apos;s talk.</h1>
            <p className="body-text mt-base">
              Have a project in mind, a question, or just want to connect? The
              best way to reach me is by email — I respond to every message.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="content">
        <Container>
          <div className="contact-grid">
            {/* Left: email + socials */}
            <div>
              <div className="mb-2xl">
                <p className="eyebrow">Email</p>
                <a
                  href="mailto:karthikkanyana26@gmail.com"
                  className="heading-card"
                  style={{ transition: "opacity var(--transition-fast)" }}
                >
                  karthikkanyana26@gmail.com
                </a>
              </div>

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
            </div>

            {/* Right: contact form */}
            <div>
              <p className="eyebrow">Send a message</p>
              <form
                action="mailto:karthikkanyana26@gmail.com"
                method="get"
                encType="text/plain"
                aria-label="Contact form"
              >
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" required className="form-input" />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" required className="form-input" />
                </div>

                <div className="form-group">
                  <label htmlFor="budget" className="form-label">
                    Budget <span className="text-muted">(optional)</span>
                  </label>
                  <select id="budget" name="budget" className="form-input">
                    <option value="">Select a range</option>
                    <option value="&lt;500">Under $500</option>
                    <option value="500-1500">$500 – $1,500</option>
                    <option value="1500-5000">$1,500 – $5,000</option>
                    <option value="5000+">$5,000+</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" name="body" rows={5} placeholder="Tell me about your project..." required className="form-input form-textarea" />
                </div>

                <button type="submit" className="btn btn--primary btn--lg btn--full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
