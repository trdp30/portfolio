/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
var CLIENT_ID = process.env.REACT_APP_GOOGLE_API_CLIENT_ID;
var API_KEY = process.env.REACT_APP_GOOGLE_API_API_KEY;
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

function Calendar() {
  const [isSignedIn, toggleSignIn] = useState(false);
  function handleClientLoad() {
    gapi.load("client:auth2", initClient);
  }

  function initClient() {
    gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      })
      .then(
        function () {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          // authorizeButton.onclick = handleAuthClick;
          // signoutButton.onclick = handleSignoutClick;
        },
        function (error) {
          appendPre(JSON.stringify(error, null, 2));
        }
      );
  }

  function updateSigninStatus(isSignedIn) {
    toggleSignIn(isSignedIn);
    if (isSignedIn) {
      // authorizeButton.style.display = "none";
      // signoutButton.style.display = "block";
      listUpcomingEvents();
    } else {
      // authorizeButton.style.display = "block";
      // signoutButton.style.display = "none";
    }
  }

  function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
  }

  function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
  }

  function listUpcomingEvents() {
    gapi.client.calendar.events
      .list({
        calendarId: "primary",
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: "startTime"
      })
      .then(function (response) {
        var events = response.result.items;
        console.log("Upcoming events:");

        if (events.length > 0) {
          for (let i = 0; i < events.length; i++) {
            var event = events[i];
            var when = event.start.dateTime;
            if (!when) {
              when = event.start.date;
            }
            console.log(event.summary + " (" + when + ")");
          }
        } else {
          console.log("No upcoming events found.");
        }
      });
  }

  useEffect(() => {
    handleClientLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isSignedIn ? (
        <button id="signout_button" className="ui negative button" onClick={handleSignoutClick}>
          Sign Out
        </button>
      ) : (
        <button id="authorize_button" className="ui positive button" onClick={handleAuthClick}>
          Authorize
        </button>
      )}
    </>
  );
}

export default Calendar;
