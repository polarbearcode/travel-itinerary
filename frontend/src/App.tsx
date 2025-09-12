import "./App.css";
import Calendar from "./components/calendar";

function App() {
  const events = [
    {
      id: 1,
      title: "Get to Hotel and Checkin",
      day: "2025-09-17",
      startHour: 15,
      endHour: 16.5,
    },
    {
      id: 2,
      title: "Foda Egyptian Food or D & F Deli",
      day: "2025-09-17",
      startHour: 16.5,
      endHour: 17.5,
    },
    {
      id: 3,
      title: "Transit to Queensborough Bridge",
      day: "2025-09-17",
      startHour: 17.5,
      endHour: 18,
    },
    {
      id: 4,
      title: "Walk to Roosevelt Island Tram",
      day: "2025-09-17",
      startHour: 18,
      endHour: 19,
    },
    {
      id: 5,
      title: "Roosevelt Island and back to Tramway Plaza",
      day: "2025-09-17",
      startHour: 19,
      endHour: 21,
    },

    { id: 8, title: "Grub", day: "2025-09-17", startHour: 21, endHour: 22 },

    {
      id: 9,
      title: "Times Square and Empire State Building",
      day: "2025-09-17",
      startHour: 22,
      endHour: 23,
    },

    {
      id: 10,
      title: "Transit to Central Park",
      day: "2025-09-19",
      startHour: 7,
      endHour: 8,
    },

    {
      id: 11,
      title: "Central Park",
      day: "2025-09-19",
      startHour: 8,
      endHour: 10,
    },

    {
      id: 12,
      title: "Transit to Battery",
      day: "2025-09-18",
      startHour: 9,
      endHour: 10,
    },

    {
      id: 13,
      title: "Statue of Liberty Stuff",
      day: "2025-09-18",
      startHour: 10,
      endHour: 15,
    },

    {
      id: 14,
      title: "Walk to Chinatown",
      day: "2025-09-18",
      startHour: 15,
      endHour: 16,
    },

    {
      id: 15,
      title: "Noodle Village",
      day: "2025-09-18",
      startHour: 16,
      endHour: 17,
    },

    {
      id: 16,
      title: "Manhattan and Brooklyn Bridge",
      day: "2025-09-18",
      startHour: 17,
      endHour: 19,
    },

    {
      id: 17,
      title: "Wall Street",
      day: "2025-09-18",
      startHour: 19,
      endHour: 19.5,
    },

    {
      id: 18,
      title: "Dinner",
      day: "2025-09-18",
      startHour: 19.5,
      endHour: 21,
    },

    {
      id: 19,
      title: "Intrepid",
      day: "2025-09-19",
      startHour: 10,
      endHour: 13,
    },

    {
      id: 20,
      title: "Queens Chinatown",
      day: "2025-09-18",
      startHour: 8,
      endHour: 9,
    },

    {
      id: 21,
      title: "Transit",
      day: "2025-09-19",
      startHour: 13,
      endHour: 14,
    },

    {
      id: 22,
      title: "Chubby Crab",
      day: "2025-09-19",
      startHour: 14,
      endHour: 15,
    },

    {
      id: 23,
      title: "Williamsburg Bridge",
      day: "2025-09-19",
      startHour: 15,
      endHour: 16,
    },

    {
      id: 24,
      title: "Transit to Top of the Rock",
      day: "2025-09-19",
      startHour: 16,
      endHour: 16.5,
    },

    {
      id: 25,
      title: "Top of the Rock",
      day: "2025-09-19",
      startHour: 16.5,
      endHour: 18,
    },

    {
      id: 26,
      title: "Boston",
      day: "2025-09-20",
      startHour: 4,
      endHour: 24,
    },

    {
      id: 27,
      title: "Boston",
      day: "2025-09-21",
      startHour: 4,
      endHour: 24,
    },

    {
      id: 28,
      title: "Boston",
      day: "2025-09-22",
      startHour: 4,
      endHour: 15,
    },

    {
      id: 29,
      title: "Movie",
      day: "2025-09-19",
      startHour: 18,
      endHour: 23,
    },
  ];
  return (
    <>
      <Calendar events={events}></Calendar>
    </>
  );
}

export default App;
