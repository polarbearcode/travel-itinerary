export type TravelEvent = {
  id: number;
  title: string;
  day: string; // in YYYY-MM-DD format
  startHour: number; // 0-23
  endHour: number; // 0-23
};
