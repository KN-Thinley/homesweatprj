// import React, { useState } from "react";
// import MonthCal from "./components/MonthCal";
// import SimoneCal from "./components/SimoneCal";
// import Settings from "./components/Settings";
// import { DateContext, SettingsContext, MONDAY } from "./context";
// import {
//   loadSelectedDays,
//   loadMuted,
//   loadSelectedColor,
//   loadCalendarType,
// } from "./storage";
// import AudioControl from "./Audio";

// const Calendar = () => {
//   const [settings, setSettings] = useState(() => ({
//     muted: loadMuted(),
//     firstDayOfWeek: MONDAY,
//     selectedColor: loadSelectedColor(),
//     Component: {},
//     calendarType: loadCalendarType(),
//   }));

//   const audio = new AudioControl(settings.muted);
//   const SettingsComponent = (
//     <Settings audio={audio} setSettings={setSettings} />
//   );

//   const today = new Date();
//   const dateContext = {
//     today: today,
//     currentYear: today.getFullYear(),
//     currentMonth: today.getMonth(),
//     currentDay: today.getDate(),
//     selectedDates: loadSelectedDays(),
//   };

//   return (
//     <SettingsContext.Provider
//       value={{ ...settings, Component: SettingsComponent }}
//     >
//       <DateContext.Provider value={dateContext}>
//         {settings.calendarType === "simone" ? (
//           <SimoneCal audio={audio} />
//         ) : (
//           <MonthCal audio={audio} />
//         )}
//       </DateContext.Provider>
//     </SettingsContext.Provider>
//   );
// };

// export default Calendar;

import React, { useState } from "react";
import MonthCal from "./components/MonthCal";
import SimoneCal from "./components/SimoneCal";
import Settings from "./components/Settings";
import { DateContext, SettingsContext, MONDAY } from "./context";
import {
  loadSelectedDays,
  loadMuted,
  loadSelectedColor,
  loadCalendarType,
} from "./storage";
import AudioControl from "./audio";

const Calendar = () => {
  const [selectedDays, setSelectedDays] = useState(loadSelectedDays());
  const [settings, setSettings] = useState(() => ({
    muted: loadMuted(),
    firstDayOfWeek: MONDAY,
    selectedColor: loadSelectedColor(),
    Component: {},
    calendarType: loadCalendarType(),
  }));

  const audio = new AudioControl(settings.muted);
  const SettingsComponent = (
    <Settings audio={audio} setSettings={setSettings} />
  );

  const today = new Date();
  const dateContext = {
    today: today,
    currentYear: today.getFullYear(),
    currentMonth: today.getMonth(),
    currentDay: today.getDate(),
    selectedDates: selectedDays,
  };

  const handleSelectedDaysChange = (newSelectedDays) => {
    setSelectedDays(newSelectedDays); // Update the shared state
  };

  return (
    <SettingsContext.Provider
      value={{ ...settings, Component: SettingsComponent }}
    >
      <DateContext.Provider value={dateContext}>
        {settings.calendarType === "simone" ? (
          <SimoneCal
            audio={audio}
            selectedDays={selectedDays}
            setSelectedDays={handleSelectedDaysChange}
          />
        ) : (
          <MonthCal
            audio={audio}
            selectedDays={selectedDays}
            setSelectedDays={handleSelectedDaysChange}
          />
        )}
      </DateContext.Provider>
    </SettingsContext.Provider>
  );
};

export default Calendar;
