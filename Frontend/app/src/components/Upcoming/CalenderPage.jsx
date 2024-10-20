import React, { useState } from 'react';
import './page.css';
import EventCard from './EventCard'; 

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [view, setView] = useState('week');
  // Placeholder events data
  const events = [
    { title: 'Team Meeting', time: '11:00 AM - 1:00 PM', day: 2, startHour: 11, endHour: 13, users: [{ avatar: 'avatar1.png', name: 'John' }] },
    { title: 'Lunch Break', time: '12:00 PM - 1:00 PM', day: 3, startHour: 12, endHour: 13, users: [{ avatar: 'avatar2.png', name: 'Jane' }] },
  ];

  const getWeekDays = (date) => {
    const days = [];
    const currentDay = new Date(date);
    for (let i = 0; i < 7; i++) {
      const nextDay = new Date(currentDay);
      nextDay.setDate(currentDay.getDate() + i);
      days.push(nextDay);
    }
    return days;
  };

  const nextWeek = () => {
    const nextStartDate = new Date(startDate);
    nextStartDate.setDate(startDate.getDate() + 7);
    setStartDate(nextStartDate);
  };

  const prevWeek = () => {
    const prevStartDate = new Date(startDate);
    prevStartDate.setDate(startDate.getDate() - 7);
    setStartDate(prevStartDate);
  };

  const days = getWeekDays(startDate);

  const createTimeSlots = () => {
    const slots = [];
    for (let hour = 0; hour < 24; hour++) {
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const hour12 = hour % 12 === 0 ? 12 : hour % 12; // Convert to 12-hour format
      slots.push(`${hour12}:00 ${ampm}`);
    }
    return slots;
  };

  const times = createTimeSlots();

  const formatDateRange = (days) => {
    const start = days[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const end = days[days.length - 1].toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    return `${start} - ${end}`;
  };


  const colors = [
    { bg: 'rgba(255, 165, 0, 0.2)', border: 'orange' },
    { bg: 'rgba(0, 128, 0, 0.2)', border: 'green' },
    { bg: 'rgba(255, 20, 147, 0.2)', border: 'deeppink' },
    { bg: 'rgba(30, 144, 255, 0.2)', border: 'dodgerblue' },
    { bg: 'rgba(128, 0, 128, 0.2)', border: 'purple' },
  ];


  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

 
  const getEventAt = (dayIndex, hour) => {
    return events.find(event => event.day === dayIndex && event.startHour === hour);
  };

  const calculateRowSpan = (event) => {
    return event.endHour - event.startHour;
  };

  return (
    <div className="calendar-container">
      {/* Navigation for Date Range */}
      <div className="date-range-controls">
        <button className="nav-button" onClick={prevWeek}>{'<'}</button>
        <div className="date-range">{formatDateRange(days)}</div>
        <button className="nav-button" onClick={nextWeek}>{'>'}</button>
      </div>

    
      <div className="view-controls">
        <button
          onClick={() => setView('today')}
          className={`view-button ${view === 'today' ? 'active' : ''}`}
        >
          Today
        </button>
        {['month', 'year', 'week', 'day'].map((option) => (
          <button
            key={option}
            onClick={() => setView(option)}
            className={`view-button ${view === option ? 'active' : ''}`}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      {/* Table Structure */}
      <table className="calendar-table">
        <thead>
          <tr>
            <th></th>
            {days.map((day, index) => (
              <th key={index}>{day.toDateString().slice(0, 10)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time, rowIndex) => (
            <tr key={rowIndex}>
              <td className="time-slot">{time}</td>
              {days.map((_, dayIndex) => {
                const event = getEventAt(dayIndex, rowIndex);
                if (event) {
                  const rowSpan = calculateRowSpan(event); // Calculate rowSpan for the event
                  const color = getRandomColor();
                  return (
                    <td key={dayIndex} className="calendar-slot" rowSpan={rowSpan} style={{ padding: 0 }}>
                      <EventCard
                        eventTitle={event.title}
                        startTime={event.startHour}
                        endTime = {event.endHour}
                        users={event.users}
                        bgColor={color.bg}
                        borderColor={color.border}
                      />
                    </td>
                  );
                }
                return (
                  <td key={dayIndex} className="calendar-slot"></td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
