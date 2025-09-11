import "./App.css";
import Calendar from "./components/calendar";

function App() {
  const events = [
    {
      id: 1,
      title: "Flight to NYC",
      day: "2025-09-11",
      startHour: 9,
      endHour: 11,
    },
    {
      id: 2,
      title: "Hotel Check-in",
      day: "2025-09-11",
      startHour: 14,
      endHour: 15,
    },
    {
      id: 3,
      title: "Museum Visit",
      day: "2025-09-12",
      startHour: 10,
      endHour: 12,
    },
    {
      id: 4,
      title: "Dinner Reservation",
      day: "2025-09-12",
      startHour: 19,
      endHour: 21,
    },
    { id: 5, title: "City Tour", day: "2025-09-13", startHour: 9, endHour: 12 },
    {
      id: 6,
      title: "Flight Back Home",
      day: "2025-09-14",
      startHour: 16,
      endHour: 18,
    },
  ];
  return (
    <>
      <Calendar events={events}></Calendar>
    </>
  );
}

export default App;
