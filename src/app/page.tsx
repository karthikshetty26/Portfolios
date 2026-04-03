import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Intro } from "@/components/sections/Intro";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ContentPreview } from "@/components/sections/ContentPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
    return (
        <>
            <Hero />
            <ProofStrip />
            <Intro />
            <FeaturedProjects />
            <ServicesPreview />
            <ContentPreview />
            <ContactCTA />
        </>
    );
}
