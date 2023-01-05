import React from 'react'
import { Container } from 'react-bootstrap';
import "./PricingStyles.css";
import Planes from "../../Images/Planes.png";

export  const Pricing = () => {
  return (
    <Container className="mt-2">
        <h1>Pricing</h1>

        <p>
        In the "Pricing" section, We can see how the payment plans of the 
        application are categorized, in which we have the Bronze Plan, 
        Gold Plan and the Platinium Plan.
        </p>

        <img src={Planes} style={{width: "100%"}} />

        <h2 className="mt-4">Plans Descriptions</h2>

        <h3 color='#DB6551'>Bronze plan</h3>

        <p>The price of this plan consists of US$50 per month and includes:</p>
        
        <li>Technical Support (only by mail).</li>
        <li>Maintenance.</li>
        <li>User Training.</li>

        <h3 color='#DB6551'>Gold plan</h3>

        <p>The price of this plan consists of US$200 per month and includes:</p>
        
        <li>Technical Support 24/7 (only by mail).</li>
        <li>Maintenance.</li>
        <li>User Training.</li>
        <li>Configuration Guide.</li>
        <li>Installation of the System in the Infrastructure.</li>

        <h3>Platinum plan</h3>

        <p>The price of this plan consists of US$1,000 per month and includes:</p>
        
        <li>Technical Support 24/7 (only by mail).</li>
        <li>Maintenance.</li>
        <li>User Training.</li>
        <li>Configuration Guide.</li>
        <li>Installation of the System in the Infrastructure.</li>
        <li>Services Reviews.</li>
        <li>Advisory Consultations.</li>
        <li>Technical Staff Training.</li>

    </Container>
  )
}
