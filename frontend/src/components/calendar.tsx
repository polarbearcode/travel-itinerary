"use client";
import { motion } from "framer-motion";

import { generateDays, getDaysIndex } from "../utils/utils";
import type { TravelEvent } from "../definitions/definitions";
import { useRef } from "react";

// Generate hours (0–23)
const hours: string[] = [];

for (let i = 0; i < 24; i++) {
  if (i > 0 && i <= 4) continue; // skip 1AM-4AM
  hours.push(`${i === 0 ? 12 : i > 12 ? i - 12 : i} ${i < 12 ? "AM" : "PM"}`);
}

const days = generateDays("2025-09-17", 6); // a week

export default function Calendar({ events }: { events: Array<TravelEvent> }) {
  const rowHeight = 60; // px height per hour slot
  const dayRefs = useRef<HTMLDivElement[]>([]);
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
            {days.map((day, i) => (
              <div
                key={day}
                ref={(el) => {
                  if (el) {
                    dayRefs.current[i] = el;
                  }
                }}
                className="relative border-r"
              ></div>
            ))}
          </div>
        ))}

        {/* Events layer */}
        {events.map((event) => {
          const dayIndex = getDaysIndex(event.day, days);
          if (dayIndex === -1) return null;

          const cell = dayRefs.current[dayIndex];

          const top = event.startHour * rowHeight - 240;
          const height = (event.endHour - event.startHour) * rowHeight;

          return (
            <motion.div
              key={event.id}
              className="absolute bg-blue-300 rounded-lg shadow p-2 text-xs border-2 border-solid overflow-hidden text-ellipsis whitespace-nowrap"
              title={event.title}
              style={{
                top,
                left: cell?.offsetLeft ?? 0, //100 + dayIndex * 150, // 100px for time col, 150px min col width
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
