import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';

export const Contact = () => {
  return (
    <Container className="mt-3">
        <h1>Contact</h1>

        <address style={{fontFamily: "'Times New Roman', Times, serif"}}>
            Intec<br />
            Avenida de Los Próceres #49, Los Jardines del Norte 10602<br />
            <abbr title="Phone">P:</abbr>
            (809) 567-9271
        </address>

        <address style={{fontFamily: "'Times New Roman', Times, serif"}}>
            <strong>Support:</strong>   <a href="mailto:Support@example.com">emotions@gmail.com</a><br />
            <strong>Marketing:</strong> <a href="mailto:Marketing@example.com">emotions@outlook.com.ar</a>
        </address>

        <h5 className="mt-5">Follow us in social media</h5>
        <Container style={{display: "flex", justifyContent: "center"}}>
            <div className="wrapper">
                <div className="social">
                    <div className="icon"><i className="fab fa-youtube"></i></div>
                    <a href="https://youtu.be/q-z-U19ck9U" style={{textDecoration: "none", color: "black"}}>
                        <span>Emotions</span>
                    </a>
                </div>
                <div className="social">
                    <div className="icon"><i className="fab fa-instagram"></i></div>
                    <a href="https://www.instagram.com/ashxmoreno/" style={{textDecoration: "none", color: "black"}}>
                        <span>ashxmoreno</span>
                    </a> 
                </div>
                <div className="social">
                    <div className="icon"><i className="fab fa-github"></i></div>
                    <a href="https://github.com/EmotionsAPP" style={{textDecoration: "none", color: "black"}}>
                        <span>EmotionsAPP</span>
                    </a>
                </div>
            </div>
        </Container>
    </Container>
  )
}
