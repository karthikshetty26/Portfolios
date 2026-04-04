import { Container } from "@/components/ui/Container";
import { getProfileStats } from "@/lib/profile";

export function ProofStrip() {
  const stats = getProfileStats();

  const STATS = [
    { value: stats.experience, label: "Years Experience"},
    { value: stats.hoursWorked, label: "Hours Worked" },
    { value: stats.projectsBuilt, label: "Applications Shipped" },
  ];

  return (
    <div className="proof-strip">
      <Container>
        <dl className="proof-strip-grid" aria-label="Experience statistics">
          {STATS.map(({ value, label }) => (
            <div key={label} className="stat">
              <dt className="stat-value">{value}</dt>
              <dd className="stat-label">{label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  );
}
