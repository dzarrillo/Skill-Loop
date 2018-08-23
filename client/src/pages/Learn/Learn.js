import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";


class Learn extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <p>The Learning Page</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Learn;