// import React, { useState, useEffect, useRef } from "react";
// import { BsCalendar2Check } from "react-icons/bs";

// const Journal = () => {
//   const currentDate = new Date();
//   const calendarRef = useRef(null);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [journalEntry, setJournalEntry] = useState("");

//   const getDaysInMonth = (year, month) => {
//     return new Date(year, month + 1, 0).getDate();
//   };

//   const generateDates = () => {
//     const year = currentDate.getFullYear();
//     const month = currentDate.getMonth();
//     const daysInMonth = getDaysInMonth(year, month);

//     const dates = [];
//     for (let i = 1; i <= daysInMonth; i++) {
//       dates.push(i);
//     }

//     return dates;
//   };

//   const scrollToToday = () => {
//     const element = calendarRef.current;
//     if (element) {
//       const todayElement = element.querySelector(".today");
//       if (todayElement) {
//         handleDateClick(currentDate.getDate());
//         element.scrollTo({
//           left:
//             todayElement.offsetLeft -
//             (element.offsetWidth / 2 - todayElement.offsetWidth / 2),
//           behavior: "smooth",
//         });
//       }
//     }
//   };

//   const handleDateClick = (date) => {
//     setSelectedDate(date);

//     const element = calendarRef.current;
//     if (element) {
//       const previousSelectedDateElement = element.querySelector(".selected");
//       if (previousSelectedDateElement) {
//         previousSelectedDateElement.classList.remove("selected");
//       }

//       const dateElement = element.querySelector(`[data-date="${date}"]`);
//       if (dateElement) {
//         dateElement.classList.add("selected");
//         dateElement.scrollIntoView({
//           behavior: "smooth",
//           inline: "center",
//         });
//         setSelectedDate(date);
//       }
//     }
//   };

//   const handleJournalEntryChange = (e) => {
//     setJournalEntry(e.target.value);
//   };

//   useEffect(() => {
//     scrollToToday();
//   }, []);

//   useEffect(() => {
//     const handleWheelScroll = (e) => {
//       const element = calendarRef.current;
//       if (element) {
//         e.preventDefault();
//         element.scrollTo({
//           left: element.scrollLeft + e.deltaY * 3,
//           behavior: "smooth",
//         });
//       }
//     };

//     const calendarElement = calendarRef.current;
//     if (calendarElement) {
//       calendarElement.addEventListener("wheel", handleWheelScroll, {
//         passive: false,
//       });
//     }

//     return () => {
//       if (calendarElement) {
//         calendarElement.removeEventListener("wheel", handleWheelScroll);
//       }
//     };
//   }, []);

//   return (
//     <div className=" journal relative overflow-y-scroll">
//       <div className="header flex justify-end items-center gap-4 py-2">
//         <div className="flex justify-center">
//           <button onClick={scrollToToday} className="focus:outline-none">
//             <BsCalendar2Check className="text-green-700 text-2xl" />
//           </button>
//         </div>
//         <h1 className="text-center text-2xl font-bold">
//           {currentDate.toLocaleString("default", {
//             month: "long",
//             year: "numeric",
//           })}
//         </h1>
//       </div>

//       <div className="overflow-x-auto" ref={calendarRef}>
//         <div className="flex whitespace-nowrap gap-4">
//           {generateDates().map((date) => (
//             <div
//               key={date}
//               className={`py-2 px-4 text-center border rounded-full border-gray-300 today ${
//                 currentDate.getDate() === date
//                   ? "bg-blue-500 text-white selected"
//                   : ""
//               }`}
//               onClick={() => handleDateClick(date)}
//               data-date={date}
//             >
//               {date}
//             </div>
//           ))}
//         </div>
//       </div>

//       {selectedDate && (
//         <div className="mt-4">
//           <h2 className="text-xl font-bold mb-2">
//             {currentDate.toLocaleString("default", { month: "long" })}{" "}
//             {selectedDate}
//           </h2>
//           <textarea
//             className="border p-2 w-full"
//             rows={4}
//             value={journalEntry}
//             onChange={handleJournalEntryChange}
//             placeholder="Write your journal entry..."
//           />
//         </div>
//       )}

//       <style jsx>
//         {`
//           .selected {
//             border-color: red;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Journal;

import React, { useState, useEffect, useRef } from "react";
import { BsCalendar2Check } from "react-icons/bs";

const Journal = () => {
  const currentDate = new Date();
  const calendarRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [journalEntry, setJournalEntry] = useState("");
  const [journalEntries, setJournalEntries] = useState([]);

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateDates = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);

    const dates = [];
    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(i);
    }

    return dates;
  };

  const scrollToToday = () => {
    const element = calendarRef.current;
    if (element) {
      const todayElement = element.querySelector(".today");
      if (todayElement) {
        handleDateClick(currentDate.getDate());
        element.scrollTo({
          left:
            todayElement.offsetLeft -
            (element.offsetWidth / 2 - todayElement.offsetWidth / 2),
          behavior: "smooth",
        });
      }
    }
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);

    const element = calendarRef.current;
    if (element) {
      const previousSelectedDateElement = element.querySelector(".selected");
      if (previousSelectedDateElement) {
        previousSelectedDateElement.classList.remove("selected");
      }

      const dateElement = element.querySelector(`[data-date="${date}"]`);
      if (dateElement) {
        dateElement.classList.add("selected");
        dateElement.scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
        setSelectedDate(date);
      }
    }
  };

  const handleJournalEntryChange = (e) => {
    setJournalEntry(e.target.value);
  };

  const handleJournalEntrySubmit = (e) => {
    e.preventDefault();
    if (journalEntry.trim() !== "") {
      const newEntry = {
        id: Date.now(),
        date: selectedDate,
        entry: journalEntry,
      };
      setJournalEntries([...journalEntries, newEntry]);
      setJournalEntry("");
    }
  };

  const handleDeleteEntry = (entryId) => {
    const updatedEntries = journalEntries.filter(
      (entry) => entry.id !== entryId
    );
    setJournalEntries(updatedEntries);
  };

  const handleEditEntry = (entryId) => {
    const entryToUpdate = journalEntries.find((entry) => entry.id === entryId);
    if (entryToUpdate) {
      setJournalEntry(entryToUpdate.entry);
      handleDeleteEntry(entryId);
    }
  };

  useEffect(() => {
    scrollToToday();
  }, []);

  useEffect(() => {
    const handleWheelScroll = (e) => {
      const element = calendarRef.current;
      if (element) {
        e.preventDefault();
        element.scrollTo({
          left: element.scrollLeft + e.deltaY * 3,
          behavior: "smooth",
        });
      }
    };

    const calendarElement = calendarRef.current;
    if (calendarElement) {
      calendarElement.addEventListener("wheel", handleWheelScroll, {
        passive: false,
      });
    }

    return () => {
      if (calendarElement) {
        calendarElement.removeEventListener("wheel", handleWheelScroll);
      }
    };
  }, []);

  return (
    <div className="max-w-lg mx-auto journal overflow-y-scroll">
      <div className="header flex justify-end items-center gap-4 py-2">
        <div className="flex justify-center">
          <button onClick={scrollToToday} className="focus:outline-none">
            <BsCalendar2Check className="text-green-700 text-2xl" />
            <h1 className="text-center text-2xl font-bold">
              {currentDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </h1>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto" ref={calendarRef}>
        <div className="flex whitespace-nowrap gap-4">
          {generateDates().map((date) => (
            <div
              key={date}
              className={` cursor-pointer py-2 px-4 text-center border rounded-full border-gray-300 today ${
                currentDate.getDate() === date
                  ? "bg-blue-500 text-white selected"
                  : ""
              }`}
              onClick={() => handleDateClick(date)}
              data-date={date}
            >
              {date}
            </div>
          ))}
        </div>
      </div>

      {selectedDate && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">
            {currentDate.toLocaleString("default", { month: "long" })}{" "}
            {selectedDate}
          </h2>
          <form onSubmit={handleJournalEntrySubmit}>
            <input
              className="border p-2 w-full"
              value={journalEntry}
              onChange={handleJournalEntryChange}
              placeholder="Write your journal entry..."
            />
            <button type="submit" className="btn btn-primary mt-2">
              Add Entry
            </button>
          </form>
        </div>
      )}

      <div className="entries mt-4">
        {journalEntries.map((entry) => (
          <div key={entry.id} className="entry border rounded p-2 mb-2">
            <p>{entry.entry}</p>
            <div className="entry-actions">
              <button
                className="btn btn-secondary mr-2"
                onClick={() => handleEditEntry(entry.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteEntry(entry.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>
        {`
          .selected {
            border-color: red;
          }
        `}
      </style>
    </div>
  );
};

export default Journal;
