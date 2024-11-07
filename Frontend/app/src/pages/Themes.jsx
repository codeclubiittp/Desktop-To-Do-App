import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icons for navigation

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 50px repeat(12, 1fr);
  gap: 10px;
  padding: 20px;
`;

const DayHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

const EventBox = styled.div`
  position: relative;
  background-color: ${(props) => props.bgColor};
  color: white;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${(props) => props.height};
`;

const EventTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const EventTime = styled.div`
  font-size: 12px;
  margin-top: 5px;
`;

const AttendeeAvatars = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: flex-end;
`;

const Avatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #fff;
  margin-left: -10px;
  border: 2px solid white;
`;

const HeaderNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #636e72;
`;

const WeekIndicator = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const events = {
  "2024-05-12": [
    { day: "Monday", time: "10:00 AM", title: "Shooting Stars", color: "#00b894", attendees: 2, height: "80px" },
    { day: "Monday", time: "4:00 PM", title: "The Amazing Hubble", color: "#0984e3", attendees: 1, height: "120px" },
  ],
  "2024-05-19": [
    { day: "Tuesday", time: "12:00 PM", title: "The Amazing Hubble", color: "#fdcb6e", attendees: 2, height: "120px" },
    { day: "Wednesday", time: "3:00 PM", title: "Choosing a Quality Telescope Set", color: "#6c5ce7", attendees: 3, height: "100px" },
  ],
  "2024-05-26": [
    { day: "Thursday", time: "10:00 AM", title: "Astronomy Binoculars", color: "#e17055", attendees: 2, height: "120px" },
    { day: "Friday", time: "11:00 AM", title: "Astronomy Binoculars", color: "#e84393", attendees: 2, height: "100px" },
  ],
};

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Calendar = () => {
  const [currentWeek, setCurrentWeek] = useState("2024-05-12");

  const handlePreviousWeek = () => {
    const newWeek = new Date(currentWeek);
    newWeek.setDate(newWeek.getDate() - 7); // Move back by 7 days
    setCurrentWeek(newWeek.toISOString().split("T")[0]);
  };

  const handleNextWeek = () => {
    const newWeek = new Date(currentWeek);
    newWeek.setDate(newWeek.getDate() + 7); // Move forward by 7 days
    setCurrentWeek(newWeek.toISOString().split("T")[0]);
  };

  return (
    <div>
      <HeaderNavigation>
        <NavButton onClick={handlePreviousWeek}>
          <FaChevronLeft />
        </NavButton>
        <WeekIndicator>{new Date(currentWeek).toDateString()} - Week</WeekIndicator>
        <NavButton onClick={handleNextWeek}>
          <FaChevronRight />
        </NavButton>
      </HeaderNavigation>

      <CalendarContainer>
        {daysOfWeek.map((day) => (
          <DayHeader key={day}>{day}</DayHeader>
        ))}

        {events[currentWeek]?.map((event, index) => (
          <EventBox key={index} bgColor={event.color} height={event.height}>
            <EventTitle>{event.title}</EventTitle>
            <EventTime>{event.time}</EventTime>
            <AttendeeAvatars>
              {[...Array(event.attendees)].map((_, idx) => (
                <Avatar key={idx} />
              ))}
            </AttendeeAvatars>
          </EventBox>
        ))}
      </CalendarContainer>
    </div>
  );
};

export default Calendar;
