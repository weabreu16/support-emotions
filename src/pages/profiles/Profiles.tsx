import React from 'react';
import { Container } from 'react-bootstrap';
import './ProfilesSS.css';
import TipoDeCuenta_1 from "../../Images/TipoDeCuenta_1.png";
import RegistroEspecialista_1 from "../../Images/RegistroEspecialista_1.png";
import Dashboard_1 from "../../Images/Dashboard_1.png";
import RegistroPaciente_1 from "../../Images/RegistroPaciente _1.png";
import Dashboard_12 from "../../Images/Dashboard_12.png";
import Dashboard_Menu from "../../Images/Dashboard_Menu.png";

export const Profiles = () => {
  return (
    <Container className="mt-2" style={{fontFamily: "'Times New Roman', Times, serif"}}>
        <h2>Profiles</h2>

        <p className="fs-5 mb-4">In this section we will see how specialists/patients can create their accounts to be able to use our application, we will also be able to see how the interface of our application looks when the user who logs in is a specialist or user.</p>


        <div className="row">
            <div className="pro">
                <img src={TipoDeCuenta_1} alt="s2" style={{width: "80%"}} />
                <h6>Figure 1</h6>
            </div>

            <div className="pro">
                <img src={RegistroEspecialista_1} alt="s2" style={{width: "80%"}} />
                <h6>Figure 2</h6>
            </div>

            <div className="pro">
                <img src={Dashboard_1} alt="s2" style={{width: "80%"}} />
                <h6>Figure 3</h6>
            </div>
        </div>

        <p className="fs-5 mb-4">As figure 1 indicates, we offer the user two options to access our benefits:</p>

        <ul>
            <li>Pacient</li>
            <li>Specialist</li>
        </ul>

        <p className="fs-5 mb-4">In the event that the user wishes to use the specialist options, they must enter their ID number as indicated in figure 2.</p>

        <p className="fs-5 mb-4">Once the user registers as a specialist, in the interface the user can identify how their appointments appear on the calendar and at the same time can view the number of patients they have.</p>



        <div className="row">
            <div className="pro">
                <img src={RegistroPaciente_1} alt="s2" style={{width: "80%"}} />
                <h6>Figure 4</h6>
            </div>

            <div className="pro">
                <img src={Dashboard_12} alt="s2" style={{width: "80%"}} />
                <h6>Figure 5</h6>
            </div>

            <div className="pro">
                <img src={Dashboard_Menu} alt="s2" style={{width: "80%"}} />
                <h6>Figure 6</h6>
            </div>
        </div>

        <p className="fs-5 mb-4">As we can see in Figure 4, when the user wishes to register as a patient, they will not be asked for their ID, since their email would be enough for authentication.</p>

        <p className="fs-5 mb-4">Already in Figure 5, the interface that the patient will be using is presented, in this case instead of appearing patients as shown in Figure 3. In this case the user will see their scheduled meetings, their duration and with which specialist they will meet.</p>
    </Container>
  )
}
