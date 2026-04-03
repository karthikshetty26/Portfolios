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
            I write technical articles on Hashnode and Medium covering
            JavaScript, Java, Docker, and web development concepts — explained
            clearly for developers at every level. I&apos;m also working on YouTube
            content to bring these topics to life with practical walkthroughs.
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
