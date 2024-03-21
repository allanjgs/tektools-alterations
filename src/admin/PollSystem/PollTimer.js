import React, { useState } from "react";
import classes from "./Tab5.module.css";

const days = Array.from({ length: 7 }, (_, i) => `Day ${i}`);
const hours = Array.from({ length: 24 }, (_, i) =>
  i.toString().padStart(2, "0")
);
const minutes = Array.from({ length: 60 }, (_, i) =>
  i.toString().padStart(2, "0")
);

function PollTimer() {
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [selectedHour, setSelectedHour] = useState(hours[0]);
  const [selectedMinute, setSelectedMinute] = useState(minutes[0]);

  return (
    <div className="input-container">
      <div className="dropdown-group">
        <label htmlFor="dayDropdown">Select Day:</label>
        <select
          className="dropdown-select"
          id="dayDropdown"
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          {days.map((day, index) => (
            <option key={index} value={day}>
              {day}
            </option>
          ))}
        </select>
        <label htmlFor="hourDropdown">Select Hour:</label>
        <select
          className="dropdown-select"
          id="hourDropdown"
          value={selectedHour}
          onChange={(e) => setSelectedHour(e.target.value)}
        >
          {hours.map((hour, index) => (
            <option key={index} value={hour}>
              {hour}
            </option>
          ))}
        </select>
        <label htmlFor="minuteDropdown">Select Minute:</label>
        <select
          className="dropdown-select"
          id="minuteDropdown"
          value={selectedMinute}
          onChange={(e) => setSelectedMinute(e.target.value)}
        >
          {minutes.map((minute, index) => (
            <option key={index} value={minute}>
              {minute}
            </option>
          ))}
        </select>
      </div>
      <div className={classes.result}>{`Poll Duration : ${selectedDay.replace(
        "Day ",
        ""
      )} Days ${selectedHour} hours ${selectedMinute} min`}</div>
    </div>
  );
}

export default PollTimer;
