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
    days.push(
      d.toLocaleDateString("en-US", { weekday: "long", timeZone: "UTC" }) +
        "\n" +
        d.toISOString().split("T")[0]
    ); // YYYY-MM-DD
  }
  return days;
}

/**
 * Get the index of a specific day in an array of days.
 * @param day - The day to find (in YYYY-MM-DD format).
 * @param days - The array of days to search.
 * @returns The index of the day, or -1 if not found.
 */
export function getDaysIndex(day: string, days: string[]) {
  const d = new Date(day);
  const dayString =
    d.toLocaleDateString("en-US", { weekday: "long", timeZone: "UTC" }) +
    "\n" +
    d.toISOString().split("T")[0];
  return days.indexOf(dayString);
}
