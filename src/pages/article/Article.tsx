import React from 'react';
import { Container, Image } from 'react-bootstrap';
import './ArticleSS.css';
import Articulo_1 from "../../Images/Articulo_1.png";
import Articulo_2 from "../../Images/Articulo_2.png";

export const Article = () => {
  return (
    <Container className="mt-3" style={{fontFamily: "'Times New Roman', Times, serif"}}>
        <h1>Articles</h1>
        <p className="fs-5 mb-4">In this section we can find the articles published by our experts, with this segment we seek that our specialists feel free to be able to publish their opinions about the topics that are worked on in the area of health and psychology.</p>

        <div className="row">
            <div className="article1">
                <Image src={Articulo_1} style={{width: "80%"}} />
                <h6>Figure 1</h6>
            </div>

            <div className="article1">
                <Image src={Articulo_2} style={{width: "80%"}} />
                <h6>Figure 2</h6>
            </div>
        </div>


        <p className="fs-5 mb-4">In figure 1 we can see the different items we can see the following:</p>
        
        <ul>
            <li>Which specialist published the article?</li>
            <li>What date was it published?</li>
            <li>Topic to be covered in the article</li>
        </ul>

        <p className="fs-5 mb-4">The specialist will not have any type of limit when creating articles since we have been in favor of unlimited article creation because we see it as something beneficial for both the specialist and the patients who use the application.</p>

        <p className="fs-5 mb-4">In figure 2 we can see the content of the article, at the time of writing an article there is no character limit, so the specialist can feel free when expressing his ideas or opinions. This as long as the article does not deal with racial issues, gender ideologies, politics, etc.</p>
    </Container>
  )
}
