import React from 'react'
import { Container } from 'react-bootstrap';
import "./InfoStyles.css";
import DashboardForChats from "../../Images/DashboardForChats.png";
import Mensajes from "../../Images/Mensajes.png";
import ChatEmotions from "../../Images/ChatEmotions.png";

export  const Chats = () => {
  return (
    <Container className="mt-2">
        <h1>Chats</h1>
        <p>
            In this section we can see how the chat of the Emotions application works,
            the chat of this application helps us to communicate with the psychologists
            registered in the application and who can help us with the mental health
            problems that we are going through at that time. To access the chats
            with psychologists we must open the application dashboard, see attached image.
        </p>

        <div className="img">
            <img src={DashboardForChats} />
        </div>
        <p className="step">Step 1</p>

        <p>
            In the Dashboard image we can see each of the options that can be chosen,
            but to access the chats we must select "Messages", by selecting this
            option we will access the screen that we will see in the following image.
        </p>

        <div className="img">
            <img src={Mensajes} />
        </div>
        <p className="step">Step 2</p>

        <p>
            After entering the "Messages" screen, we can see who is available and here we
            have the video call or text message chat options, here we will select the text
            messages section by pressing the button with the message icon. After pressing
            this button we would be on the chat screen which we can see in the attached image.
        </p>

        <div className="img">
            <img src={ChatEmotions} />
        </div>
        <p className="step">Step 3</p>

        <p>
            Being on the chat screen of the psychologist with whom we want to talk,
            we can start sending messages or go from a chat to a meeting.
        </p>
    </Container>
  )
}
