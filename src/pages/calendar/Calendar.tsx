import React from 'react'
import { Container } from 'react-bootstrap';
import "./CalendarStyles.css";

export  const Calendar = () => {
  return (
    <Container className="mt-2">
        <h1>Calendar</h1>

        <p>
        In the "Calendar" section, we see how the Emotions application calendar can be used,
        in which we can see the appointments scheduled with psychologists and in the same way we
        can also schedule appointments with psychologists. To access the calendar section we need
        to be inside the section, open the application dashboard and select the calendar section
        as we can see in the following attached image...
        </p>

        <div style={{ alignItems: 'center', justifyContent: 'center'}} className="img">
            <img src="~/Images/DashboardForChats.png" />

            <p>Step 1</p>
        </div>

        <p>
            When we are on the "Calendar" screen we can see that we have a calendar of the year in which
            we can choose the day, time and hour in which we want to have the appointment with the
            psychologist we want, also on this screen we can see the events that we are going to have in
            chronological order to the closest. See attached image to see how the screen is displayed.
        </p>

        <div style={{ alignItems: 'center', justifyContent: 'center'}} className="img">
            <img src="~/Images/CalendarEmotions.png" />

            <p>Step 2</p>
        </div>

        <p>
            In the image of the "Step 3" we can see how the screen would be displayed when a new event is being
            created in which the title of the meeting is placed, the psychologist with whom we want the
            meeting is selected, the time at which it begins and in which we want it to end and if we want
            it to be repeated from time to time.
        </p>

        <div style={{ alignItems: 'center', justifyContent: 'center'}} className="img">
            <img src="~/Images/CalendarEventEmotions.png" />
            <p>Step 3</p>
        </div>

        <p>
            Finally we have the details screen about the meeting scheduled in the calendar,
            in which we can see the title that has been assigned to this meeting, when the
            meeting will be held, the time it will last, who are the participants
            (both the patient as the psychologist), and the description of this, we can
            also join said meeting through this same screen in case it is time for the meeting.
        </p>

        <div style={{ alignItems: 'center', justifyContent: 'center'}} className="img">
            <img src="~/Images/CalendarDetailsEmotions.png" />

            <p>Step 4</p>
        </div>

        <p>
            By being on the calendar screen we can be aware of all the meetings that we have
            pending and close to the date we are on and in the same way we can schedule
            other meetings if needed.
        </p>
    </Container>
  )
}
