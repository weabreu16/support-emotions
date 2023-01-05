import React from 'react';
import { Container } from 'react-bootstrap';

export const Contact = () => {
  return (
    <Container className="mt-2">
        <h2>Contact</h2>

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
    </Container>
  )
}
