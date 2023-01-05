import React from 'react'
import { Container } from 'react-bootstrap';
import "./MeetingSS.css";



export const Meeting = () =>{
  return (
    <Container className="mt-2">
        <h1 >Meeting</h1>
        <p className="fs-5 mb-4">In this section you can see how you can schedule your meeting and at the same time we will show you how our interface looks.</p>

        <div className="row">
            <div className="meeting">
                <img src="~/Images/Meeting_Emotion1.png" alt="s2" style={{width:"30%"}} />
            </div>
        </div>

        <p className="fs-5 mb-4" >Here we can see how the chat together with the options we offer to create the meetings.</p>
        <p className="fs-5 mb-4">The user has the opportunity to choose the following options:</p>
        <li>
            <h6>If you want to communicate normally with the specialist you can do so using the "Audio call" option.</h6>
        </li>
        <li>
            <h6> If the user or the specialist needs to communicate face to face and for some reason they cannot meet in person, they can use the "video call" option.</h6>
        </li>
    </Container>
  )
}
