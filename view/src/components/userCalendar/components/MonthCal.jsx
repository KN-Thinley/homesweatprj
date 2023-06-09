// import React, { useState, useContext } from "react";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";
// import { loadSelectedDays, toggleSelectedDay } from "../storage";
// import { SettingsContext } from "../context";
// import { isSameDay } from "date-fns";

// function MonthCal({ audio }) {
//   const settings = useContext(SettingsContext);

//   const [selectedDays, setSelectedDays] = useState(() => loadSelectedDays());

//   const handleDayClick = (day, { selected }) => {
//     const lastSelectedDay = selectedDays[selectedDays.length - 1];
//     const sameDay = isSameDay(lastSelectedDay, day);
//     audio.play(!selected && !sameDay);
//     const newSelectedDays = toggleSelectedDay(day);
//     setSelectedDays(newSelectedDays);
//   };

//   const modifiersStyles = {
//     selected: { backgroundColor: settings.selectedColor },
//     today: { backgroundColor: settings.todayColor, color: "red" }, // Define styles for today's date
//   };

//   const modifiers = {
//     selected: selectedDays,
//     today: new Date(), // Set today's date as a modifier
//   };

//   const dayStyles = {
//     margin: "50px",
//   };

//   return (
//     <div className="mt-4">
//       <DayPicker
//         className="flex justify-center text-3xl"
//         onDayClick={handleDayClick}
//         selected={selectedDays}
//         modifiers={modifiers} // Pass the modifiers to the DayPicker
//         modifiersStyles={modifiersStyles}
//         firstDayOfWeek={settings.firstDayOfWeek}
//         dayStyle={dayStyles}
//       />
//       {settings.Component}
//     </div>
//   );
// }

// export default MonthCal;
import React, { useState, useContext } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { loadSelectedDays, toggleSelectedDay } from "../storage";
import { SettingsContext } from "../context";
import { isSameDay } from "date-fns";
import "./MonthCal.css"; // Import custom CSS file

function MonthCal({ audio }) {
  const settings = useContext(SettingsContext);

  const [selectedDays, setSelectedDays] = useState(() => loadSelectedDays());

  const handleDayClick = (day, { selected }) => {
    const lastSelectedDay = selectedDays[selectedDays.length - 1];
    const sameDay = isSameDay(lastSelectedDay, day);
    audio.play(!selected && !sameDay);
    const newSelectedDays = toggleSelectedDay(day);
    setSelectedDays(newSelectedDays);
  };

  const modifiersStyles = {
    selected: { backgroundColor: settings.selectedColor },
    today: { backgroundColor: settings.todayColor, color: "red" },
  };

  const modifiers = {
    selected: selectedDays,
    today: new Date(),
  };

  return (
    <div className="mt-4">
      <DayPicker
        className="flex justify-center text-3xl custom-daypicker" // Add custom CSS class
        onDayClick={handleDayClick}
        selected={selectedDays}
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
        firstDayOfWeek={settings.firstDayOfWeek}
      />
      {settings.Component}
    </div>
  );
}

export default MonthCal;
