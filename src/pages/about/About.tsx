import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutUsStyles.css';

export const About = () => {
  return (
    <Container className="mt-3">
        <h1>About Us</h1>

        <p>We are a team of developers made up of:</p>

        <ul>
            <li>Ashley Moreno.</li>
            <li>William Abreu.</li>
            <li>Porfirio Rodriguez.</li>
            <li>Jose Contreras.</li>
            <li>Joan Ogando.</li>
            <li>Sebastian Restituyo.</li>
        </ul>

        <p>Each member of the group has an assigned role, these roles are structured as follows:</p>

        <ul>
            <li>Ashley Moreno – Team Lead</li>
            <li>Joan Ogando – Software Architect</li>
            <li>William Abreu – Software Architect</li>
            <li>Sebastián Restituyo – Quality Assurance</li>
            <li>Porfirio Rodriguez – Quality Assurance</li>
            <li>Jose Contreras – Business Analyst</li>
        </ul>

        <p>
            The decision to create this project is that due to COVID-19, Dominican society has found
            itself involved in different cases related to mental health. When choosing a degree project,
            we wanted to create an application that, in addition to being something technological,
            impacts society in some way. A mobile application (Emotions) whose purpose is to help people
            who need the help of experts to improve their mental health, in which they can make calls with
            them and read articles published by experts in order to improve their mental health.
        </p>
    </Container>
  )
}
