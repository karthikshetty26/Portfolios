import type { Project } from "@/types/project";
import { Card } from "./Card";

interface ProjectCardProps {
    project: Project;
    featured?: boolean;
    showFeaturedTag?: boolean;
}

export function ProjectCard({
    project,
    featured = false,
    showFeaturedTag = false,
}: ProjectCardProps) {
    return (
        <Card link className="project-card">

            {/* Tags section - technology tags and optional featured badge */}
            <div className="tag-list mb-lg">

                {/* Featured badge */}
                {showFeaturedTag && featured && (
                    <span className="tag tag--featured" style={{ display: "inline-block" }}>
                        Featured
                    </span>
                )}

                {/* Technology tags */}
                {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="tag">{t}</span>
                ))}
            </div>

            {/* Project title */}
            <h3 className="heading-card mb-sm">{project.title}</h3>

            {/* Project description */}
            <p className="body-xs text-muted line-clamp-3 mb-base flex-grow">
                {project.description}
            </p>

            {/* Outcome highlight and CTA */}
            <div className="project-card-footer">
                <p className="text-green text-sm mb-sm">
                    {project.outcome.split(".")[0]}.
                </p>
                <span className="text-cta">View case study →</span>
            </div>
        </Card>
    );
}
