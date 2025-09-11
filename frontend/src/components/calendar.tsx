import { motion } from "framer-motion";

import { generateDays } from "../utils/utils";

// Generate hours (0–23)
const hours = Array.from(
  { length: 24 },
  (_, i) => `${i === 0 ? 12 : i > 12 ? i - 12 : i} ${i < 12 ? "AM" : "PM"}`
);

const days = generateDays("2025-09-11", 7); // a week

// Example events
const events = [
  {
    id: 1,
    title: "Hackathon",
    day: "2025-09-12",
    startHour: 0,
    endHour: 6,
  },
  {
    id: 2,
    title: "Morning Run",
    day: "2025-09-13",
    startHour: 6,
    endHour: 8,
  },
  {
    id: 3,
    title: "Team Meeting",
    day: "2025-09-13",
    startHour: 9,
    endHour: 11,
  },
  {
    id: 4,
    title: "Dinner",
    day: "2025-09-14",
    startHour: 18,
    endHour: 20,
  },
];

export default function Calendar() {
  const rowHeight = 60; // px height per hour slot

  return (
    <div className="p-4 overflow-x-auto">
      {/* Header */}
      <div
        className="grid border bg-gray-50"
        style={{
          gridTemplateColumns: `100px repeat(${days.length}, minmax(150px, 1fr))`,
        }}
      >
        <div className="border p-2"></div>
        {days.map((day) => (
          <div key={day} className="border p-2 text-center font-semibold">
            {day}
          </div>
        ))}
      </div>

      {/* Body */}
      <div className="relative">
        {/* Hour rows */}
        {hours.map((hour, i) => (
          <div
            key={hour}
            className="grid border-l border-r border-b"
            style={{
              gridTemplateColumns: `100px repeat(${days.length}, minmax(150px, 1fr))`,
              height: rowHeight,
            }}
          >
            {/* Time label */}
            <div className="border-r p-2 text-xs bg-gray-100">{hour}</div>
            {days.map((day) => (
              <div key={day} className="relative border-r"></div>
            ))}
          </div>
        ))}

        {/* Events layer */}
        {events.map((event) => {
          const dayIndex = days.indexOf(event.day);
          if (dayIndex === -1) return null;

          const top = event.startHour * rowHeight;
          const height = (event.endHour - event.startHour) * rowHeight;

          return (
            <motion.div
              key={event.id}
              className="absolute bg-blue-300 rounded-lg shadow p-2 text-xs"
              style={{
                top,
                left: 100 + dayIndex * 150, // 100px for time col, 150px min col width
                width: 140, // slightly less than column width
                height,
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {event.title}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
