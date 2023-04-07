import React, { useState } from 'react';

function Calendar() {
  const [date, setDate] = useState(new Date());

  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const days = [...Array(lastDay.getDate()).keys()].map((i) => i + 1);

  const prevMonth = () => setDate(new Date(year, month - 1, 1));
  const nextMonth = () => setDate(new Date(year, month + 1, 1));

  return (
    <div className="calendar">
      <div className="month">
        <button onClick={prevMonth}>{'<'}</button>
        {firstDay.toLocaleString('default', { month: 'long' })}
        <button onClick={nextMonth}>{'>'}</button>
      </div>
      <div className="weekdays">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="days">
        {[...Array(firstDay.getDay()).keys()].map((i) => (
          <div key={`empty-${i}`} className="day empty" />
        ))}
        {days.map((day) => (
          <div key={day} className="day">
            {day}
          </div>
        ))}
        {[...Array(6 - lastDay.getDay()).keys()].map((i) => (
          <div key={`empty-${i}`} className="day empty" />
        ))}
      </div>
    </div>
  );
}

export default Calendar;