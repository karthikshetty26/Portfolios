import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { getProfileStats } from "@/lib/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Karthik Shetty — full-stack developer, freelancer, and content creator.",
};

const HOW_I_WORK = [
  "Start by figuring out what actually needs to be built, not everything needs a complex solution.",
  "Keep things simple, because most problems don’t need clever code, just clear thinking.",
  "Clear communication early saves a lot of back-and-forth later.",
  "It’s easy to build something slow and bloated, avoiding that takes a bit more care.",
  "Build it, ship it, then improve it based on what actually matters.",
];

export default function AboutPage() {
  const stats = getProfileStats();

  return (
    <>
      {/* Intro */}
      <Section variant="page-header">
        <Container>
          <div className="max-w-prose">
            <p className="eyebrow">About</p>
            <h1 className="heading-page">A developer who ships.</h1>
            <p className="body-text mt-lg">
              I&apos;m Karthik Shetty, a full-stack developer based in India. I work a full-time engineering role building real-world applications, and I also take on freelance projects on the side.
            </p>
            <p className="body-text mt-md">
              Over the past {stats.experience} years, I&apos;ve worked across different systems, from internal tools to larger platforms, which has shaped how I think about performance, structure, and usability.
            </p>
          </div>
        </Container>
      </Section>

      {/* What I do */}
      <Section variant="overlay" className="section--tight">
        <Container>
          <h2 className="heading-section">What I do</h2>
          <div className="grid grid--2 grid--gap-lg mt-lg">
            {[
              { title: "Full-Stack Development", desc: "I work across frontend and backend, building applications that are fast, reliable, and easy to maintain." },
              { title: "Freelance Work", desc: "I help businesses build or improve their web presence, from simple websites to more custom applications." },
              { title: "Technical Content", desc: "I write about things I’m learning, building, and figuring out along the way." },
              { title: "Problem Solving", desc: "I enjoy digging into problems, understanding what’s actually going wrong, and making systems work better." },
            ].map(({ title, desc }) => (
              <div key={title} className="info-card">
                <h3 className="heading-card" style={{ fontSize: "var(--font-base)" }}>{title}</h3>
                <p className="body-sm mt-sm">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* How I work */}
      <Section variant="tight">
        <Container>
          <div className="max-w-prose">
            <h2 className="heading-section mb-xl">How I work</h2>
            <ul className="numbered-list" role="list">
              {HOW_I_WORK.map((item, i) => (
                <li key={i} className="numbered-list-item">
                  <span className="numbered-list-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="body-sm">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Background */}
      <Section variant="overlay" className="section--tight">
        <Container>
          <div className="max-w-prose">
            <h2 className="heading-section mb-lg">Background</h2>
            <p className="body-text">
              I&apos;ve been working as a full-time developer for around {stats.experience} years, building and shipping applications across different domains.
            </p>
            <p className="body-text mt-md">
              Outside of that, I take on freelance projects, experiment with new tools, and build things on my own, including apps and open-source work.
            </p>
            <p className="body-text mt-md">
              I don&apos;t stick to one stack for the sake of it, I move with what makes sense, which is how I&apos;ve gradually shifted into React and Next.js
            </p>
          </div>
        </Container>
      </Section>

      {/* Content CTA */}
      <Section variant="tight">
        <Container>
          <div className="max-w-prose">
            <h2 className="heading-section mb-md">I write about development too.</h2>
            <p className="body-text mb-xl">
              Mostly things I&apos;m learning or building, shared as articles, notes, and small breakdowns that might help someone else along the way.
            </p>
            <div className="flex-wrap">
              <Button href="https://karthikshetty.hashnode.dev/" variant="ghost" external>Hashnode</Button>
              <Button href="https://medium.com/@Karthikshetty26" variant="ghost" external>Medium</Button>
              <Button href="/blogs" variant="ghost">All Articles →</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
