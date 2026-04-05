import { Card } from "@/components/ui/Card";
import type { Service } from "@/types/service";

interface ServiceCardProps {
    service: Service;
    index: number;
    showIncludes?: boolean;
    headingLevel?: "h2" | "h3";
    bestForVersion: "V1" | "V2";
}

export function ServiceCard({ service, index, showIncludes = false, headingLevel = "h3", bestForVersion }: ServiceCardProps) {
    const Heading = headingLevel;

    return (
        <Card className="service-card">
            <span className="service-number">
                {String(index + 1).padStart(2, "0")}
            </span>

            <div>
                <Heading className="heading-card" style={{ fontSize: "var(--font-lg)" }}>{service.title}</Heading>
                <p className="body-sm mt-sm">{service.description}</p>
            </div>

            {showIncludes && (
                <div style={{ flex: 1 }}>
                    <p className="eyebrow" style={{ fontSize: "var(--font-xs)" }}>Includes</p>
                    <ul className="includes-list" role="list">
                        {service.includes.map((item) => (
                            <li key={item} className="includes-list-item">
                                <span className="includes-list-check" aria-hidden="true">✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {bestForVersion === "V1" ? (
                <div className="service-best-for" style={{ marginTop: showIncludes ? undefined : "auto" }}>
                    <p className="eyebrow" style={{ marginBottom: "var(--space-xs)", fontSize: "var(--font-xs)" }}>Best for</p>
                    <p style={{ fontSize: "var(--font-xs)", color: "var(--foreground)" }}>{service.bestFor}</p>
                </div>
            ) : (
                <p className="body-sm service-footer">
                    <strong className="label">Best for:</strong> {service.bestFor}
                </p>
            )}

        </Card>
    );
}
