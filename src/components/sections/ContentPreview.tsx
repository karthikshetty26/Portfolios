import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function ContentPreview() {
  return (
    <Section variant="overlay">
      <Container>
        <div className="max-w-prose">
          <p className="eyebrow">Content</p>
          <h2 className="heading-section">I write and create too.</h2>
          <p className="body-text mt-base">
            Most of what I write is just things I&apos;m learning or building, usually around code. I post longer write-ups on <a
              href="https://karthikshetty.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Hashnode
            </a>{" "}
            and{" "}
            <a
              href="https://medium.com/@Karthikshetty26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Medium
            </a>, and smaller bits like challenges, thoughts, and random learnings on Twitter and LinkedIn.
          </p>
          <p className="body-text mt-base">
            I&apos;ve also been experimenting with YouTube, mostly casual vlogs and trying out different ideas. There are a few other channels too, but I haven&apos;t really focused on them yet.
          </p>

          <div className="flex-wrap mt-xl">
            <a href="https://karthikshetty.hashnode.dev/" target="_blank" rel="noopener noreferrer" className="link-btn">
              Read on Hashnode
            </a>
            <a href="https://medium.com/@Karthikshetty26" target="_blank" rel="noopener noreferrer" className="link-btn">
              Read on Medium
            </a>
            <Link href="/blogs" className="link-btn">All Articles →</Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
