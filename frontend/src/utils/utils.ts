/**
 * Generate an array of dates in YYYY-MM-DD format.
 * @param startDate - The starting date (inclusive).
 * @param numDays - The number of days to generate.
 * @returns An array of date strings.
 */
export function generateDays(startDate: string, numDays: number) {
  const days = [];
  const start = new Date(startDate);
  for (let i = 0; i < numDays; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    days.push(d.toISOString().split("T")[0]); // YYYY-MM-DD
  }
  return days;
}
