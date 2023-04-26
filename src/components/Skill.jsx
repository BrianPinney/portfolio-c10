import { Container, Row, Col } from "react-bootstrap";

export default function Skills(){

    return (
        <section>
            <Container>
                <Row>
                    <Col className="text-center">
                    <h2>Skills that pay the bills</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <ul>
                        <li>React.js</li>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>CSS</li>
                        <li>Express.js</li>
                    </ul>
                    </Col>
                </Row>
            </Container>
      
        </section>
    )
}