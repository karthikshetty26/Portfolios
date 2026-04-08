export function formatDate(dateStr: string): string {
  const [day, month, year] = dateStr.split("-").map(Number);

  if (!day || !month || !year) return "Invalid Date";

  const date = new Date(year, month - 1, day);

  if (isNaN(date.getTime())) return "Invalid Date";

  return `${String(day).padStart(2, "0")}-${String(month).padStart(2, "0")}-${year}`;
}