import React from 'react';
import { Container } from 'react-bootstrap';
import './HowToSS.css';
import InicioSesion_1 from "../../Images/InicioSesion_1.png";
import Landing_Page from "../../Images/Landing Page.png";

export const HowTo = () => {
  return (
    <Container className="mt-2" style={{fontFamily: "'Times New Roman', Times, serif"}}>
        <h1>How to install Emotions</h1>
        <p className="fs-5 mb-4">In this section we will explain the requirements you need to be able to install and use our application effectively.</p>

        <div className="row">
            <div className="install">
                <img src={InicioSesion_1} alt="s2" style={{width: "80%"}} />
                <h6>Figure 1</h6>
            </div>

            <div className="install">
                <img src={Landing_Page} alt="s2" style={{width: "80%"}} />
                <h6>Figure 2</h6>
            </div>
        </div>

        <h2>Hardware Requirements</h2>
        <p className="fs-5 mb-4">Because the system consists of two applications, the list of requirements is different. For the Web Application (Server/Backoffice), the necessary hardware must comply with the following:</p>
        <ul>
            <li>Dual 64-bit Intel Xeon E5-2670V3 2.5 GHz processor or higher specifications.</li>
            <li>At least 2GB of RAM.</li>
            <li>At least 4 virtual processors (vCPUs).</li>
            <li>Minimum required storage space of 1GB.</li>
        </ul>


        <h2>Software Requirements</h2>
        <p className="fs-5 mb-4">Regarding the Mobile Application (Client), the mobile device (hardware) must follow the following specifications:</p>
        <ul>
            <li>Android 4.1/IOS 9 system or higher.</li>
            <li>Storage of 200MB available or higher.</li>
        </ul>

        <h2>Steps to Install Emotions</h2>
        <p className="fs-5 mb-4">The steps to install the application are as follows:</p>
        <ol>
            <li>Search the app store on your Android/iOS device.</li>
            <li>You will write the name of the application in the search box (It is located at the top of the screen).</li>
            <li>Touch the search button.</li>
            <li>Select the application in the results you have obtained.</li>
            <li>Touch the install button which is a green button in the case of Android and Get which is a blue button in the case of iOS.</li>
            <li>Touch the open button.</li>
        </ol>
    </Container>
  )
}
