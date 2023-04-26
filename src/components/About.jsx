import { Col, Container, Row } from "react-bootstrap";

export default function About(){

    return (
        <section>
        <Container className="bg-danger">
            <Row >
                <Col>
                <img src="https://picsum.photos/300/300"
                alt="profile pict" />
                </Col>

                <Col>
                <h1> Hi I am Brian</h1>
                <p>I have many interests such as ...</p>
                <p>Contact me: email@email.com</p>
                </Col>
            </Row>
        </Container>
        </section>
    )
}