import React, { useState } from "react";
import moment from "moment";
import PropsTypes from "prop-types";

function CreateEvent(props) {
  const { insertEvent, start, end } = props;
  const [eventDetails, seEventDetails] = useState({});
  //   temp1.events.insert({
  //     calendarId: "primary",
  //     event: {
  //   'summary': 'Test',
  //   'start': {
  //     'dateTime': new Date("2020-10-18T13:15:18+05:30").toISOString(),
  //     'timeZone': 'Asia/Kolkata'
  //   },
  //   'end': {
  //     'dateTime': new Date("2020-10-18T13:20:18+05:30").toISOString(),
  //     'timeZone': 'Asia/Kolkata'
  //   },
  //   'attendees': [
  //     {'email': 'trideep.k@talview.com'},
  //     {'email': 'tujit.bora@gmail.com'}
  //   ]
  // }
  // }).then((res) => console.log("res: ", res))

  const updateDetails = (e) => {
    seEventDetails({
      ...eventDetails,
      [e.target.name]: e.target.value
    });
  };

  const save = () => {
    const event = {
      calendarId: "primary",
      event: {
        summary: eventDetails.summary,
        start: {
          dateTime: moment(eventDetails.start).toISOString(),
          timeZone: "Asia/Kolkata"
        },
        end: {
          dateTime: moment(eventDetails.end).toISOString(),
          timeZone: "Asia/Kolkata"
        },
        attendees: [{ email: eventDetails.attendees }]
      }
    };
    insertEvent(event);
  };

  return (
    <div className="ui form">
      <div className="field">
        <label>Summary</label>
        <input type="text" name="summary" value={eventDetails.summary} onChange={updateDetails} />
      </div>
      <div className="field">
        <label>Start At</label>
        <input type="date" name="start" value={eventDetails.start} onChange={updateDetails} />
      </div>
      <div className="field">
        <label>End At</label>
        <input type="date" name="end" value={eventDetails.end} onChange={updateDetails} />
      </div>
      <div className="field">
        <label>Attendees</label>
        <input
          type="email"
          name="attendees"
          value={eventDetails.attendees}
          onChange={updateDetails}
        />
      </div>
    </div>
  );
}

export default CreateEvent;

CreateEvent.propTypes = {
  insertEvent: PropsTypes.func.isRequired,
  start: PropsTypes.string,
  end: PropsTypes.string
};
