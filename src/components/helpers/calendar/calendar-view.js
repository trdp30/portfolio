import React, { useMemo } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import PropTypes from "prop-types";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function CalendarView({ calendarEvents }) {
  const events = useMemo(() => {
    if (calendarEvents && calendarEvents.length) {
      return calendarEvents.map((event) => {
        const { start, end, summary, id } = event;
        return {
          id: id,
          title: summary,
          allDay: false,
          start: new Date(start.dateTime),
          end: new Date(end.dateTime)
        };
      });
    } else {
      return [];
    }
  });

  const handleSelect = (event) => {
    console.log(event);
  };

  console.log(calendarEvents, events);
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 30px)" }}
        selectable={true}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect}
      />
    </div>
  );
}

export default CalendarView;

CalendarView.propTypes = {
  calendarEvents: PropTypes.array.isRequired
};
